(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){},128:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,d,l=n(0),u=n(11),f=n.n(u),p=(n(104),n(3)),m=n(14),v=n(175),b=n(176),g=n(85),h=n.n(g),x=n(84),j=n.n(x),k=n(2),w=function(){var e=Object(p.f)(),t=Object(l.useState)(""),n=Object(m.a)(t,2),c=n[0],r=n[1];return Object(l.useEffect)((function(){j.a.get("/api/call").then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e.response)}))}),[]),Object(k.jsxs)("div",{style:{height:"100%",margin:"0px 30px"},children:[Object(k.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(k.jsx)(h.a,{style:{width:"50px",height:"50px",marginRight:"14px",color:"rgb(0, 131, 255)"}}),Object(k.jsx)("h1",{style:{textAlign:"left",padding:"20px 0px",margin:0},children:"Conference Call"})]}),Object(k.jsxs)("div",{style:{dispaly:"flex",flexDirection:"column",maxWidth:"fit-content"},children:[Object(k.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",margin:"20px 0px"},children:[Object(k.jsx)(v.a,{style:{fontSize:"18px"},children:"Meeting ID\xa0\xa0\xa0"}),Object(k.jsxs)("div",{style:{display:"flex",maxWidth:"100%"},children:[Object(k.jsx)("div",{style:{padding:"10px 14px",overflowY:"auto",backgroundColor:"rgb(0,0,0,0.1)"},children:Object(k.jsx)(v.a,{style:{whiteSpace:"nowrap"},children:c})}),Object(k.jsx)(b.a,{variant:"outlined",style:{borderRadius:0},children:"COPY"})]})]}),Object(k.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(k.jsx)(b.a,{variant:"contained",style:{backgroundColor:"rgb(0, 131, 255)",color:"white"},onClick:function(){e("/".concat(c))},children:"START MEETING"})})]})]})},y=n(5),O=n.n(y),C=n(9),S=(n(128),n(177)),_=n(48),I=n(178),T=n(179),D=n(87),L=n.n(D),E=n(88),R=n.n(E),B=n(89),A=n.n(B),M=n(90),z=n.n(M),U=n(91),P=n.n(U),N=n(92),V=n.n(N),W=n(54),F=n.n(W),J=Object(S.a)({root:{height:"100vh",backgroundColor:"#141414"},grid:{height:"calc(100vh - 70px)",width:"100vw",display:"flex",flexWrap:"wrap",overflowX:"auto",alignItems:"center"},controls:{backgroundColor:"white",height:"70px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},loader:{height:"120px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},join:{textTransform:"none",fontSize:"20px",padding:"4px 20px",marginRight:"15px",fontWeight:600,transition:"0.3s ease-in-out","&:hover":{backgroundColor:"rgb(0, 101, 255)",color:"white"}}}),Y={audio:!0,video:{width:1280,height:720}},q={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"}]},G=null,X={},H={},K=function(){var e=J(),t=Object(l.useState)(-1),n=Object(m.a)(t,2),u=n[0],f=n[1],p=Object(l.useState)(!0),v=Object(m.a)(p,2),g=v[0],h=v[1],x=Object(l.useState)(!1),j=Object(m.a)(x,2),w=j[0],y=j[1],S=Object(l.useState)(0),D=Object(m.a)(S,2),E=(D[0],D[1]),B=Object(l.useState)(!0),M=Object(m.a)(B,2),U=M[0],N=M[1],W=Object(l.useState)(!0),K=Object(m.a)(W,2),Q=K[0],Z=K[1],$=Object(l.useState)(!1),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],ce=Object(_.b)().enqueueSnackbar,re=function(e,t){ce(e,{variant:t})},ae=function(){var e=Object(C.a)(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,d=t.split("/")[t.split("/").length-1],c=document.getElementById("video-grid"),(n=document.createElement("video")).muted=!0,e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia(Y);case 8:r=e.sent,o=r,le(c,n,r,"my-video",!0),h(!1),setTimeout((function(){y(!0)}),[1e3]),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 19:window.addEventListener("wheel",(function(e){var t=e.deltaY;document.getElementById("video-grid").scrollLeft+=.5*t}));case 20:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){ae()}),[]);var oe=function(){var e=Object(C.a)(O.a.mark((function e(t){var n,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N((function(e){return!e})),console.log(o.getTracks()),"live"!==(n=o.getTracks().find((function(e){return"audio"===e.kind}))).readyState){e.next=8;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=21;break;case 8:return e.prev=8,e.next=11,navigator.mediaDevices.getUserMedia({audio:!0});case 11:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(r in X)console.log(X[r].getSenders()),X[r].getSenders()[0].replaceTrack(c.getTracks()[0]),console.log(X[r].getSenders());e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(C.a)(O.a.mark((function e(t){var n,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z((function(e){return!e})),"live"!==(n=o.getTracks().find((function(e){return"video"===e.kind}))).readyState){e.next=7;break}n.enabled=!n.enabled,setTimeout((function(){n.stop(),r&&s.emit("video-stopped",d,r),se("my-video",!1)}),500),e.next=22;break;case 7:return e.prev=7,e.next=10,navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});case 10:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(a in X)console.log(X[a].getSenders()),X[a].getSenders()[1].replaceTrack(c.getTracks()[0]);r&&s.emit("video-started",d,r),se("my-video",!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 22:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}(),se=function(e,t){var n,c;"my-video"===e?(n=document.getElementById("video-"+e),c=document.getElementById("prof-"+e)):(n=document.getElementById("video-VID-"+e),c=document.getElementById("prof-VID-"+e)),n&&c&&(t&&n.classList.contains("hidden")?(n.classList.remove("hidden"),c.classList.add("hidden")):t||n.classList.contains("hidden")||(c.classList.remove("hidden"),n.classList.add("hidden")))},de=function(){var e=Object(C.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==G){e.next=18;break}return e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia();case 4:t=e.sent,i=t,ne(!0),t.getTracks()[0].onended=function(){ne(!1),G.disconnect(),G=null},(G=F.a.connect("/")).on("connected",function(){var e=Object(C.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),a=t,console.log("User Id : "+a),G.emit("join-room",d,a,r),G.on("room_created",Object(C.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),G.on("room_joined",Object(C.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),G.emit("start_call",d,a,!0);case 2:case"end":return e.stop()}}),e)})))),G.on("start_call",function(){var e=Object(C.a)(O.a.mark((function e(t,n){var c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),c=new RTCPeerConnection(q),i.getTracks().forEach((function(e){c.addTrack(e,i)})),H[t]=c,c.onicecandidate=function(e){e.candidate&&G.emit("webrtc_ice_candidate",{roomId:d,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},e.prev=5,e.next=8,c.createOffer();case 8:r=e.sent,c.setLocalDescription(r),G.emit("webrtc_offer",{type:"webrtc_offer",sdp:r,roomId:d},t,a,!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),G.on("webrtc_offer",function(){var e=Object(C.a)(O.a.mark((function e(t,n,c){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),r=new RTCPeerConnection(q),i.getTracks().forEach((function(e){r.addTrack(e,i)})),H[n]=r,r.onicecandidate=function(e){e.candidate&&G.emit("webrtc_ice_candidate",{roomId:d,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},r.setRemoteDescription(new RTCSessionDescription(t)),e.prev=6,e.next=9,r.createAnswer();case 9:o=e.sent,r.setLocalDescription(o),G.emit("webrtc_answer",{type:"webrtc_answer",sdp:o,roomId:d},n,a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n,c){return e.apply(this,arguments)}}()),G.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),H[t].setRemoteDescription(new RTCSessionDescription(e))})),G.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});H[t].addIceCandidate(n)})),G.on("user-disconnected",(function(e){console.log("scrSocket disconnecting "+e),H[e]&&H[e].close();var t=document.getElementById("AUD-"+e);t&&(t.remove(),E((function(e){return e-1})));var n=document.getElementById("VID-"+e);n&&(n.remove(),E((function(e){return e-1})))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Could not get display media. Try again"),console.error("Could not get display media",e.t0);case 16:e.next=22;break;case 18:ne(!1),G.disconnect(),G=null,i.getTracks().forEach((function(e){e.stop()}));case 22:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),le=function(e,t,n,c,r){var a;if(t.setAttribute("id","video-"+c),t.srcObject=n,t.classList.add("video"),t.addEventListener("loadedmetadata",(function(){t.play()})),c.startsWith("VID-")||"my-video"===c){(a=document.createElement("div")).setAttribute("id",c),a.classList.add("video-wrap");var o=document.createElement("div");o.setAttribute("id","prof-"+c),o.classList.add("prof-card"),o.classList.add("hidden");var i=document.createElement("p");i.innerText=c,i.classList.add("prof-text"),o.append(i),a.append(t),a.append(o),e.append(a),r||(t.classList.add("hidden"),o.classList.remove("hidden"))}else e.append(t)};function ue(e){o.getTracks().forEach((function(t){e.addTrack(t,o)}))}function fe(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(C.a)(O.a.mark((function e(t,n){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createOffer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:d},n,r,Q),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function me(e,t){return ve.apply(this,arguments)}function ve(){return(ve=Object(C.a)(O.a.mark((function e(t,n){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createAnswer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_answer",{type:"webrtc_answer",sdp:c,roomId:d},n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function be(e,t,n){if(console.log(e.streams[0]),console.log(e.streams[0].getTracks()),"audio"===e.track.kind){var r=document.createElement("audio");le(c,r,e.streams[0],"AUD-"+t,n)}else if("video"===e.track.kind){var a=document.createElement("video");a.muted=!0,le(c,a,e.streams[0],"VID-"+t,n)}}function ge(e,t){e.candidate&&s.emit("webrtc_ice_candidate",{roomId:d,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},r)}return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)("div",{id:"video-grid",className:e.grid,children:g?Object(k.jsx)(I.a,{style:{margin:"auto"}}):null}),w?Object(k.jsxs)("div",{className:e.controls,children:[-1===u?Object(k.jsx)(b.a,{variant:"outlined",onClick:function(){(s=F.a.connect("/")).on("connected",function(){var e=Object(C.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),r=t,console.log("User Id : "+r),s.emit("join-room",d,r),s.on("room_created",Object(C.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),s.on("room_joined",Object(C.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),s.emit("start_call",d,r,Q);case 2:case"end":return e.stop()}}),e)})))),s.on("start_call",function(){var e=Object(C.a)(O.a.mark((function e(t,n){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),ue(c=new RTCPeerConnection(q)),X[t]=c,re(t+" joined","success"),c.ontrack=function(e){be(e,t,n)},c.onicecandidate=function(e){ge(e)},e.next=9,fe(c,t);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),s.on("webrtc_offer",function(){var e=Object(C.a)(O.a.mark((function e(t,n,c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n,c),ue(r=new RTCPeerConnection(q)),X[n]=r,r.ontrack=function(e){console.log(e),console.log(n),be(e,n,c)},r.onicecandidate=function(e){ge(e)},r.setRemoteDescription(new RTCSessionDescription(t)),e.next=9,me(r,n);case 9:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()),s.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),X[t].setRemoteDescription(new RTCSessionDescription(e))})),s.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});X[t].addIceCandidate(n)})),s.on("video-stopped",(function(e){console.log("video-stopped "+e),se(e,!1)})),s.on("video-started",(function(e){console.log("video-started "+e),se(e,!0)})),s.on("connect_screen",(function(e){s.emit("connect_screen",e)})),s.on("user-disconnected",(function(e){console.log("socket disconnecting "+e),X[e]&&X[e].close();var t=document.getElementById("AUD-"+e);t&&t.remove();var n=document.getElementById("VID-"+e);n&&(n.remove(),re(e+" left","error"))}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f(0)},className:e.join,children:"Join"}):0===u?Object(k.jsx)(I.a,{}):null,Object(k.jsx)(T.a,{style:{color:U?"grey":"red",marginRight:"10px"},onClick:function(){oe(1===u)},children:U?Object(k.jsx)(L.a,{style:{fontSize:"30px"}}):Object(k.jsx)(R.a,{style:{fontSize:"30px"}})}),Object(k.jsx)(T.a,{style:{color:Q?"grey":"red",marginLeft:"10px",marginRight:"10px"},onClick:function(){ie(1===u)},children:Q?Object(k.jsx)(A.a,{style:{fontSize:"30px"}}):Object(k.jsx)(z.a,{style:{fontSize:"30px"}})}),1===u?Object(k.jsx)(T.a,{style:{color:te?"grey":"red",marginLeft:"10px"},onClick:function(){de()},children:te?Object(k.jsx)(P.a,{style:{fontSize:"30px"}}):Object(k.jsx)(V.a,{style:{fontSize:"30px"}})}):null]}):null]})},Q=[{path:"/",children:[{path:"/",element:Object(k.jsx)(w,{})},{path:"/:roomId",element:Object(k.jsx)(K,{})},{path:"*",element:Object(k.jsx)(p.a,{to:"/",replace:!0})}]}];var Z=function(){var e=Object(p.h)(Q);return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(_.a,{maxSnack:3,children:e})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},ee=n(37);f.a.render(Object(k.jsx)(ee.a,{children:Object(k.jsx)(Z,{})}),document.getElementById("root")),$()}},[[158,1,2]]]);
//# sourceMappingURL=main.2b690bb1.chunk.js.map