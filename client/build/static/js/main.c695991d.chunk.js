(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,n){},142:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d=n(0),u=n.n(d),p=n(9),f=n.n(p),b=(n(118),n(5)),x=n(11),j=n(197),m=n(198),g=n(100),h=n.n(g),v=n(99),O=n.n(v),w=n(2),y=function(){var e=Object(b.f)(),t=Object(d.useState)(""),n=Object(x.a)(t,2),c=n[0],r=n[1];return Object(d.useEffect)((function(){O.a.get("/api/call").then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e.response)}))}),[]),Object(w.jsxs)("div",{style:{height:"100%",margin:"0px 30px"},children:[Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(w.jsx)(h.a,{style:{width:"50px",height:"50px",marginRight:"14px",color:"rgb(0, 131, 255)"}}),Object(w.jsx)("h1",{style:{textAlign:"left",padding:"20px 0px",margin:0},children:"Conference Call"})]}),Object(w.jsxs)("div",{style:{dispaly:"flex",flexDirection:"column",maxWidth:"fit-content"},children:[Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",margin:"20px 0px"},children:[Object(w.jsx)(j.a,{style:{fontSize:"18px"},children:"Meeting ID\xa0\xa0\xa0"}),Object(w.jsxs)("div",{style:{display:"flex",maxWidth:"100%"},children:[Object(w.jsx)("div",{style:{padding:"10px 14px",overflowY:"auto",backgroundColor:"rgb(0,0,0,0.1)"},children:Object(w.jsx)(j.a,{style:{whiteSpace:"nowrap"},children:c})}),Object(w.jsx)(m.a,{variant:"outlined",style:{borderRadius:0},children:"COPY"})]})]}),Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(w.jsx)(m.a,{variant:"contained",style:{backgroundColor:"rgb(0, 131, 255)",color:"white"},onClick:function(){e("/".concat(c))},children:"START MEETING"})})]})]})},k=n(23),C=n(6),S=n.n(C),I=n(15),_=n(62),T=(n(142),n(4)),E=n(200),R=n(33),D=n(56),L=Object(E.a)({bubble:{boxShadow:"0px 1px 5px rgb(40,40,40,0.2)",padding:"2px 9px",borderRadius:"13px",margin:"2px 3px"}}),N=function(e){var t=e.messages,n=L(),c=Object(d.useState)(t),r=Object(x.a)(c,2),a=r[0],o=r[1];return Object(d.useEffect)((function(){o(t)}),[t]),Object(w.jsx)("div",{id:"chat-screen",style:{overflowY:"auto",height:"calc(100vh - 240px)",padding:"0px 10px",display:"flex",flexDirection:"column-reverse"},children:a.slice(0).reverse().map((function(e,t){var c=e.time.toLocaleTimeString(),r=c.split(":")[0]+":"+c.split(":")[1]+" "+c.split(" ")[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{style:{fontSize:"14px",display:"flex",justifyContent:"me"===e.user?"flex-end":"flex-start",textAlign:"left"},children:Object(w.jsxs)("div",{className:n.bubble,style:{backgroundColor:"me"===e.user?"rgb(0, 101, 255,0.3)":"white",whiteSpace:"pre-wrap"},children:[e.message.split("\n").map((function(e,t){return""===e?Object(w.jsx)("br",{},"part-"+t):Object(w.jsx)(u.a.Fragment,{children:Object(w.jsx)("p",{style:{padding:0,margin:0,maxWidth:"min(60vw,250px)",wordWrap:"break-word"},children:e})},"part-"+t)})),Object(w.jsx)("div",{style:{fontSize:"10px",color:"grey",textAlign:"right"},children:r})]})}),Object(w.jsx)("div",{style:{fontWeight:"600",textAlign:"me"===e.user?"right":"left",margin:"0px 5px",fontSize:"13px"},children:0===t||e.user!==a[a.length-t].user?"me"===e.user?"You":e.user:null})]},"message-"+t)}))})},A=n(201),B=n(202),z=n(204),F=n(203),M=n(64),P=n.n(M),W=n(65),q=n.n(W),U=n(66),V=n.n(U),Y=n(67),H=n.n(Y),G=n(102),J=n.n(G),K=n(103),X=n.n(K),Q=n(68),Z=n.n(Q),$=n(69),ee=n.n($),te=n(106),ne=n.n(te),ce=n(105),re=n.n(ce),ae=n(104),oe=n.n(ae),ie=n(63),se=n.n(ie),le="min(calc(100vw - 20px), 400px)",de=Object(E.a)((function(e){return{chat:{display:"flex"},title:{flexGrow:1},hide:{display:"none"},drawer:{width:le,flexShrink:0},drawerPaper:{backgroundColor:"rgb(250,250,250)",width:le,height:"calc(100vh - 80px)",margin:"5px 10px 0px 5px",borderRadius:"20px"},drawerHeader:Object(_.a)(Object(_.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:NaN},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0},root:{height:"100vh",backgroundColor:"#141414"},grid:{height:"100vh",width:"100vw",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(200px, 50vmin), 1fr))",gridAutoRows:"minmax(min(200px, 50vmin), 1fr)",overflowX:"auto",alignItems:"center",transition:"0.4s ease-in-out"},controls:{height:"70px",position:"fixed",bottom:0,left:0,right:0,margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"},panel:{backgroundColor:"rgb(60,60,60,0.8)",borderRadius:"35px",padding:"0px 30px",display:"flex",alignItems:"center"},loader:{height:"120px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},join:{textTransform:"none",fontSize:"20px",padding:"4px 20px",marginRight:"15px",fontWeight:600,borderRadius:"30px",transition:"0.3s ease-in-out",color:"white",backgroundColor:"rgb(0, 82, 206)","&:hover":{backgroundColor:"rgb(0, 101, 255)",color:"white"}},inputBox:{outline:0,backgroundColor:"rgb(220,220,220)",width:"300px",border:0,borderRadius:"20px",height:"20px",resize:"none",padding:"10px 15px","&::placeholder":{},"&::-webkit-scrollbar":{display:"none"}},user:{display:"flex",justifyContent:"space-between",cursor:"pointer",padding:"10px",backgroundColor:"rgb(250,250,250)",transition:"0.4s ease-in-out","&:hover":{backgroundColor:"rgb(240,240,240)"}}}})),ue={audio:!0,video:{width:1280,height:720}},pe={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"},{url:"stun:stun.12connect.com:3478"},{url:"stun:stun.12voip.com:3478"}]},fe=!0,be=null,xe={},je={},me=[],ge=function(){var e=de(),t=Object(R.a)(),n=Object(d.useState)(-1),u=Object(x.a)(n,2),p=u[0],f=u[1],b=Object(d.useState)(!0),j=Object(x.a)(b,2),g=j[0],h=j[1],v=Object(d.useState)(!1),O=Object(x.a)(v,2),y=O[0],C=O[1],_=Object(d.useState)(""),E=Object(x.a)(_,2),L=E[0],M=E[1],W=Object(d.useState)([]),U=Object(x.a)(W,2),Y=U[0],G=U[1],K=Object(d.useState)(!0),Q=Object(x.a)(K,2),$=Q[0],te=Q[1],ce=Object(d.useState)(!0),ae=Object(x.a)(ce,2),ie=ae[0],le=ae[1],ge=Object(d.useState)(!1),he=Object(x.a)(ge,2),ve=he[0],Oe=he[1],we=Object(d.useState)(!1),ye=Object(x.a)(we,2),ke=ye[0],Ce=ye[1],Se=Object(d.useState)(!1),Ie=Object(x.a)(Se,2),_e=Ie[0],Te=Ie[1],Ee=Object(d.useState)([]),Re=Object(x.a)(Ee,2),De=Re[0],Le=Re[1],Ne=Object(d.useRef)(null),Ae=Object(D.b)().enqueueSnackbar,Be=function(e,t){Ae(e,{variant:t})};Object(d.useEffect)((function(){if(ke){Ne.current.focus();var e=document.getElementById("chat-screen");e&&(e.scrollTop=e.scrollHeight)}}),[ke]);var ze=function(e,t){var n;t?n=t:n=Ne.current.value.trim();e||s.emit("send-message",n);var c=[].concat(me);console.log(c);var r={user:e||"me",message:n,time:new Date};c.push(r),me.push(r),G(c)};Object(d.useEffect)((function(){M(""),Ne.current&&Ne.current.focus()}),[Y]),Object(d.useEffect)((function(){1===p&&(Ne.current.addEventListener("keyup",(function(e){"Enter"!==e.code&&"Enter"!==e.key||""===e.target.value||e.shiftKey||ze()})),Ne.current.addEventListener("keydown",(function(e){"Enter"!==e.code&&"Enter"!==e.key||e.shiftKey||e.preventDefault()})))}),[p]);var Fe=function(){var e=Object(I.a)(S.a.mark((function e(){var t,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,l=t.split("/")[t.split("/").length-1],c=document.getElementById("video-grid"),(n=document.createElement("video")).muted=!0,e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia(ue);case 8:r=e.sent,o=r,Ue(c,n,r,"my-video",!0),h(!1),setTimeout((function(){C(!0)}),[1e3]),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 19:window.addEventListener("wheel",(function(e){var t=e.deltaY;document.getElementById("video-grid").scrollLeft+=.5*t}));case 20:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){Fe()}),[]);var Me=function(){var e=Object(I.a)(S.a.mark((function e(t){var n,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te((function(e){return!e})),"live"!==(n=o.getTracks().find((function(e){return"audio"===e.kind}))).readyState){e.next=7;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=20;break;case 7:return e.prev=7,e.next=10,navigator.mediaDevices.getUserMedia({audio:!0});case 10:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(r in xe)xe[r].getSenders()[0].replaceTrack(c.getTracks()[0]);e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(I.a)(S.a.mark((function e(t){var n,c,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le((function(e){return!e})),"live"!==(n=o.getTracks().find((function(e){return"video"===e.kind}))).readyState){e.next=7;break}n.enabled=!n.enabled,setTimeout((function(){n.stop(),r&&s.emit("video-stopped",l,r),We("my-video",!1)}),500),e.next=22;break;case 7:return e.prev=7,e.next=10,navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});case 10:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(a in xe)console.log(xe[a].getSenders()),console.log(a,xe[a].connectionState),xe[a].getSenders()[1].replaceTrack(c.getTracks()[0]);r&&s.emit("video-started",l,r),We("my-video",!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 22:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}(),We=function(e,t){var n,c;"my-video"===e?(n=document.getElementById("video-"+e),c=document.getElementById("prof-"+e)):(n=document.getElementById("video-VID-"+e),c=document.getElementById("prof-VID-"+e)),n&&c&&(t&&n.classList.contains("hidden")?(n.classList.remove("hidden"),c.classList.add("hidden")):t||n.classList.contains("hidden")||(c.classList.remove("hidden"),n.classList.add("hidden")))};Object(d.useEffect)((function(){fe=ie}),[ie]);var qe=function(){var e=Object(I.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==be){e.next=18;break}return e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia();case 4:t=e.sent,i=t,Oe(!0),t.getTracks()[0].onended=function(){Oe(!1),be.disconnect(),be=null},(be=se.a.connect("/")).on("connected",function(){var e=Object(I.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),a=t,console.log("Screenshare Id : "+a),be.emit("join-room",l,a,r),be.on("room_created",Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),be.on("room_joined",Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),be.emit("start_call",l,a,!0);case 2:case"end":return e.stop()}}),e)})))),be.on("start_call",function(){var e=Object(I.a)(S.a.mark((function e(t,n){var c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),c=new RTCPeerConnection(pe),i.getTracks().forEach((function(e){c.addTrack(e,i)})),je[t]=c,c.onicecandidate=function(e){e.candidate&&be.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},e.prev=5,e.next=8,c.createOffer();case 8:r=e.sent,c.setLocalDescription(r),be.emit("webrtc_offer",{type:"webrtc_offer",sdp:r,roomId:l},t,a,!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),be.on("webrtc_offer",function(){var e=Object(I.a)(S.a.mark((function e(t,n,c){var r,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),r=new RTCPeerConnection(pe),i.getTracks().forEach((function(e){r.addTrack(e,i)})),je[n]=r,r.onicecandidate=function(e){e.candidate&&be.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},r.setRemoteDescription(new RTCSessionDescription(t)),e.prev=6,e.next=9,r.createAnswer();case 9:o=e.sent,r.setLocalDescription(o),be.emit("webrtc_answer",{type:"webrtc_answer",sdp:o,roomId:l},n,a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n,c){return e.apply(this,arguments)}}()),be.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),je[t].setRemoteDescription(new RTCSessionDescription(e))})),be.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});je[t].addIceCandidate(n)})),be.on("user-disconnected",(function(e){console.log("scrSocket disconnecting "+e),je[e]&&je[e].close();var t=document.getElementById("AUD-"+e);t&&t.remove();var n=document.getElementById("VID-"+e);n&&n.remove()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Could not get display media. Try again"),console.error("Could not get display media",e.t0);case 16:e.next=22;break;case 18:Oe(!1),be.disconnect(),be=null,i.getTracks().forEach((function(e){e.stop()}));case 22:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),Ue=function(e,t,n,c,r){var o;if(t.setAttribute("id","video-"+c),t.srcObject=n,t.classList.add("video"),t.addEventListener("loadedmetadata",(function(){t.play()})),"my-video"!==c&&c.substring(4)!==a&&(console.log(c,c.substring(3),a),t.addEventListener("dblclick",(function(){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}))),c.startsWith("VID-")||"my-video"===c){(o=document.createElement("div")).setAttribute("id",c),o.classList.add("video-wrap");var i=document.createElement("div");i.setAttribute("id","prof-"+c),i.classList.add("prof-card"),i.classList.add("hidden");var s=document.createElement("p");s.innerText=c,s.classList.add("prof-text"),i.append(s),o.append(t),o.append(i),e.append(o),r||(t.classList.add("hidden"),i.classList.remove("hidden"))}else e.append(t)};function Ve(e){o.getTracks().forEach((function(t){e.addTrack(t,o)}))}function Ye(e,t){return He.apply(this,arguments)}function He(){return(He=Object(I.a)(S.a.mark((function e(t,n){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createOffer();case 3:c=e.sent,t.setLocalDescription(c),console.log("emitting ",fe),s.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:l},n,r,fe),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Ge(e,t){return Je.apply(this,arguments)}function Je(){return(Je=Object(I.a)(S.a.mark((function e(t,n){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createAnswer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_answer",{type:"webrtc_answer",sdp:c,roomId:l},n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Ke(e,t,n){if("audio"===e.track.kind){var r=document.createElement("audio");Ue(c,r,e.streams[0],"AUD-"+t,n)}else if("video"===e.track.kind){var a=document.createElement("video");a.muted=!0,Ue(c,a,e.streams[0],"VID-"+t,n)}}function Xe(e,t){e.candidate&&s.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},r)}return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)("div",{id:"video-grid",className:e.grid,children:g?Object(w.jsx)(A.a,{style:{margin:"auto"}}):null}),y?Object(w.jsx)("div",{className:e.controls,children:Object(w.jsxs)("div",{className:e.panel,children:[-1===p?Object(w.jsx)(m.a,{variant:"outlined",onClick:function(){(s=se.a.connect("/")).on("connected",function(){var e=Object(I.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),r=t,console.log("User Id : "+r),s.emit("join-room",l,r),s.on("room_created",Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),s.on("room_joined",Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),s.emit("start_call",l,r,ie);case 2:case"end":return e.stop()}}),e)})))),s.on("start_call",function(){var e=Object(I.a)(S.a.mark((function e(t,n){var c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),Ve(c=new RTCPeerConnection(pe)),xe[t]=c,Le((function(e){return[].concat(Object(k.a)(e),[t])})),console.log(xe[t].connectionState),console.log("before "+fe),Be(t+" joined","success"),c.ontrack=function(e){Ke(e,t,n)},c.onicecandidate=function(e){Xe(e)},c.onconnectionstatechange=function(e){console.log(e),console.log(c.connectionState),"failed"===c.connectionState&&(console.log("Restarting Ice ..."),c.restartIce())},e.next=13,Ye(c,t);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),s.on("webrtc_offer",function(){var e=Object(I.a)(S.a.mark((function e(t,n,c){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n,c),Ve(r=new RTCPeerConnection(pe)),xe[n]=r,Le((function(e){return[].concat(Object(k.a)(e),[n])})),r.ontrack=function(e){Ke(e,n,c)},r.onicecandidate=function(e){Xe(e)},r.setRemoteDescription(new RTCSessionDescription(t)),r.onconnectionstatechange=function(e){console.log(e),console.log(r.connectionState)},e.next=11,Ge(r,n);case 11:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()),s.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),xe[t].setRemoteDescription(new RTCSessionDescription(e))})),s.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});xe[t].addIceCandidate(n)})),s.on("video-stopped",(function(e){console.log("video-stopped "+e),We(e,!1)})),s.on("video-started",(function(e){console.log("video-started "+e),We(e,!0)})),s.on("connect_screen",(function(e){s.emit("connect_screen",e)})),s.on("incoming-message",(function(e,t){ze(e,t)})),s.on("user-disconnected",(function(e){xe[e]&&xe[e].close(),Le((function(t){var n=t.filter((function(t){return t!==e}));return console.log(n),n}));var t=document.getElementById("AUD-"+e);t&&t.remove();var n=document.getElementById("VID-"+e);n&&(n.remove(),Be(e+" left","error"))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f(0)},className:e.join,children:"Join"}):0===p?Object(w.jsx)("div",{children:Object(w.jsx)(A.a,{style:{width:"30px",height:"30px",margin:"0px 15px"}})}):null,Object(w.jsx)(B.a,{style:{color:$?"white":"red",marginRight:"10px"},onClick:function(){Me(1===p)},children:$?Object(w.jsx)(P.a,{style:{fontSize:"30px"}}):Object(w.jsx)(q.a,{style:{fontSize:"30px"}})}),Object(w.jsx)(B.a,{style:{color:ie?"white":"red",marginLeft:"10px",marginRight:"10px"},onClick:function(){Pe(1===p)},children:ie?Object(w.jsx)(V.a,{style:{fontSize:"30px"}}):Object(w.jsx)(H.a,{style:{fontSize:"30px"}})}),1===p?Object(w.jsx)(B.a,{style:{color:ve?"white":"red",marginLeft:"10px"},onClick:function(){qe()},children:ve?Object(w.jsx)(J.a,{style:{fontSize:"30px"}}):Object(w.jsx)(X.a,{style:{fontSize:"30px"}})}):null]})}):null,1===p?Object(w.jsxs)("div",{className:e.chat,children:[Object(w.jsxs)("div",{style:{position:"fixed",top:"10px",right:"20px",backgroundColor:"rgb(60,60,60,0.7)",borderRadius:"30px"},children:[Object(w.jsx)(B.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){Te(!0)},className:Object(T.a)(ke&&e.hide),style:{color:"white",margin:"0px 5px 0px 8px"},children:Object(w.jsx)(oe.a,{})}),Object(w.jsx)(B.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){Ce(!0)},className:Object(T.a)(ke&&e.hide),style:{color:"white",marginRight:"8px"},children:Object(w.jsx)(re.a,{})})]}),Object(w.jsxs)(z.a,{className:e.drawer,variant:"persistent",anchor:"right",open:_e,classes:{paper:e.drawerPaper},children:[Object(w.jsxs)("div",{className:e.drawerHeader,children:[Object(w.jsx)(B.a,{onClick:function(){Te(!1)},children:"rtl"===t.direction?Object(w.jsx)(Z.a,{}):Object(w.jsx)(ee.a,{})}),"Attendees"]}),Object(w.jsx)(F.a,{}),Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",margin:"10px"},children:[Object(w.jsxs)("div",{className:e.user,children:[Object(w.jsx)("div",{children:r+" (You)"}),Object(w.jsxs)("div",{style:{width:"80px",display:"flex",justifyContent:"space-around"},children:[Object(w.jsx)(q.a,{style:{color:"rgb(100,100,100)"}}),Object(w.jsx)(H.a,{style:{color:"rgb(100,100,100)"}})]})]}),De.map((function(t,n){return Object(w.jsxs)("div",{className:e.user,children:[Object(w.jsx)("div",{children:t}),Object(w.jsxs)("div",{style:{width:"80px",display:"flex",justifyContent:"space-around"},children:[Object(w.jsx)(P.a,{style:{color:"rgb(0,140,200)"}}),Object(w.jsx)(V.a,{style:{color:"rgb(0,140,200)"}})]})]},"attendee-"+n)}))]})]}),Object(w.jsxs)(z.a,{className:e.drawer,variant:"persistent",anchor:"right",open:ke,classes:{paper:e.drawerPaper},children:[Object(w.jsxs)("div",{className:e.drawerHeader,children:[Object(w.jsx)(B.a,{onClick:function(){Ce(!1)},children:"rtl"===t.direction?Object(w.jsx)(Z.a,{}):Object(w.jsx)(ee.a,{})}),"Conversation"]}),Object(w.jsx)(F.a,{}),Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",margin:"10px"},children:[Object(w.jsx)(N,{messages:Y}),Object(w.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(w.jsx)("textarea",{ref:Ne,type:"text",placeholder:"Type a message",className:e.inputBox,value:L,onChange:function(e){!function(e){var t=e.target.value;M(t.trimStart())}(e)}}),Object(w.jsx)(B.a,{disabled:""===L,onClick:function(){ze()},children:Object(w.jsx)(ne.a,{})})]})]})]})]}):null]})},he=[{path:"/",children:[{path:"/",element:Object(w.jsx)(y,{})},{path:"/:roomId",element:Object(w.jsx)(ge,{})},{path:"*",element:Object(w.jsx)(b.a,{to:"/",replace:!0})}]}];var ve=function(){var e=Object(b.h)(he);return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(D.a,{maxSnack:3,children:e})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},we=n(42);f.a.render(Object(w.jsx)(we.a,{children:Object(w.jsx)(ve,{})}),document.getElementById("root")),Oe()}},[[172,1,2]]]);
//# sourceMappingURL=main.c695991d.chunk.js.map