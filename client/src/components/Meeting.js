import "./Meeting.css";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import React, { useEffect, useState, useRef } from "react";
import { useSnackbar } from "notistack";

import Messages from "./Messages";

import {
  IconButton,
  Button,
  CircularProgress,
  Drawer,
  Divider,
} from "@material-ui/core";

import MicRoundedIcon from "@material-ui/icons/MicRounded";
import MicOffRoundedIcon from "@material-ui/icons/MicOffRounded";

import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import VideocamOffRoundedIcon from "@material-ui/icons/VideocamOffRounded";

import ScreenShareRoundedIcon from "@material-ui/icons/ScreenShareRounded";
import StopScreenShareRoundedIcon from "@material-ui/icons/StopScreenShareRounded";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import SendIcon from "@material-ui/icons/Send";

import ForumIcon from "@material-ui/icons/Forum";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";

import io from "socket.io-client";

import axios from "axios";

const drawerWidth = "min(calc(100vw - 20px), 400px)";

const useStyles = makeStyles((theme) => ({
  chat: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "rgb(250,250,250)",
    width: drawerWidth,
    height: "calc(100vh - 80px)",
    margin: "5px 10px 0px 5px",
    borderRadius: "20px",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  root: {
    height: "100vh",
    backgroundColor: "#141414",
  },
  grid: {
    // height: "calc(100vh - 70px)",
    height: "100vh",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(200px, 50vmin), 1fr))",
    gridAutoRows: "minmax(min(200px, 50vmin), 1fr)",
    // flexWrap: "wrap",
    overflowX: "auto",
    // justifyContent: "center",
    alignItems: "center",
    transition: "0.4s ease-in-out",
  },
  controls: {
    // backgroundColor: "rgb(60,60,60)",
    height: "70px",
    // width: "100vw",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    backgroundColor: "rgb(60,60,60,0.8)",
    borderRadius: "35px",
    padding: "0px 30px",
    display: "flex",
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
    borderRadius: "30px",
    transition: "0.3s ease-in-out",
    color: "white",
    backgroundColor: "rgb(0, 82, 206)",
    "&:hover": {
      backgroundColor: "rgb(0, 101, 255)",
      color: "white",
    },
  },
  inputBox: {
    outline: 0,
    backgroundColor: "rgb(220,220,220)",
    width: "300px",
    border: 0,
    borderRadius: "20px",
    height: "20px",
    resize: "none",
    padding: "10px 15px",
    "&::placeholder": {},
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  user: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "rgb(250,250,250)",
    transition: "0.4s ease-in-out",
    "&:hover": {
      backgroundColor: "rgb(240,240,240)",
    },
  },
}));

const mediaConstraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

const iceServers = {
  iceServers: [
    { url: "stun:stun.l.google.com:19302" },
    { url: "stun:stun1.l.google.com:19302" },
    { url: "stun:stun2.l.google.com:19302" },
    { url: "stun:stun3.l.google.com:19302" },
    { url: "stun:stun4.l.google.com:19302" },
    { url: "stun:stun.12connect.com:3478" },
    { url: "stun:stun.12voip.com:3478" },
  ],
};

let videoGrid;

let id;
let scrId;

let camera = true;

let localStream;
let localScreen;

let socket;
let scrSocket = null;

let roomId;

let conn = {};
let scrConn = {};

let conv = [];

