import "./Meeting.css";

import { makeStyles } from "@material-ui/core/styles";

import React, { useEffect, useState, useRef } from "react";
import { useSnackbar } from "notistack";

import { IconButton } from "@material-ui/core";

import MicRoundedIcon from "@material-ui/icons/MicRounded";
import MicOffRoundedIcon from "@material-ui/icons/MicOffRounded";

import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import VideocamOffRoundedIcon from "@material-ui/icons/VideocamOffRounded";

import FlipCameraAndroidIcon from "@material-ui/icons/FlipCameraAndroid";

import Peer from "peerjs";
import io from "socket.io-client";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#141414",
  },
  grid: {
    height: "100vh",
    display: "flex",
  },
  controls: {
    backgroundColor: "white",
    height: "70px",
    width: "100vw",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mediaConstraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

const iceServers = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:19302" },
    { urls: "stun:stun3.l.google.com:19302" },
    { urls: "stun:stun4.l.google.com:19302" },
  ],
};

let id;
let videoGrid;
let localStream;
let remoteStream;
let isRoomCreator;

let socket;
let roomId;

let conn = {};

const Meeting = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  const [connection, setConnection] = useState({});

  const micButton = useRef(null);
  const camButton = useRef(null);
  // const flipButton = useRef(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const toggleMic = (stream) => {
    const enabled = stream.getTracks()[0].enabled;
    stream.getTracks()[0].enabled = !enabled;
    setMic(!enabled);
  };

  const toggleCam = (stream) => {
    const enabled = stream.getTracks()[1].enabled;
    stream.getTracks()[1].enabled = !enabled;
    setCam(!enabled);

    // if (flipButton.current)
    //   flipButton.current.style.display = enabled ? "none" : "block";
  };

  useEffect(() => {
    socket = io.connect("/");

    const url = window.location.href;
    roomId = url.split("/")[url.split("/").length - 1];

    videoGrid = document.getElementById("video-grid");

    const myVideo = document.createElement("video");
    myVideo.muted = true;

    socket.on("connected", async (myId) => {
      console.log(myId);
      id = myId;

      console.log("User Id : " + id);

      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
      } catch (error) {
        console.error("Could not get user media", error);
      }

      localStream = stream;
      addVideoStream(videoGrid, myVideo, stream, id);

      socket.emit("join-room", roomId, id);

      micButton.current.addEventListener("click", async () => {
        console.log(localStream.getTracks());

        let audTrack = localStream.getTracks().find((el) => {
          return el.kind === "audio";
        });
        if (audTrack) {
          setMic(false);
          audTrack.enabled = !audTrack.enabled;

          setTimeout(() => {
            audTrack.stop();
            localStream.removeTrack(audTrack);
          }, 500);
        } else {
          setMic(true);
          let stream;
          try {
            stream = await navigator.mediaDevices.getUserMedia({
              audio: true,
            });
          } catch (error) {
            console.error("Could not get user media", error);
          }

          localStream.addTrack(stream.getTracks()[0]);

          for (let userId in conn) {
            console.log(conn[userId].getSenders());
            conn[userId].getSenders()[0].replaceTrack(stream.getTracks()[0]);
          }
        }
      });
      camButton.current.addEventListener("click", async () => {
        console.log(localStream.getTracks());

        let vidTrack = localStream.getTracks().find((el) => {
          return el.kind === "video";
        });
        if (vidTrack) {
          setCam(false);
          vidTrack.enabled = !vidTrack.enabled;

          setTimeout(() => {
            vidTrack.stop();
            localStream.removeTrack(vidTrack);
          }, 500);
        } else {
          setCam(true);
          let stream;
          try {
            stream = await navigator.mediaDevices.getUserMedia({
              video: { width: 1280, height: 720 },
            });
          } catch (error) {
            console.error("Could not get user media", error);
          }

          localStream.addTrack(stream.getTracks()[0]);

          for (let userId in conn) {
            console.log(conn[userId].getSenders());
            conn[userId].getSenders()[1].replaceTrack(stream.getTracks()[0]);
          }
        }
      });

      // SOCKET EVENT CALLBACKS =====================================================
      socket.on("room_created", async () => {
        console.log("Socket event callback: room_created");

        isRoomCreator = true;
      });

      socket.on("room_joined", async () => {
        console.log("Socket event callback: room_joined");

        socket.emit("start_call", roomId, id);
      });

      // SOCKET EVENT CALLBACKS =====================================================
      socket.on("start_call", async (userId) => {
        console.log("Socket event callback: start_call from " + userId);

        let rtcPeerConnection = new RTCPeerConnection(iceServers);
        addLocalTracks(rtcPeerConnection);

        conn[userId] = rtcPeerConnection;

        rtcPeerConnection.ontrack = (event) => {
          console.log(event);
          setRemoteStream(event, userId);
        };
        rtcPeerConnection.onicecandidate = (event) => {
          sendIceCandidate(event, userId);
        };

        await createOffer(rtcPeerConnection, userId);
      });

      socket.on("webrtc_offer", async (event, userId) => {
        console.log("Socket event callback: webrtc_offer from " + userId);

        let rtcPeerConnection = new RTCPeerConnection(iceServers);
        addLocalTracks(rtcPeerConnection);

        conn[userId] = rtcPeerConnection;

        rtcPeerConnection.ontrack = (event) => {
          setRemoteStream(event, userId);
        };
        rtcPeerConnection.onicecandidate = (event) => {
          sendIceCandidate(event, userId);
        };
        rtcPeerConnection.setRemoteDescription(
          new RTCSessionDescription(event)
        );

        await createAnswer(rtcPeerConnection, userId);
      });

      socket.on("webrtc_answer", (event, userId) => {
        console.log("Socket event callback: webrtc_answer from " + userId);

        console.log(conn);
        conn[userId].setRemoteDescription(new RTCSessionDescription(event));
      });

      socket.on("webrtc_ice_candidate", (event, userId) => {
        console.log(
          "Socket event callback: webrtc_ice_candidate from " + userId
        );

        // ICE candidate configuration.
        var candidate = new RTCIceCandidate({
          sdpMLineIndex: event.label,
          candidate: event.candidate,
        });
        conn[userId].addIceCandidate(candidate);
      });

      socket.on("user-disconnected", (userId) => {
        console.log(userId + " disconnected");

        if (conn[userId]) conn[userId].close();

        const vidEl = document.getElementById(userId);
        if (vidEl) {
          vidEl.remove();
          setCount((count) => count - 1);
        }
      });
    });
  }, []);

  const addVideoStream = (videoGrid, video, stream, id) => {
    video.srcObject = stream;
    video.setAttribute("id", id);
    video.classList.add("video");
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    videoGrid.append(video);

    // setCount((count) => count + 1);
  };

  // FUNCTIONS ==================================================================
  function addLocalTracks(rtcPeerConnection) {
    localStream.getTracks().forEach((track) => {
      rtcPeerConnection.addTrack(track, localStream);
    });
  }

  async function createOffer(rtcPeerConnection, userId) {
    let sessionDescription;
    try {
      sessionDescription = await rtcPeerConnection.createOffer();
      rtcPeerConnection.setLocalDescription(sessionDescription);
    } catch (error) {
      console.error(error);
    }

    socket.emit(
      "webrtc_offer",
      {
        type: "webrtc_offer",
        sdp: sessionDescription,
        roomId,
      },
      userId,
      id
    );
  }

  async function createAnswer(rtcPeerConnection, userId) {
    let sessionDescription;
    try {
      sessionDescription = await rtcPeerConnection.createAnswer();
      rtcPeerConnection.setLocalDescription(sessionDescription);
    } catch (error) {
      console.error(error);
    }

    socket.emit(
      "webrtc_answer",
      {
        type: "webrtc_answer",
        sdp: sessionDescription,
        roomId,
      },
      userId,
      id
    );
  }

  function setRemoteStream(event, userId) {
    console.log(event);
    if (event.track.kind === "video") {
      let video = document.createElement("video");
      addVideoStream(videoGrid, video, event.streams[0], userId);
    }
  }

  function sendIceCandidate(event, userId) {
    if (event.candidate) {
      socket.emit(
        "webrtc_ice_candidate",
        {
          roomId,
          label: event.candidate.sdpMLineIndex,
          candidate: event.candidate.candidate,
        },
        id
      );
    }
  }

  return (
    <div className={classes.root}>
      {/* <h2>MEETING</h2> */}
      <div
        id="video-grid"
        className={classes.grid}
        style={{
          gridTemplateColumns: `repeat(auto-fill, ${
            count > 0 ? 100 / count : 100
          }vw)`,
          gridAutoRows: "calc(100vh - 70px)",
        }}
      ></div>
      <div className={classes.controls}>
        <IconButton
          ref={micButton}
          style={{ color: mic ? "grey" : "red", marginRight: "10px" }}
        >
          {mic ? (
            <MicRoundedIcon style={{ fontSize: "30px" }} />
          ) : (
            <MicOffRoundedIcon style={{ fontSize: "30px" }} />
          )}
        </IconButton>
        <IconButton
          ref={camButton}
          style={{ color: cam ? "grey" : "red", marginLeft: "10px" }}
        >
          {cam ? (
            <VideocamRoundedIcon style={{ fontSize: "30px" }} />
          ) : (
            <VideocamOffRoundedIcon style={{ fontSize: "30px" }} />
          )}
        </IconButton>
        {/* <IconButton
          style={{ marginLeft: "20px", display: "none" }}
          ref={flipButton}
        >
          <FlipCameraAndroidIcon style={{ fontSize: "30px" }} />
        </IconButton> */}
      </div>
    </div>
  );
};

export default Meeting;
