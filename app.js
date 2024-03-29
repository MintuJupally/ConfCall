const path = require("path");
const express = require("express");
const { v4: uuidV4 } = require("uuid");

const requestLogger = require("./utils/requestLogger");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

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

app.use(globalErrorHandler);

module.exports = app;