const Meeting = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [join, setJoin] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(false);

  // const [count, setCount] = useState(0);

  const [inputString, setInputString] = useState("");
  const [messages, setMessages] = useState([]);

  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);
  const [scrn, setScrn] = useState(false);

  const [open, setOpen] = useState(false);
  const [openA, setOpenA] = useState(false);

  const [users, setUsers] = useState([]);

  const chatBox = useRef(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleDrawerOpenA = () => {
    setOpenA(true);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      chatBox.current.focus();

      const chatScreen = document.getElementById("chat-screen");
      if (chatScreen) {
        chatScreen.scrollTop = chatScreen.scrollHeight;
      }
    }
  }, [open]);

  const handleDrawerCloseA = () => {
    setOpenA(false);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    let text = event.target.value;
    setInputString(text.trimStart());
  };

  const sendMessage = (fromId, msg) => {
    let text;
    if (msg) text = msg;
    else {
      let val = chatBox.current.value;
      text = val.trim();
    }

    if (!fromId) socket.emit("send-message", text);

    let curr = [...conv];
    console.log(curr);
    const newMsg = {
      user: fromId ? fromId : "me",
      message: text,
      time: new Date(),
    };
    curr.push(newMsg);
    conv.push(newMsg);
    setMessages(curr);
  };

  useEffect(() => {
    setInputString("");
    if (chatBox.current) chatBox.current.focus();
  }, [messages]);

  useEffect(() => {
    if (join === 1) {
      chatBox.current.addEventListener("keyup", (event) => {
        if (event.code === "Enter" || event.key === "Enter") {
          if (event.target.value !== "" && !event.shiftKey) sendMessage();
        }
      });
      chatBox.current.addEventListener("keydown", (event) => {
        if (event.code === "Enter" || event.key === "Enter") {
          if (!event.shiftKey) event.preventDefault();
        }
      });
    }
  }, [join]);

  const getReady = async () => {
    const url = window.location.href;
    roomId = url.split("/")[url.split("/").length - 1];

    videoGrid = document.getElementById("video-grid");

    const myVideo = document.createElement("video");
    myVideo.muted = true;

    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
      // stream = await navigator.mediaDevices.getDisplayMedia();

      localStream = stream;
      addVideoStream(videoGrid, myVideo, stream, "my-video", true);

      setLoading(false);
      setTimeout(() => {
        setShowControls(true);
      }, [1000]);
    } catch (error) {
      alert("Could not get user media. Check your media devices or Refresh");
      console.error("Could not get user media", error);
    }

    // window.addEventListener("wheel", (event) => {
    //   // event.preventDefault();

    //   const delta = event.deltaY;
    //   document.getElementById("video-grid").scrollLeft += delta * 0.5;
    // });
  };

  useEffect(() => {
    axios
      .get("/api/turn")
      .then((res) => {
        const turn = res.data;
        if (turn.length !== 0) {
          turn.forEach((server) => {
            iceServers.iceServers.push({ url: server });
          });
          console.log("TURN enabled !!!");
        } else console.log("No TURN !!!");

        getReady();
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      if (localStream)
        localStream.getTracks().forEach((track) => {
          track.stop();
        });
      if (localScreen)
        localScreen.getTracks().forEach((track) => {
          track.stop();
        });
      if (socket) {
        socket.disconnect();
      }
      if (scrSocket) {
        scrSocket.disconnect();
      }
    };
  }, []);

  const toggleMic = async (joined) => {
    setMic((mic) => !mic);

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
            conn[userId].getSenders()[0].replaceTrack(stream.getTracks()[0]);
          }
      } catch (error) {
        alert("Could not get user media. Check your media devices or Refresh");
        console.error("Could not get user media", error);
      }
    }
  };

  const toggleCam = async (joined) => {
    setCam((cam) => !cam);

    let vidTrack = localStream.getTracks().find((el) => {
      return el.kind === "video";
    });

    if (vidTrack.readyState === "live") {
      vidTrack.enabled = !vidTrack.enabled;

      setTimeout(() => {
        vidTrack.stop();

        if (id) {
          socket.emit("video-stopped", roomId, id);
        }
        toggleCard("my-video", false);
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
            console.log(userId, conn[userId].connectionState);
            conn[userId].getSenders()[1].replaceTrack(stream.getTracks()[0]);
          }

        if (id) {
          socket.emit("video-started", roomId, id);
        }
        toggleCard("my-video", true);
      } catch (error) {
        alert("Could not get user media. Check your media devices or Refresh");
        console.error("Could not get user media", error);
      }
    }
  };

  const toggleCard = (userId, status) => {
    let vid, prof;

    if (userId === "my-video") {
      vid = document.getElementById("video-" + userId);
      prof = document.getElementById("prof-" + userId);
    } else {
      vid = document.getElementById("video-VID-" + userId);
      prof = document.getElementById("prof-VID-" + userId);
    }

    if (!vid || !prof) return;

    if (status && vid.classList.contains("hidden")) {
      vid.classList.remove("hidden");
      prof.classList.add("hidden");
    } else if (!status && !vid.classList.contains("hidden")) {
      prof.classList.remove("hidden");
      vid.classList.add("hidden");
    }
  };

  useEffect(() => {
    camera = cam;
  }, [cam]);

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

        socket.emit("start_call", roomId, id, cam);
      });

      socket.on("start_call", async (userId, status) => {
        console.log("Socket event callback: start_call from " + userId);

        let rtcPeerConnection = new RTCPeerConnection(iceServers);
        addLocalTracks(rtcPeerConnection);

        conn[userId] = rtcPeerConnection;

        setUsers((curr) => {
          return [...curr, userId];
        });

        console.log(conn[userId].connectionState);
        console.log("before " + camera);

        handleClick(userId + " joined", "success");

        rtcPeerConnection.ontrack = (event) => {
          setRemoteStream(event, userId, status);
        };
        rtcPeerConnection.onicecandidate = (event) => {
          sendIceCandidate(event, userId);
        };
        rtcPeerConnection.onconnectionstatechange = (event) => {
          console.log(event);
          console.log(rtcPeerConnection.connectionState);
          if (rtcPeerConnection.connectionState === "failed") {
            console.log("Restarting Ice ...");
            rtcPeerConnection.restartIce();
          }
        };

        await createOffer(rtcPeerConnection, userId);
      });

      socket.on("webrtc_offer", async (event, userId, status) => {
        console.log(
          "Socket event callback: webrtc_offer from " + userId,
          status
        );

        let rtcPeerConnection = new RTCPeerConnection(iceServers);
        addLocalTracks(rtcPeerConnection);

        conn[userId] = rtcPeerConnection;

        setUsers((curr) => {
          return [...curr, userId];
        });

        rtcPeerConnection.ontrack = (event) => {
          setRemoteStream(event, userId, status);
        };
        rtcPeerConnection.onicecandidate = (event) => {
          sendIceCandidate(event, userId);
        };
        rtcPeerConnection.setRemoteDescription(
          new RTCSessionDescription(event)
        );
        rtcPeerConnection.onconnectionstatechange = (event) => {
          console.log(event);
          console.log(rtcPeerConnection.connectionState);
        };

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

      socket.on("video-stopped", (userId) => {
        console.log("video-stopped " + userId);
        toggleCard(userId, false);
      });

      socket.on("video-started", (userId) => {
        console.log("video-started " + userId);
        toggleCard(userId, true);
      });

      socket.on("connect_screen", (fromId) => {
        socket.emit("connect_screen", fromId);
      });

      socket.on("incoming-message", (fromId, msg) => {
        sendMessage(fromId, msg);
      });

      socket.on("user-disconnected", (userId) => {
        if (conn[userId]) conn[userId].close();

        setUsers((curr) => {
          let filtered = curr.filter((el) => {
            return el !== userId;
          });
          console.log(filtered);
          return filtered;
        });

        const audEl = document.getElementById("AUD-" + userId);
        if (audEl) {
          audEl.remove();
        }
        const vidEl = document.getElementById("VID-" + userId);
        if (vidEl) {
          vidEl.remove();
          handleClick(userId + " left", "error");
        }
      });
    });
  };

  const screenShare = async () => {
    if (scrSocket === null) {
      // const myVideo = document.createElement("video");
      // myVideo.muted = true;

      let stream;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia();
        // stream = await navigator.mediaDevices.getDisplayMedia();

        localScreen = stream;
        setScrn(true);
        // addVideoStream(videoGrid, myVideo, stream, "my-screen");

        stream.getTracks()[0].onended = () => {
          setScrn(false);
          scrSocket.disconnect();
          scrSocket = null;
        };

        scrSocket = io.connect("/");

        scrSocket.on("connected", async (myId) => {
          setJoin(1);
          scrId = myId;

          console.log("Screenshare Id : " + scrId);

          scrSocket.emit("join-room", roomId, scrId, id);

          // SOCKET EVENT CALLBACKS =====================================================
          scrSocket.on("room_created", async () => {
            console.log("Socket event callback: room_created");
          });

          scrSocket.on("room_joined", async () => {
            console.log("Socket event callback: room_joined");

            scrSocket.emit("start_call", roomId, scrId, true);
          });

          scrSocket.on("start_call", async (userId, status) => {
            console.log("Socket event callback: start_call from " + userId);

            let rtcPeerConnection = new RTCPeerConnection(iceServers);
            // addLocalTracks(rtcPeerConnection);
            localScreen.getTracks().forEach((track) => {
              rtcPeerConnection.addTrack(track, localScreen);
            });

            scrConn[userId] = rtcPeerConnection;

            // handleClick(userId + " joined", "success");

            // rtcPeerConnection.ontrack = (event) => {
            //   setRemoteStream(event, userId);
            // };
            rtcPeerConnection.onicecandidate = (event) => {
              // sendIceCandidate(event, userId);
              if (event.candidate) {
                scrSocket.emit(
                  "webrtc_ice_candidate",
                  {
                    roomId,
                    label: event.candidate.sdpMLineIndex,
                    candidate: event.candidate.candidate,
                  },
                  scrId
                );
              }
            };

            // await createOffer(rtcPeerConnection, userId);
            let sessionDescription;
            try {
              sessionDescription = await rtcPeerConnection.createOffer();
              rtcPeerConnection.setLocalDescription(sessionDescription);

              scrSocket.emit(
                "webrtc_offer",
                {
                  type: "webrtc_offer",
                  sdp: sessionDescription,
                  roomId,
                },
                userId,
                scrId,
                true
              );
            } catch (error) {
              console.error(error);
            }
          });

          scrSocket.on("webrtc_offer", async (event, userId, status) => {
            console.log("Socket event callback: webrtc_offer from " + userId);

            let rtcPeerConnection = new RTCPeerConnection(iceServers);
            // addLocalTracks(rtcPeerConnection);
            localScreen.getTracks().forEach((track) => {
              rtcPeerConnection.addTrack(track, localScreen);
            });

            scrConn[userId] = rtcPeerConnection;

            // rtcPeerConnection.ontrack = (event) => {
            //   setRemoteStream(event, userId);
            // };
            rtcPeerConnection.onicecandidate = (event) => {
              // sendIceCandidate(event, userId);
              if (event.candidate) {
                scrSocket.emit(
                  "webrtc_ice_candidate",
                  {
                    roomId,
                    label: event.candidate.sdpMLineIndex,
                    candidate: event.candidate.candidate,
                  },
                  scrId
                );
              }
            };
            rtcPeerConnection.setRemoteDescription(
              new RTCSessionDescription(event)
            );

            // await createAnswer(rtcPeerConnection, userId);
            let sessionDescription;
            try {
              sessionDescription = await rtcPeerConnection.createAnswer();
              rtcPeerConnection.setLocalDescription(sessionDescription);

              scrSocket.emit(
                "webrtc_answer",
                {
                  type: "webrtc_answer",
                  sdp: sessionDescription,
                  roomId,
                },
                userId,
                scrId
              );
            } catch (error) {
              console.error(error);
            }
          });

          scrSocket.on("webrtc_answer", (event, userId) => {
            console.log("Socket event callback: webrtc_answer from " + userId);

            scrConn[userId].setRemoteDescription(
              new RTCSessionDescription(event)
            );
          });

          scrSocket.on("webrtc_ice_candidate", (event, userId) => {
            console.log(
              "Socket event callback: webrtc_ice_candidate from " + userId
            );

            // ICE candidate configuration.
            var candidate = new RTCIceCandidate({
              sdpMLineIndex: event.label,
              candidate: event.candidate,
            });
            scrConn[userId].addIceCandidate(candidate);
          });

          scrSocket.on("user-disconnected", (userId) => {
            console.log("scrSocket disconnecting " + userId);

            if (scrConn[userId]) scrConn[userId].close();

            const audEl = document.getElementById("AUD-" + userId);
            if (audEl) {
              audEl.remove();
            }
            const vidEl = document.getElementById("VID-" + userId);
            if (vidEl) {
              vidEl.remove();
            }
          });
        });
      } catch (error) {
        alert("Could not get display media. Try again");
        console.error("Could not get display media", error);
      }
    } else {
      setScrn(false);
      scrSocket.disconnect();
      scrSocket = null;

      localScreen.getTracks().forEach((track) => {
        track.stop();
      });
      // document.getElementById("my-screen").remove();
    }
  };

  const addVideoStream = (videoGrid, video, stream, userId, status) => {
    let div;

    video.setAttribute("id", "video-" + userId);
    video.srcObject = stream;
    video.classList.add("video");

    video.addEventListener("loadedmetadata", () => {
      video.play();
    });

    if (userId !== "my-video" && userId.substring(4) !== scrId) {
      console.log(userId, userId.substring(3), scrId);
      video.addEventListener("dblclick", () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          /* Safari */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          /* IE11 */
          video.msRequestFullscreen();
        }
      });
    }

    if (userId.startsWith("VID-") || userId === "my-video") {
      div = document.createElement("div");
      div.setAttribute("id", userId);
      div.classList.add("video-wrap");

      const cDiv = document.createElement("div");
      cDiv.setAttribute("id", "prof-" + userId);
      cDiv.classList.add("prof-card");
      cDiv.classList.add("hidden");
      const p = document.createElement("p");
      p.innerText = userId;
      p.classList.add("prof-text");

      cDiv.append(p);

      div.append(video);
      div.append(cDiv);

      videoGrid.append(div);

      if (!status) {
        video.classList.add("hidden");
        cDiv.classList.remove("hidden");
      }
    } else {
      videoGrid.append(video);
    }
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

      console.log("emitting ", camera);

      socket.emit(
        "webrtc_offer",
        {
          type: "webrtc_offer",
          sdp: sessionDescription,
          roomId,
        },
        userId,
        id,
        camera
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function createAnswer(rtcPeerConnection, userId) {
    let sessionDescription;
    try {
      sessionDescription = await rtcPeerConnection.createAnswer();
      rtcPeerConnection.setLocalDescription(sessionDescription);

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
    } catch (error) {
      console.error(error);
    }
  }

  function setRemoteStream(event, userId, status) {
    if (event.track.kind === "audio") {
      let audio = document.createElement("audio");
      addVideoStream(
        videoGrid,
        audio,
        event.streams[0],
        "AUD-" + userId,
        status
      );
    } else if (event.track.kind === "video") {
      let video = document.createElement("video");
      video.muted = true;
      addVideoStream(
        videoGrid,
        video,
        event.streams[0],
        "VID-" + userId,
        status
      );
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
        {loading ? <CircularProgress style={{ margin: "auto" }} /> : null}
      </div>
      {showControls ? (
        <div className={classes.controls}>
          <div className={classes.panel}>
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
              <div>
                <CircularProgress
                  style={{ width: "30px", height: "30px", margin: "0px 15px" }}
                />
              </div>
            ) : null}
            <IconButton
              style={{ color: mic ? "white" : "red", marginRight: "10px" }}
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
              style={{
                color: cam ? "white" : "red",
                marginLeft: "10px",
                marginRight: "10px",
              }}
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
            {join === 1 ? (
              <IconButton
                style={{ color: scrn ? "white" : "red", marginLeft: "10px" }}
                onClick={() => {
                  // toggleScrn();
                  screenShare();
                }}
              >
                {scrn ? (
                  <ScreenShareRoundedIcon style={{ fontSize: "30px" }} />
                ) : (
                  <StopScreenShareRoundedIcon style={{ fontSize: "30px" }} />
                )}
              </IconButton>
            ) : null}
            {/* <IconButton
          style={{ marginLeft: "20px", display: "none" }}
          ref={flipButton}
        >
          <FlipCameraAndroidIcon style={{ fontSize: "30px" }} />
        </IconButton> */}
          </div>
        </div>
      ) : null}

      {join === 1 ? (
        <div className={classes.chat}>
          <div
            style={{
              position: "fixed",
              top: "10px",
              right: "20px",
              backgroundColor: "rgb(60,60,60,0.7)",
              borderRadius: "30px",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpenA}
              className={clsx(open && classes.hide)}
              style={{ color: "white", margin: "0px 5px 0px 8px" }}
            >
              <PeopleAltOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
              style={{ color: "white", marginRight: "8px" }}
            >
              <ForumIcon />
            </IconButton>
          </div>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openA}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerCloseA}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              Attendees
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                margin: "10px",
              }}
            >
              <div className={classes.user}>
                <div>{id + " (You)"}</div>
                <div
                  style={{
                    width: "80px",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  {/* <MicRoundedIcon style={{ color: "rgb(68, 165, 244)" }} /> */}
                  <MicOffRoundedIcon style={{ color: "rgb(100,100,100)" }} />
                  {/* <VideocamRoundedIcon style={{ color: "red" }} /> */}
                  <VideocamOffRoundedIcon
                    style={{ color: "rgb(100,100,100)" }}
                  />
                </div>
              </div>
              {users.map((el, index) => {
                return (
                  <div className={classes.user} key={"attendee-" + index}>
                    <div>{el}</div>
                    <div
                      style={{
                        width: "80px",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <MicRoundedIcon style={{ color: "rgb(0,140,200)" }} />
                      <VideocamRoundedIcon
                        style={{ color: "rgb(0,140,200)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Drawer>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              Conversation
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                margin: "10px",
              }}
            >
              <Messages messages={messages} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <textarea
                  ref={chatBox}
                  type="text"
                  placeholder="Type a message"
                  className={classes.inputBox}
                  value={inputString}
                  onChange={(val) => {
                    handleChange(val);
                  }}
                ></textarea>
                <IconButton
                  disabled={inputString === ""}
                  onClick={() => {
                    sendMessage();
                  }}
                >
                  <SendIcon />
                </IconButton>
              </div>
            </div>
          </Drawer>
        </div>
      ) : null}
    </div>
  );
};

export default Meeting;
