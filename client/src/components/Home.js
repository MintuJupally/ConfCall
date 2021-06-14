import React, { useEffect, useState } from "react";

import { Typography, Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");

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

  return (
    <div
      style={{
        height: "100%",
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
                overflowY: "auto",
                backgroundColor: "rgb(0,0,0,0.1)",
              }}
            >
              <Typography style={{ whiteSpace: "nowrap" }}>{roomId}</Typography>
            </div>
            <Button variant="outlined" style={{ borderRadius: 0 }}>
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
      </div>
    </div>
  );
};

export default Home;
