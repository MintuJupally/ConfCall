import React, { useEffect, useState } from "react";

import GoogleLogin from "react-google-login";

import {
  Typography,
  Button,
  Snackbar,
  SvgIcon,
  CircularProgress,
  Avatar,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

import MuiAlert from "@material-ui/lab/Alert";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = window.location.pathname;
    console.log(url);
    if (url !== "/") setRoomId(url.substr(1));
    else
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

  useEffect(() => {
    if (user) {
      setStatus(1);
    }
  }, [user]);

  const successResponseGoogle = (res) => {
    console.log("logging in ...");
    console.log(res);

    setUser(res.profileObj);
  };

  const failureResponseGoogle = (res) => {
    console.log(res);
    if (!user) {
      setStatus(-1);
    }
  };

  const onAutoLoadFinished = (res) => {
    if (!res) setStatus(-1);
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
                if (window.location.pathname === "/")
                  el.value = window.location.href + roomId;
                else el.value = window.location.href;

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
          {user ? (
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(0, 131, 255)",
                color: "white",
              }}
              onClick={() => {
                navigate(`/${roomId}`, { state: { user } });
              }}
            >
              {window.location.pathname === "/"
                ? "START MEETING"
                : "JOIN MEETING"}
            </Button>
          ) : null}
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" onClose={handleClose}>
            Copied to Clipboard
          </Alert>
        </Snackbar>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GoogleLogin
          className="google-login"
          clientId="673970648113-sle0qvep0tjdcnfroiqeoetgrbcn8k88.apps.googleusercontent.com"
          render={(renderProps) => {
            if (status === -1)
              return (
                <Button
                  variant="outlined"
                  color="default"
                  onClick={renderProps.onClick}
                  style={{
                    // color: "white",
                    padding: 10,
                    margin: 20,
                    textTransform: "none",
                    // background: '#ccd0dd'
                  }}
                >
                  <SvgIcon>
                    <g
                      xmlns="http://www.w3.org/2000/svg"
                      transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"
                    >
                      <path
                        fill="#4285F4"
                        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                      />
                      <path
                        fill="#EA4335"
                        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                      />
                    </g>
                  </SvgIcon>
                  &nbsp;&nbsp; Login with Google
                </Button>
              );
            else if (status === 1)
              return (
                <Button
                  variant="outlined"
                  color="default"
                  onClick={renderProps.onClick}
                  style={{
                    // color: "white",
                    padding: 5,
                    margin: 30,
                    textTransform: "none",
                    borderRadius: 20,
                    // background: '#ccd0dd'
                  }}
                >
                  <Avatar
                    src={user.imageUrl}
                    alt={user.givenName}
                    style={{ width: "25px", height: "25px" }}
                  />
                  <div style={{ padding: "0px 10px 0px 10px" }}>
                    <p style={{ margin: 0 }}> {user.email}</p>
                  </div>
                </Button>
              );
            return (
              <CircularProgress
                style={{ color: "rgb(0, 131, 255)", margin: "40px 0px" }}
              />
            );
          }}
          isSignedIn={true}
          onSuccess={successResponseGoogle}
          onFailure={failureResponseGoogle}
          cookiePolicy={"single_host_origin"}
          icon={false}
          padding={100}
          onAutoLoadFinished={onAutoLoadFinished}
        />
      </div>
    </div>
  );
};

export default Home;
