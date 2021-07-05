import React, { useEffect, useState } from "react";

import { Typography, Button, Snackbar } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/call")
      .then((res) => {
        console.log(res.data);
        setRoomId(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: "0px 30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <CallIcon
          style={{
            width: "50px",
            height: "50px",
            marginRight: "14px",
            color: "rgb(0, 131, 255)",
          }}
        />
        <h1 style={{ textAlign: "left", padding: "20px 0px", margin: 0 }}>
          Conference Call
        </h1>
      </div>
      <div
        style={{
          dispaly: "flex",
          flexDirection: "column",
          maxWidth: "fit-content",
          margin: "100px auto 0px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "20px 0px",
          }}
        >
          <Typography style={{ fontSize: "18px" }}>
            Meeting ID&nbsp;&nbsp;&nbsp;
          </Typography>
          <div style={{ display: "flex", maxWidth: "100%" }}>
            <div
              style={{
                padding: "10px 14px",
                overflowY: "overlay",
                backgroundColor: "rgb(0,0,0,0.1)",
              }}
            >
              <Typography style={{ whiteSpace: "nowrap" }}>{roomId}</Typography>
            </div>
            <Button
              variant="outlined"
              style={{ borderRadius: 0 }}
              onClick={() => {
                const el = document.createElement("textarea");
                el.value = window.location.href + roomId;
                document.body.appendChild(el);
                el.select();
                document.execCommand("copy");
                document.body.removeChild(el);

                setOpen(true);
              }}
            >
              COPY
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(0, 131, 255)",
              color: "white",
            }}
            onClick={() => {
              navigate(`/${roomId}`);
            }}
          >
            START MEETING
          </Button>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" onClose={handleClose}>
            Copied to Clipboard
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Home;
