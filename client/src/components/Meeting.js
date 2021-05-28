import "./Meeting.css";

import { makeStyles } from "@material-ui/core/styles";

import React, { useEffect, useState, useRef } from "react";
import { useSnackbar } from "notistack";

import { IconButton, Button, CircularProgress } from "@material-ui/core";

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
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
  loader: {
    height: "120px",
    width: "100vw",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  join: {
    textTransform: "none",
    fontSize: "20px",
    padding: "4px 20px",
    marginRight: "15px",
    fontWeight: 600,
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "rgb(0, 101, 255)",
      color: "white",
    },
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

let socket;
let roomId;

let conn = {};

const Meeting = () => {
  const classes = useStyles();

  const [join, setJoin] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const [count, setCount] = useState(0);

  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  // const flipButton = useRef(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(async () => {
    const url = window.location.href;
    roomId = url.split("/")[url.split("/").length - 1];

    videoGrid = document.getElementById("video-grid");

    const myVideo = document.createElement("video");
    myVideo.muted = true;

    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
      // stream = await navigator.mediaDevices.getDisplayMedia();
    } catch (error) {
      alert("Could not get user media. Check your media devices or Refresh");
      console.error("Could not get user media", error);
    }

    localStream = stream;
    addVideoStream(videoGrid, myVideo, stream, "my-video");

    setLoading(false);
    setTimeout(() => {
      setShowControls(true);
    }, [1000]);
  }, []);

  const toggleMic = async (joined) => {
    setMic((mic) => !mic);
    console.log(localStream.getTracks());

    let audTrack = localStream.getTracks().find((el) => {
      return el.kind === "audio";
    });

    if (audTrack.readyState === "live") {
      audTrack.enabled = !audTrack.enabled;

      setTimeout(() => {
        audTrack.stop();
      }, 500);
    } else {
      try {
        let stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        localStream.removeTrack(audTrack);
        localStream.addTrack(stream.getTracks()[0]);

        if (joined)
          for (let userId in conn) {
            console.log(conn[userId].getSenders());
            conn[userId].getSenders()[0].replaceTrack(stream.getTracks()[0]);
          }
      } catch (error) {
        console.error("Could not get user media", error);
      }
    }
  };

  const toggleCam = async (joined) => {
    setCam((cam) => !cam);
    console.log(localStream.getTracks());

    let vidTrack = localStream.getTracks().find((el) => {
      return el.kind === "video";
    });

    if (vidTrack.readyState === "live") {
      vidTrack.enabled = !vidTrack.enabled;

      setTimeout(() => {
        vidTrack.stop();
      }, 500);
    } else {
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 },
        });

        localStream.removeTrack(vidTrack);
        localStream.addTrack(stream.getTracks()[0]);

        if (joined)
          for (let userId in conn) {
            console.log(conn[userId].getSenders());
            conn[userId].getSenders()[1].replaceTrack(stream.getTracks()[0]);
          }
      } catch (error) {
        console.error("Could not get user media", error);
      }
    }
  };

  const connectToSocket = () => {
    socket = io.connect("/");

    socket.on("connected", async (myId) => {
      setJoin(1);
      id = myId;

      console.log("User Id : " + id);

      socket.emit("join-room", roomId, id);

      // SOCKET EVENT CALLBACKS =====================================================
      socket.on("room_created", async () => {
        console.log("Socket event callback: room_created");
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

        handleClick(userId + " joined", "success");

        rtcPeerConnection.ontrack = (event) => {
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
        handleClick(userId + " left", "error");

        if (conn[userId]) conn[userId].close();

        const vidEl = document.getElementById(userId);
        if (vidEl) {
          vidEl.remove();
          setCount((count) => count - 1);
        }
      });
    });
  };

  const addVideoStream = (videoGrid, video, stream, userId) => {
    video.srcObject = stream;
    video.setAttribute("id", userId);
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
      <div id="video-grid" className={classes.grid}>
        {loading ? <CircularProgress /> : null}
      </div>
      {showControls ? (
        <div className={classes.controls}>
          {join === -1 ? (
            <Button
              variant="outlined"
              onClick={() => {
                connectToSocket();
                setJoin(0);
              }}
              className={classes.join}
            >
              Join
            </Button>
          ) : join === 0 ? (
            <CircularProgress />
          ) : null}
          <IconButton
            style={{ color: mic ? "grey" : "red", marginRight: "10px" }}
            onClick={() => {
              toggleMic(join === 1);
            }}
          >
            {mic ? (
              <MicRoundedIcon style={{ fontSize: "30px" }} />
            ) : (
              <MicOffRoundedIcon style={{ fontSize: "30px" }} />
            )}
          </IconButton>
          <IconButton
            style={{ color: cam ? "grey" : "red", marginLeft: "10px" }}
            onClick={() => {
              toggleCam(join === 1);
            }}
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
      ) : null}
    </div>
  );
};

export default Meeting;
