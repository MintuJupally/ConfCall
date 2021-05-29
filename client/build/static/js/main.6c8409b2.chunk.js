(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},128:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d=n(0),u=n(11),f=n.n(u),p=(n(103),n(104),n(4)),b=n(14),m=n(174),v=n(176),g=n(84),x=n.n(g),j=n(3),h=function(){var e=Object(p.f)(),t=Object(d.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1];return Object(d.useEffect)((function(){x.a.get("/api/call").then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e.response)}))}),[]),Object(j.jsxs)("div",{style:{margin:"0px 0px 0px 30px"},children:[Object(j.jsx)("h1",{style:{textAlign:"left"},children:"Video Conference App"}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)(m.a,{children:"Your meeting ID"}),Object(j.jsx)("div",{style:{padding:"10px 10px",margin:"0px 20px",backgroundColor:"rgb(0,0,0,0.1)"},children:c})]}),Object(j.jsx)("div",{style:{display:"flex"},children:Object(j.jsx)(v.a,{variant:"contained",style:{backgroundColor:"rgb(0, 131, 255)",color:"white",margin:"20px 100px"},onClick:function(){e("/".concat(c))},children:"JOIN MEETING"})})]})},k=n(2),w=n.n(k),O=n(8),y=(n(128),n(178)),C=n(48),_=n(179),S=n(180),T=n(86),I=n.n(T),D=n(87),R=n.n(D),E=n(88),L=n.n(E),M=n(89),A=n.n(M),B=n(90),U=n.n(B),z=n(91),N=n.n(z),P=n(54),F=n.n(P),J=Object(y.a)({root:{height:"100vh",backgroundColor:"#141414"},grid:{height:"calc(100vh - 70px)",display:"flex",overflowX:"auto",alignItems:"center"},controls:{backgroundColor:"white",height:"70px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},loader:{height:"120px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},join:{textTransform:"none",fontSize:"20px",padding:"4px 20px",marginRight:"15px",fontWeight:600,transition:"0.3s ease-in-out","&:hover":{backgroundColor:"rgb(0, 101, 255)",color:"white"}}}),V={audio:!0,video:{width:1280,height:720}},Y={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"}]},q=null,G={},W={},X=function(){var e=J(),t=Object(d.useState)(-1),n=Object(b.a)(t,2),u=n[0],f=n[1],p=Object(d.useState)(!0),m=Object(b.a)(p,2),g=m[0],x=m[1],h=Object(d.useState)(!1),k=Object(b.a)(h,2),y=k[0],T=k[1],D=Object(d.useState)(0),E=Object(b.a)(D,2),M=(E[0],E[1]),B=Object(d.useState)(!0),z=Object(b.a)(B,2),P=z[0],X=z[1],H=Object(d.useState)(!0),K=Object(b.a)(H,2),Q=K[0],Z=K[1],$=Object(d.useState)(!1),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ce=Object(C.b)().enqueueSnackbar,re=function(e,t){ce(e,{variant:t})};Object(d.useEffect)(Object(O.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,l=t.split("/")[t.split("/").length-1],c=document.getElementById("video-grid"),(n=document.createElement("video")).muted=!0,e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia(V);case 8:r=e.sent,o=r,se(c,n,r,"my-video"),x(!1),setTimeout((function(){T(!0)}),[1e3]),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 19:window.addEventListener("wheel",(function(e){var t=e.deltaY;document.getElementById("video-grid").scrollLeft+=.5*t}));case 20:case"end":return e.stop()}}),e,null,[[5,15]])}))),[]);var ae=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X((function(e){return!e})),console.log(o.getTracks()),"live"!==(n=o.getTracks().find((function(e){return"audio"===e.kind}))).readyState){e.next=8;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=21;break;case 8:return e.prev=8,e.next=11,navigator.mediaDevices.getUserMedia({audio:!0});case 11:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(r in G)console.log(G[r].getSenders()),G[r].getSenders()[0].replaceTrack(c.getTracks()[0]),console.log(G[r].getSenders());e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z((function(e){return!e})),console.log(o.getTracks()),"live"!==(n=o.getTracks().find((function(e){return"video"===e.kind}))).readyState){e.next=8;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=21;break;case 8:return e.prev=8,e.next=11,navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});case 11:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(r in G)console.log(G[r].getSenders()),G[r].getSenders()[1].replaceTrack(c.getTracks()[0]);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==q){e.next=18;break}return e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia();case 4:t=e.sent,i=t,ne(!0),t.getTracks()[0].onended=function(){ne(!1),q.disconnect(),q=null},(q=F.a.connect("/")).on("connected",function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),a=t,console.log("User Id : "+a),q.emit("join-room",l,a),q.on("room_created",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),q.on("room_joined",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),q.emit("start_call",l,a);case 2:case"end":return e.stop()}}),e)})))),q.on("start_call",function(){var e=Object(O.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),n=new RTCPeerConnection(Y),i.getTracks().forEach((function(e){n.addTrack(e,i)})),W[t]=n,n.onicecandidate=function(e){e.candidate&&q.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},e.prev=5,e.next=8,n.createOffer();case 8:c=e.sent,n.setLocalDescription(c),q.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:l},t,a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}()),q.on("webrtc_offer",function(){var e=Object(O.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),c=new RTCPeerConnection(Y),i.getTracks().forEach((function(e){c.addTrack(e,i)})),W[n]=c,c.onicecandidate=function(e){e.candidate&&q.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},c.setRemoteDescription(new RTCSessionDescription(t)),e.prev=6,e.next=9,c.createAnswer();case 9:r=e.sent,c.setLocalDescription(r),q.emit("webrtc_answer",{type:"webrtc_answer",sdp:r,roomId:l},n,a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()),q.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),W[t].setRemoteDescription(new RTCSessionDescription(e))})),q.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});W[t].addIceCandidate(n)})),q.on("user-disconnected",(function(e){W[e]&&W[e].close();var t=document.getElementById("AUD-"+e);t&&(t.remove(),M((function(e){return e-1})));var n=document.getElementById("VID-"+e);n&&(n.remove(),M((function(e){return e-1})))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Could not get display media. Try again"),console.error("Could not get display media",e.t0);case 16:e.next=21;break;case 18:ne(!1),q.disconnect(),q=null;case 21:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),se=function(e,t,n,c){t.srcObject=n,t.setAttribute("id",c),t.classList.add("video"),t.addEventListener("loadedmetadata",(function(){t.play()})),e.append(t)};function le(e){o.getTracks().forEach((function(t){e.addTrack(t,o)}))}function de(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(O.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createOffer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:l},n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function fe(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(O.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createAnswer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_answer",{type:"webrtc_answer",sdp:c,roomId:l},n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function be(e,t){if(console.log(e),"audio"===e.track.kind){var n=document.createElement("audio");se(c,n,e.streams[0],"AUD-"+t)}else if("video"===e.track.kind){var r=document.createElement("video");r.muted=!0,se(c,r,e.streams[0],"VID-"+t)}}function me(e,t){e.candidate&&s.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},r)}return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)("div",{id:"video-grid",className:e.grid,children:g?Object(j.jsx)(_.a,{style:{margin:"auto"}}):null}),y?Object(j.jsxs)("div",{className:e.controls,children:[-1===u?Object(j.jsx)(v.a,{variant:"outlined",onClick:function(){(s=F.a.connect("/")).on("connected",function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),r=t,console.log("User Id : "+r),s.emit("join-room",l,r),s.on("room_created",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),s.on("room_joined",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),s.emit("start_call",l,r);case 2:case"end":return e.stop()}}),e)})))),s.on("start_call",function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),le(n=new RTCPeerConnection(Y)),G[t]=n,re(t+" joined","success"),n.ontrack=function(e){be(e,t)},n.onicecandidate=function(e){me(e)},e.next=9,de(n,t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.on("webrtc_offer",function(){var e=Object(O.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),le(c=new RTCPeerConnection(Y)),G[n]=c,c.ontrack=function(e){console.log(e),console.log(n),be(e,n)},c.onicecandidate=function(e){me(e)},c.setRemoteDescription(new RTCSessionDescription(t)),e.next=9,fe(c,n);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),s.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),G[t].setRemoteDescription(new RTCSessionDescription(e))})),s.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});G[t].addIceCandidate(n)})),s.on("user-disconnected",(function(e){re(e+" left","error"),G[e]&&G[e].close();var t=document.getElementById("AUD-"+e);t&&t.remove();var n=document.getElementById("VID-"+e);n&&n.remove()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f(0)},className:e.join,children:"Join"}):0===u?Object(j.jsx)(_.a,{}):null,Object(j.jsx)(S.a,{style:{color:P?"grey":"red",marginRight:"10px"},onClick:function(){ae(1===u)},children:P?Object(j.jsx)(I.a,{style:{fontSize:"30px"}}):Object(j.jsx)(R.a,{style:{fontSize:"30px"}})}),Object(j.jsx)(S.a,{style:{color:Q?"grey":"red",marginLeft:"10px",marginRight:"10px"},onClick:function(){oe(1===u)},children:Q?Object(j.jsx)(L.a,{style:{fontSize:"30px"}}):Object(j.jsx)(A.a,{style:{fontSize:"30px"}})}),1===u?Object(j.jsx)(S.a,{style:{color:te?"grey":"red",marginLeft:"10px"},onClick:function(){ie()},children:te?Object(j.jsx)(U.a,{style:{fontSize:"30px"}}):Object(j.jsx)(N.a,{style:{fontSize:"30px"}})}):null]}):null]})},H=[{path:"/",children:[{path:"/",element:Object(j.jsx)(h,{})},{path:"/:roomId",element:Object(j.jsx)(X,{})},{path:"*",element:Object(j.jsx)(p.a,{to:"/",replace:!0})}]}];var K=function(){var e=Object(p.h)(H);return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(C.a,{maxSnack:3,children:e})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},Z=n(37);f.a.render(Object(j.jsx)(Z.a,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),Q()}},[[158,1,2]]]);
//# sourceMappingURL=main.6c8409b2.chunk.js.map