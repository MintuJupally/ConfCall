const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");

const PORT = process.env.PORT || 3000;

const requestLogger = require("./utils/requestLogger");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

app.use(express.static(path.join(__dirname, "client/build")));

app.use(requestLogger);

app.get("/api/call", (req, res) => {
  const roomId = uuidV4();
  console.log(roomId);
  res.send(roomId);
});

app.get("/api/turn", (req, res) => {
  let turn = [];
  for (let key in process.env) {
    if (key.startsWith("TURN_SERVER")) turn.push(process.env[key]);
  }
  res.send(turn);
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("/:id", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

io.on("connection", (socket) => {
  socket.emit("connected", socket.id);

  socket.on("join-room", (roomId, userId, mainId) => {
    const roomClients = io.sockets.adapter.rooms.get(roomId) || { size: 0 };
    const numberOfClients = roomClients.size;

    let screenId = null;
    if (mainId) {
      socket.broadcast.to(mainId).emit("connect_screen", userId);
    }
    // console.log(io.sockets.adapter.rooms);

    socket.join(roomId);
    // These events are emitted only to the sender socket.
    if (numberOfClients == 0) {
      console.log(
        `Creating room ${roomId} and emitting room_created socket event`
      );
      socket.emit("room_created", roomId, userId);
    } else {
      console.log(
        `Joining room ${roomId} and emitting room_joined socket event`
      );
      socket.emit("room_joined", roomId, userId);
    }

    socket.on("video-stopped", () => {
      socket.broadcast.to(roomId).emit("video-stopped", userId);
    });

    socket.on("video-started", () => {
      socket.broadcast.to(roomId).emit("video-started", userId);
    });

    socket.on("connect_screen", (fromId) => {
      console.log("~~~ CONNECTING SCREEN " + fromId);
      screenId = fromId;
    });

    socket.on("disconnect", (reason) => {
      console.log(reason);

      console.log(`Broadcasting user-disconnected event of user ${userId}`);
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
      console.log("------" + screenId + "---------");
      if (screenId) {
        console.log(`Broadcasting user-disconnected event of user ${screenId}`);
        socket.broadcast.to(roomId).emit("user-disconnected", screenId);
      }
      if (reason != "client namespace disconnect") {
        if (mainId) {
          console.log(`Broadcasting user-disconnected event of user ${mainId}`);
          socket.broadcast.to(roomId).emit("user-disconnected", mainId);
        }
      }
    });

    socket.on("send-message", (message) => {
      socket.broadcast.to(roomId).emit("incoming-message", userId, message);
    });
  });

  // These events are emitted to all the sockets connected to the same room except the sender.
  socket.on("start_call", (roomId, userId, camStatus) => {
    console.log(`Broadcasting start_call event to peers in room ${roomId}`);
    socket.broadcast.to(roomId).emit("start_call", userId, camStatus);
  });
  socket.on("webrtc_offer", (event, toId, fromId, camStatus) => {
    console.log(
      `Broadcasting webrtc_offer event to peers in room ${event.roomId}`
    );
    socket.broadcast
      .to(toId)
      .emit("webrtc_offer", event.sdp, fromId, camStatus);
  });
  socket.on("webrtc_answer", (event, toId, fromId) => {
    console.log(
      `Broadcasting webrtc_answer event to peers in room ${event.roomId}`
    );
    socket.broadcast.to(toId).emit("webrtc_answer", event.sdp, fromId);
  });
  socket.on("webrtc_ice_candidate", (event, userId) => {
    console.log(
      `Broadcasting webrtc_ice_candidate event to peers in room ${event.roomId}`
    );
    socket.broadcast
      .to(event.roomId)
      .emit("webrtc_ice_candidate", event, userId);
  });
});

server.listen(PORT, () => {
  console.log("App running on port " + PORT);
});

app.use(globalErrorHandler);
