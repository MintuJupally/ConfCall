import React, { useEffect, useState } from "react";

import { Typography, Button } from "@material-ui/core";

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
    <div style={{ margin: "0px 0px 0px 30px" }}>
      <h1 style={{ textAlign: "left" }}>Video Conference App</h1>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography>Your meeting ID</Typography>
        <div
          style={{
            padding: "10px 10px",
            margin: "0px 20px",
            backgroundColor: "rgb(0,0,0,0.1)",
          }}
        >
          {roomId}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(0, 131, 255)",
            color: "white",
            margin: "20px 100px",
          }}
          onClick={() => {
            navigate(`/${roomId}`);
          }}
        >
          JOIN MEETING
        </Button>
      </div>
    </div>
  );
};

export default Home;
