# 📞 Conf Call

[**ConfCall**](https://conf-rtc.herokuapp.com/) is a simple WebRTC based conference call web application which allows audio call, video call, screen sharing and in-call messaging. It is built using WebRTC with React JS for the front end and Node JS for the backend. 

The application creates **peer-to-peer (P2P)** connections and functions as a real-time communication application. WebRTC uses two types of signaling servers, namely STUN and TURN, to create the P2P connections.

*Some connections may fail because of the absence of TURN servers which unlike STUN servers are costly*

>A TURN server is a media relay/proxy that allows peers to exchange UDP or TCP media traffic whenever one or both parties are behind NAT.
