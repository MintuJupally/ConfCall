(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,n){},142:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i,s,d,l=n(0),u=n.n(l),p=n(9),f=n.n(p),b=(n(118),n(5)),m=n(12),x=n(197),g=n(198),h=n(94),v=n.n(h),j=n(93),w=n.n(j),O=n(2),k=function(){var e=Object(b.f)(),t=Object(l.useState)(""),n=Object(m.a)(t,2),r=n[0],c=n[1];return Object(l.useEffect)((function(){w.a.get("/api/call").then((function(e){console.log(e.data),c(e.data)})).catch((function(e){console.log(e.response)}))}),[]),Object(O.jsxs)("div",{style:{height:"100%",margin:"0px 30px"},children:[Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(v.a,{style:{width:"50px",height:"50px",marginRight:"14px",color:"rgb(0, 131, 255)"}}),Object(O.jsx)("h1",{style:{textAlign:"left",padding:"20px 0px",margin:0},children:"Conference Call"})]}),Object(O.jsxs)("div",{style:{dispaly:"flex",flexDirection:"column",maxWidth:"fit-content"},children:[Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",margin:"20px 0px"},children:[Object(O.jsx)(x.a,{style:{fontSize:"18px"},children:"Meeting ID\xa0\xa0\xa0"}),Object(O.jsxs)("div",{style:{display:"flex",maxWidth:"100%"},children:[Object(O.jsx)("div",{style:{padding:"10px 14px",overflowY:"auto",backgroundColor:"rgb(0,0,0,0.1)"},children:Object(O.jsx)(x.a,{style:{whiteSpace:"nowrap"},children:r})}),Object(O.jsx)(g.a,{variant:"outlined",style:{borderRadius:0},children:"COPY"})]})]}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(g.a,{variant:"contained",style:{backgroundColor:"rgb(0, 131, 255)",color:"white"},onClick:function(){e("/".concat(r))},children:"START MEETING"})})]})]})},y=n(6),C=n.n(y),S=n(15),I=n(62),_=(n(142),n(4)),T=n(200),E=n(32),R=n(56),D=Object(T.a)({bubble:{boxShadow:"0px 1px 5px rgb(40,40,40,0.2)",padding:"2px 9px",borderRadius:"13px",margin:"2px 3px"}}),L=function(e){var t=e.messages,n=D(),r=Object(l.useState)(t),c=Object(m.a)(r,2),a=c[0],o=c[1];return Object(l.useEffect)((function(){o(t)}),[t]),Object(O.jsx)("div",{id:"chat-screen",style:{overflowY:"auto",height:"calc(100vh - 240px)",padding:"0px 10px",display:"flex",flexDirection:"column-reverse"},children:a.slice(0).reverse().map((function(e,t){var r=e.time.toLocaleTimeString(),c=r.split(":")[0]+":"+r.split(":")[1]+" "+r.split(" ")[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:{fontSize:"14px",display:"flex",justifyContent:"me"===e.user?"flex-end":"flex-start",textAlign:"left"},children:Object(O.jsxs)("div",{className:n.bubble,style:{backgroundColor:"me"===e.user?"rgb(0, 101, 255,0.3)":"white",whiteSpace:"pre-wrap"},children:[e.message.split("\n").map((function(e,t){return""===e?Object(O.jsx)("br",{},"part-"+t):Object(O.jsx)(u.a.Fragment,{children:Object(O.jsx)("p",{style:{padding:0,margin:0,maxWidth:"min(60vw,250px)",wordWrap:"break-word"},children:e})},"part-"+t)})),Object(O.jsx)("div",{style:{fontSize:"10px",color:"grey",textAlign:"right"},children:c})]})}),Object(O.jsx)("div",{style:{fontWeight:"600",textAlign:"me"===e.user?"right":"left",margin:"0px 5px",fontSize:"13px"},children:0===t||e.user!==a[a.length-t].user?"me"===e.user?"You":e.user:null})]},"message-"+t)}))})},N=n(201),A=n(202),B=n(204),z=n(203),F=n(96),M=n.n(F),P=n(97),W=n.n(P),q=n(98),U=n.n(q),V=n(99),Y=n.n(V),G=n(100),H=n.n(G),J=n(101),K=n.n(J),X=n(104),Q=n.n(X),Z=n(105),$=n.n(Z),ee=n(106),te=n.n(ee),ne=n(103),re=n.n(ne),ce=n(102),ae=n.n(ce),oe=n(63),ie=n.n(oe),se="min(calc(100vw - 20px), 400px)",de=Object(T.a)((function(e){return{chat:{display:"flex"},title:{flexGrow:1},hide:{display:"none"},drawer:{width:se,flexShrink:0},drawerPaper:{backgroundColor:"rgb(250,250,250)",width:se,height:"calc(100vh - 80px)",margin:"5px 10px 0px 5px",borderRadius:"20px"},drawerHeader:Object(I.a)(Object(I.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:NaN},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0},root:{height:"100vh",backgroundColor:"#141414"},grid:{height:"100vh",width:"100vw",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(200px, 50vmin), 1fr))",gridAutoRows:"minmax(min(200px, 50vmin), 1fr)",overflowX:"auto",alignItems:"center"},controls:{height:"70px",position:"fixed",bottom:0,left:0,right:0,margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"},panel:{backgroundColor:"rgb(60,60,60,0.8)",borderRadius:"35px",padding:"0px 30px",display:"flex",alignItems:"center"},loader:{height:"120px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},join:{textTransform:"none",fontSize:"20px",padding:"4px 20px",marginRight:"15px",fontWeight:600,borderRadius:"30px",transition:"0.3s ease-in-out",color:"white",backgroundColor:"rgb(0, 82, 206)","&:hover":{backgroundColor:"rgb(0, 101, 255)",color:"white"}},inputBox:{outline:0,backgroundColor:"rgb(220,220,220)",width:"300px",border:0,borderRadius:"20px",height:"20px",resize:"none",padding:"10px 15px","&::placeholder":{},"&::-webkit-scrollbar":{display:"none"}}}})),le={audio:!0,video:{width:1280,height:720}},ue={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"},{url:"stun:stun.12connect.com:3478"},{url:"stun:stun.12voip.com:3478"}]},pe=!0,fe=null,be={},me={},xe=[],ge=function(){var e=de(),t=Object(E.a)(),n=Object(l.useState)(-1),p=Object(m.a)(n,2),f=p[0],b=p[1],x=Object(l.useState)(!0),h=Object(m.a)(x,2),v=h[0],j=h[1],w=Object(l.useState)(!1),k=Object(m.a)(w,2),y=k[0],I=k[1],T=Object(l.useState)(""),D=Object(m.a)(T,2),F=D[0],P=D[1],q=Object(l.useState)([]),V=Object(m.a)(q,2),G=V[0],J=V[1],X=Object(l.useState)(!0),Z=Object(m.a)(X,2),ee=Z[0],ne=Z[1],ce=Object(l.useState)(!0),oe=Object(m.a)(ce,2),se=oe[0],ge=oe[1],he=Object(l.useState)(!1),ve=Object(m.a)(he,2),je=ve[0],we=ve[1],Oe=u.a.useState(!1),ke=Object(m.a)(Oe,2),ye=ke[0],Ce=ke[1],Se=Object(l.useRef)(null),Ie=Object(R.b)().enqueueSnackbar,_e=function(e,t){Ie(e,{variant:t})},Te=function(){Ce(!0)};Object(l.useEffect)((function(){if(ye){Se.current.focus();var e=document.getElementById("chat-screen");e&&(e.scrollTop=e.scrollHeight)}}),[ye]);var Ee=function(e,t){var n;t?n=t:n=Se.current.value.trim();e||s.emit("send-message",n);var r=[].concat(xe);console.log(r);var c={user:e||"me",message:n,time:new Date};r.push(c),xe.push(c),J(r)};Object(l.useEffect)((function(){P(""),Se.current&&Se.current.focus()}),[G]),Object(l.useEffect)((function(){1===f&&(Se.current.addEventListener("keyup",(function(e){"Enter"!==e.code&&"Enter"!==e.key||""===e.target.value||e.shiftKey||Ee()})),Se.current.addEventListener("keydown",(function(e){"Enter"!==e.code&&"Enter"!==e.key||e.shiftKey||e.preventDefault()})))}),[f]);var Re=function(){var e=Object(S.a)(C.a.mark((function e(){var t,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,d=t.split("/")[t.split("/").length-1],r=document.getElementById("video-grid"),(n=document.createElement("video")).muted=!0,e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia(le);case 8:c=e.sent,o=c,Be(r,n,c,"my-video",!0),j(!1),setTimeout((function(){I(!0)}),[1e3]),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 19:window.addEventListener("wheel",(function(e){var t=e.deltaY;document.getElementById("video-grid").scrollLeft+=.5*t}));case 20:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Re()}),[]);var De=function(){var e=Object(S.a)(C.a.mark((function e(t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne((function(e){return!e})),"live"!==(n=o.getTracks().find((function(e){return"audio"===e.kind}))).readyState){e.next=7;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=20;break;case 7:return e.prev=7,e.next=10,navigator.mediaDevices.getUserMedia({audio:!0});case 10:if(r=e.sent,o.removeTrack(n),o.addTrack(r.getTracks()[0]),t)for(c in be)be[c].getSenders()[0].replaceTrack(r.getTracks()[0]);e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(S.a)(C.a.mark((function e(t){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ge((function(e){return!e})),"live"!==(n=o.getTracks().find((function(e){return"video"===e.kind}))).readyState){e.next=7;break}n.enabled=!n.enabled,setTimeout((function(){n.stop(),c&&s.emit("video-stopped",d,c),Ne("my-video",!1)}),500),e.next=22;break;case 7:return e.prev=7,e.next=10,navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});case 10:if(r=e.sent,o.removeTrack(n),o.addTrack(r.getTracks()[0]),t)for(a in be)console.log(be[a].getSenders()),console.log(a,be[a].connectionState),be[a].getSenders()[1].replaceTrack(r.getTracks()[0]);c&&s.emit("video-started",d,c),Ne("my-video",!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 22:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(e,t){var n,r;"my-video"===e?(n=document.getElementById("video-"+e),r=document.getElementById("prof-"+e)):(n=document.getElementById("video-VID-"+e),r=document.getElementById("prof-VID-"+e)),n&&r&&(t&&n.classList.contains("hidden")?(n.classList.remove("hidden"),r.classList.add("hidden")):t||n.classList.contains("hidden")||(r.classList.remove("hidden"),n.classList.add("hidden")))};Object(l.useEffect)((function(){pe=se}),[se]);var Ae=function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==fe){e.next=18;break}return e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia();case 4:t=e.sent,i=t,we(!0),t.getTracks()[0].onended=function(){we(!1),fe.disconnect(),fe=null},(fe=ie.a.connect("/")).on("connected",function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(1),a=t,console.log("Screenshare Id : "+a),fe.emit("join-room",d,a,c),fe.on("room_created",Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),fe.on("room_joined",Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),fe.emit("start_call",d,a,!0);case 2:case"end":return e.stop()}}),e)})))),fe.on("start_call",function(){var e=Object(S.a)(C.a.mark((function e(t,n){var r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),r=new RTCPeerConnection(ue),i.getTracks().forEach((function(e){r.addTrack(e,i)})),me[t]=r,r.onicecandidate=function(e){e.candidate&&fe.emit("webrtc_ice_candidate",{roomId:d,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},e.prev=5,e.next=8,r.createOffer();case 8:c=e.sent,r.setLocalDescription(c),fe.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:d},t,a,!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),fe.on("webrtc_offer",function(){var e=Object(S.a)(C.a.mark((function e(t,n,r){var c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),c=new RTCPeerConnection(ue),i.getTracks().forEach((function(e){c.addTrack(e,i)})),me[n]=c,c.onicecandidate=function(e){e.candidate&&fe.emit("webrtc_ice_candidate",{roomId:d,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},c.setRemoteDescription(new RTCSessionDescription(t)),e.prev=6,e.next=9,c.createAnswer();case 9:o=e.sent,c.setLocalDescription(o),fe.emit("webrtc_answer",{type:"webrtc_answer",sdp:o,roomId:d},n,a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n,r){return e.apply(this,arguments)}}()),fe.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),me[t].setRemoteDescription(new RTCSessionDescription(e))})),fe.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});me[t].addIceCandidate(n)})),fe.on("user-disconnected",(function(e){console.log("scrSocket disconnecting "+e),me[e]&&me[e].close();var t=document.getElementById("AUD-"+e);t&&t.remove();var n=document.getElementById("VID-"+e);n&&n.remove()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Could not get display media. Try again"),console.error("Could not get display media",e.t0);case 16:e.next=22;break;case 18:we(!1),fe.disconnect(),fe=null,i.getTracks().forEach((function(e){e.stop()}));case 22:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),Be=function(e,t,n,r,c){var o;if(t.setAttribute("id","video-"+r),t.srcObject=n,t.classList.add("video"),t.addEventListener("loadedmetadata",(function(){t.play()})),"my-video"!==r&&r.substring(4)!==a&&(console.log(r,r.substring(3),a),t.addEventListener("dblclick",(function(){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}))),r.startsWith("VID-")||"my-video"===r){(o=document.createElement("div")).setAttribute("id",r),o.classList.add("video-wrap");var i=document.createElement("div");i.setAttribute("id","prof-"+r),i.classList.add("prof-card"),i.classList.add("hidden");var s=document.createElement("p");s.innerText=r,s.classList.add("prof-text"),i.append(s),o.append(t),o.append(i),e.append(o),c||(t.classList.add("hidden"),i.classList.remove("hidden"))}else e.append(t)};function ze(e){o.getTracks().forEach((function(t){e.addTrack(t,o)}))}function Fe(e,t){return Me.apply(this,arguments)}function Me(){return(Me=Object(S.a)(C.a.mark((function e(t,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createOffer();case 3:r=e.sent,t.setLocalDescription(r),console.log("emitting ",pe),s.emit("webrtc_offer",{type:"webrtc_offer",sdp:r,roomId:d},n,c,pe),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Pe(e,t){return We.apply(this,arguments)}function We(){return(We=Object(S.a)(C.a.mark((function e(t,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createAnswer();case 3:r=e.sent,t.setLocalDescription(r),s.emit("webrtc_answer",{type:"webrtc_answer",sdp:r,roomId:d},n,c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function qe(e,t,n){if("audio"===e.track.kind){var c=document.createElement("audio");Be(r,c,e.streams[0],"AUD-"+t,n)}else if("video"===e.track.kind){var a=document.createElement("video");a.muted=!0,Be(r,a,e.streams[0],"VID-"+t,n)}}function Ue(e,t){e.candidate&&s.emit("webrtc_ice_candidate",{roomId:d,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},c)}return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)("div",{id:"video-grid",className:e.grid,children:v?Object(O.jsx)(N.a,{style:{margin:"auto"}}):null}),y?Object(O.jsx)("div",{className:e.controls,children:Object(O.jsxs)("div",{className:e.panel,children:[-1===f?Object(O.jsx)(g.a,{variant:"outlined",onClick:function(){(s=ie.a.connect("/")).on("connected",function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(1),c=t,console.log("User Id : "+c),s.emit("join-room",d,c),s.on("room_created",Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),s.on("room_joined",Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),s.emit("start_call",d,c,se);case 2:case"end":return e.stop()}}),e)})))),s.on("start_call",function(){var e=Object(S.a)(C.a.mark((function e(t,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),ze(r=new RTCPeerConnection(ue)),be[t]=r,console.log(be[t].connectionState),console.log("before "+pe),_e(t+" joined","success"),r.ontrack=function(e){qe(e,t,n)},r.onicecandidate=function(e){Ue(e)},r.onconnectionstatechange=function(e){console.log(e),console.log(r.connectionState),"failed"===r.connectionState&&r.restartIce()},e.next=12,Fe(r,t);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),s.on("webrtc_offer",function(){var e=Object(S.a)(C.a.mark((function e(t,n,r){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n,r),ze(c=new RTCPeerConnection(ue)),be[n]=c,c.ontrack=function(e){qe(e,n,r)},c.onicecandidate=function(e){Ue(e)},c.setRemoteDescription(new RTCSessionDescription(t)),c.onconnectionstatechange=function(e){console.log(e),console.log(c.connectionState)},e.next=10,Pe(c,n);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),s.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),be[t].setRemoteDescription(new RTCSessionDescription(e))})),s.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});be[t].addIceCandidate(n)})),s.on("video-stopped",(function(e){console.log("video-stopped "+e),Ne(e,!1)})),s.on("video-started",(function(e){console.log("video-started "+e),Ne(e,!0)})),s.on("connect_screen",(function(e){s.emit("connect_screen",e)})),s.on("incoming-message",(function(e,t){Ee(e,t)})),s.on("user-disconnected",(function(e){be[e]&&be[e].close();var t=document.getElementById("AUD-"+e);t&&t.remove();var n=document.getElementById("VID-"+e);n&&(n.remove(),_e(e+" left","error"))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b(0)},className:e.join,children:"Join"}):0===f?Object(O.jsx)("div",{children:Object(O.jsx)(N.a,{style:{width:"30px",height:"30px",margin:"0px 15px"}})}):null,Object(O.jsx)(A.a,{style:{color:ee?"white":"red",marginRight:"10px"},onClick:function(){De(1===f)},children:ee?Object(O.jsx)(M.a,{style:{fontSize:"30px"}}):Object(O.jsx)(W.a,{style:{fontSize:"30px"}})}),Object(O.jsx)(A.a,{style:{color:se?"white":"red",marginLeft:"10px",marginRight:"10px"},onClick:function(){Le(1===f)},children:se?Object(O.jsx)(U.a,{style:{fontSize:"30px"}}):Object(O.jsx)(Y.a,{style:{fontSize:"30px"}})}),1===f?Object(O.jsx)(A.a,{style:{color:je?"white":"red",marginLeft:"10px"},onClick:function(){Ae()},children:je?Object(O.jsx)(H.a,{style:{fontSize:"30px"}}):Object(O.jsx)(K.a,{style:{fontSize:"30px"}})}):null]})}):null,1===f?Object(O.jsxs)("div",{className:e.chat,children:[Object(O.jsxs)("div",{style:{position:"fixed",top:"10px",right:"20px",backgroundColor:"rgb(60,60,60,0.7)",borderRadius:"30px"},children:[Object(O.jsx)(A.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:Te,className:Object(_.a)(ye&&e.hide),style:{color:"white",margin:"0px 5px 0px 8px"},children:Object(O.jsx)(ae.a,{})}),Object(O.jsx)(A.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:Te,className:Object(_.a)(ye&&e.hide),style:{color:"white",marginRight:"8px"},children:Object(O.jsx)(re.a,{})})]}),Object(O.jsxs)(B.a,{className:e.drawer,variant:"persistent",anchor:"right",open:ye,classes:{paper:e.drawerPaper},children:[Object(O.jsxs)("div",{className:e.drawerHeader,children:[Object(O.jsx)(A.a,{onClick:function(){Ce(!1)},children:"rtl"===t.direction?Object(O.jsx)(Q.a,{}):Object(O.jsx)($.a,{})}),"Conversation"]}),Object(O.jsx)(z.a,{}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",margin:"10px"},children:[Object(O.jsx)(L,{messages:G}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(O.jsx)("textarea",{ref:Se,type:"text",placeholder:"Type a message",className:e.inputBox,value:F,onChange:function(e){!function(e){var t=e.target.value;P(t.trimStart())}(e)}}),Object(O.jsx)(A.a,{disabled:""===F,onClick:function(){Ee()},children:Object(O.jsx)(te.a,{})})]})]})]})]}):null]})},he=[{path:"/",children:[{path:"/",element:Object(O.jsx)(k,{})},{path:"/:roomId",element:Object(O.jsx)(ge,{})},{path:"*",element:Object(O.jsx)(b.a,{to:"/",replace:!0})}]}];var ve=function(){var e=Object(b.h)(he);return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(R.a,{maxSnack:3,children:e})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},we=n(42);f.a.render(Object(O.jsx)(we.a,{children:Object(O.jsx)(ve,{})}),document.getElementById("root")),je()}},[[172,1,2]]]);
//# sourceMappingURL=main.7f8bcea4.chunk.js.map