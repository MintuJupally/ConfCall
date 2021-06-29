import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  bubble: {
    boxShadow: "0px 1px 5px rgb(40,40,40,0.2)",
    padding: "2px 9px",
    borderRadius: "13px",
    margin: "2px 3px",
  },
});

const Messages = ({ messages }) => {
  const classes = useStyles();

  const [chat, setChat] = useState(messages);

  useEffect(() => {
    setChat(messages);
  }, [messages]);

  return (
    <div
      id="chat-screen"
      style={{
        overflowY: "auto",
        height: "calc(100vh - 240px)",
        padding: "0px 10px",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {chat
        .slice(0)
        .reverse()
        .map((msg, index) => {
          const time = msg.time.toLocaleTimeString();
          let timeString =
            time.split(":")[0] +
            ":" +
            time.split(":")[1] +
            " " +
            time.split(" ")[1];
          return (
            <div key={"message-" + index}>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: msg.user === "me" ? "flex-end" : "flex-start",
                  textAlign: "left",
                }}
              >
                <div
                  className={classes.bubble}
                  style={{
                    backgroundColor:
                      msg.user === "me" ? "rgb(0, 101, 255,0.3)" : "white",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.message.split("\n").map((part, ind) => {
                    if (part === "") return <br key={"part-" + ind} />;
                    return (
                      <React.Fragment key={"part-" + ind}>
                        <p
                          style={{
                            padding: 0,
                            margin: 0,
                            maxWidth: "min(60vw,250px)",
                            wordWrap: "break-word",
                          }}
                        >
                          {part}
                        </p>
                      </React.Fragment>
                    );
                  })}
                  <div
                    style={{
                      fontSize: "10px",
                      color: "grey",
                      textAlign: "right",
                    }}
                  >
                    {timeString}
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontWeight: "600",
                  textAlign: msg.user === "me" ? "right" : "left",
                  margin: "0px 5px",
                  fontSize: "13px",
                }}
              >
                {index === 0
                  ? msg.user === "me"
                    ? "You"
                    : msg.user
                  : msg.user !== chat[chat.length - index].user
                  ? msg.user === "me"
                    ? "You"
                    : msg.user
                  : null}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
