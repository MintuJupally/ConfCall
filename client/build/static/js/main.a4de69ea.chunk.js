(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},128:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d=n(0),u=n(11),f=n.n(u),p=(n(103),n(104),n(4)),b=n(14),m=n(174),v=n(176),g=n(84),j=n.n(g),x=n(3),h=function(){var e=Object(p.f)(),t=Object(d.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1];return Object(d.useEffect)((function(){j.a.get("/api/call").then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e.response)}))}),[]),Object(x.jsxs)("div",{style:{margin:"0px 0px 0px 30px"},children:[Object(x.jsx)("h1",{style:{textAlign:"left"},children:"Video Conference App"}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(m.a,{children:"Your meeting ID"}),Object(x.jsx)("div",{style:{padding:"10px 10px",margin:"0px 20px",backgroundColor:"rgb(0,0,0,0.1)"},children:c})]}),Object(x.jsx)("div",{style:{display:"flex"},children:Object(x.jsx)(v.a,{variant:"contained",style:{backgroundColor:"rgb(0, 131, 255)",color:"white",margin:"20px 100px"},onClick:function(){e("/".concat(c))},children:"JOIN MEETING"})})]})},k=n(2),w=n.n(k),O=n(8),y=(n(128),n(178)),C=n(48),_=n(179),S=n(180),T=n(86),I=n.n(T),R=n(87),D=n.n(R),L=n(88),E=n.n(L),M=n(89),z=n.n(M),N=n(90),A=n.n(N),P=n(91),B=n.n(P),U=n(54),F=n.n(U),J=Object(y.a)({root:{backgroundColor:"#141414"},grid:{height:"100vh",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},controls:{backgroundColor:"white",height:"70px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},loader:{height:"120px",width:"100vw",position:"absolute",bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},join:{textTransform:"none",fontSize:"20px",padding:"4px 20px",marginRight:"15px",fontWeight:600,transition:"0.3s ease-in-out","&:hover":{backgroundColor:"rgb(0, 101, 255)",color:"white"}}}),W={audio:!0,video:{width:1280,height:720}},q={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"}]},G=null,V={},Y={},H=function(){var e=J(),t=Object(d.useState)(-1),n=Object(b.a)(t,2),u=n[0],f=n[1],p=Object(d.useState)(!0),m=Object(b.a)(p,2),g=m[0],j=m[1],h=Object(d.useState)(!1),k=Object(b.a)(h,2),y=k[0],T=k[1],R=Object(d.useState)(0),L=Object(b.a)(R,2),M=(L[0],L[1]),N=Object(d.useState)(!0),P=Object(b.a)(N,2),U=P[0],H=P[1],K=Object(d.useState)(!0),Q=Object(b.a)(K,2),X=Q[0],Z=Q[1],$=Object(d.useState)(!1),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ce=Object(C.b)().enqueueSnackbar,re=function(e,t){ce(e,{variant:t})};Object(d.useEffect)(Object(O.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,l=t.split("/")[t.split("/").length-1],c=document.getElementById("video-grid"),(n=document.createElement("video")).muted=!0,e.prev=5,e.next=8,navigator.mediaDevices.getUserMedia(W);case 8:r=e.sent,o=r,se(c,n,r,"my-video"),j(!1),setTimeout((function(){T(!0)}),[1e3]),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,15]])}))),[]);var ae=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H((function(e){return!e})),console.log(o.getTracks()),"live"!==(n=o.getTracks().find((function(e){return"audio"===e.kind}))).readyState){e.next=8;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=21;break;case 8:return e.prev=8,e.next=11,navigator.mediaDevices.getUserMedia({audio:!0});case 11:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(r in V)console.log(V[r].getSenders()),V[r].getSenders()[0].replaceTrack(c.getTracks()[0]);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z((function(e){return!e})),console.log(o.getTracks()),"live"!==(n=o.getTracks().find((function(e){return"video"===e.kind}))).readyState){e.next=8;break}n.enabled=!n.enabled,setTimeout((function(){n.stop()}),500),e.next=21;break;case 8:return e.prev=8,e.next=11,navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});case 11:if(c=e.sent,o.removeTrack(n),o.addTrack(c.getTracks()[0]),t)for(r in V)console.log(V[r].getSenders()),V[r].getSenders()[1].replaceTrack(c.getTracks()[0]);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),alert("Could not get user media. Check your media devices or Refresh"),console.error("Could not get user media",e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==G){e.next=18;break}return ne(!0),e.prev=2,e.next=5,navigator.mediaDevices.getDisplayMedia();case 5:t=e.sent,i=t,t.getTracks()[0].onended=function(){ne(!1),G.disconnect(),G=null},(G=F.a.connect("/")).on("connected",function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),a=t,console.log("User Id : "+a),G.emit("join-room",l,a),G.on("room_created",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),G.on("room_joined",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),G.emit("start_call",l,a);case 2:case"end":return e.stop()}}),e)})))),G.on("start_call",function(){var e=Object(O.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),n=new RTCPeerConnection(q),i.getTracks().forEach((function(e){n.addTrack(e,i)})),Y[t]=n,n.onicecandidate=function(e){e.candidate&&G.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},e.prev=5,e.next=8,n.createOffer();case 8:c=e.sent,n.setLocalDescription(c),G.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:l},t,a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}()),G.on("webrtc_offer",function(){var e=Object(O.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),c=new RTCPeerConnection(q),i.getTracks().forEach((function(e){c.addTrack(e,i)})),Y[n]=c,c.onicecandidate=function(e){e.candidate&&G.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},a)},c.setRemoteDescription(new RTCSessionDescription(t)),e.prev=6,e.next=9,c.createAnswer();case 9:r=e.sent,c.setLocalDescription(r),G.emit("webrtc_answer",{type:"webrtc_answer",sdp:r,roomId:l},n,a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()),G.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),Y[t].setRemoteDescription(new RTCSessionDescription(e))})),G.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});Y[t].addIceCandidate(n)})),G.on("user-disconnected",(function(e){Y[e]&&Y[e].close();var t=document.getElementById(e);t&&(t.remove(),M((function(e){return e-1})))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),alert("Could not get display media. Try again"),console.error("Could not get display media",e.t0);case 16:e.next=21;break;case 18:ne(!1),G.disconnect(),G=null;case 21:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),se=function(e,t,n,c){t.srcObject=n,t.setAttribute("id",c),t.classList.add("video"),t.addEventListener("loadedmetadata",(function(){t.play()})),e.append(t)};function le(e){o.getTracks().forEach((function(t){e.addTrack(t,o)}))}function de(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(O.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createOffer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_offer",{type:"webrtc_offer",sdp:c,roomId:l},n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function fe(e,t){return pe.apply(this,arguments)}function pe(){return(pe=Object(O.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.createAnswer();case 3:c=e.sent,t.setLocalDescription(c),s.emit("webrtc_answer",{type:"webrtc_answer",sdp:c,roomId:l},n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function be(e,t){if(console.log(e),"video"===e.track.kind){var n=document.createElement("video");se(c,n,e.streams[0],t)}}function me(e,t){e.candidate&&s.emit("webrtc_ice_candidate",{roomId:l,label:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate},r)}return Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)("div",{id:"video-grid",className:e.grid,children:g?Object(x.jsx)(_.a,{}):null}),y?Object(x.jsxs)("div",{className:e.controls,children:[-1===u?Object(x.jsx)(v.a,{variant:"outlined",onClick:function(){(s=F.a.connect("/")).on("connected",function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),r=t,console.log("User Id : "+r),s.emit("join-room",l,r),s.on("room_created",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_created");case 1:case"end":return e.stop()}}),e)})))),s.on("room_joined",Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Socket event callback: room_joined"),s.emit("start_call",l,r);case 2:case"end":return e.stop()}}),e)})))),s.on("start_call",function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: start_call from "+t),le(n=new RTCPeerConnection(q)),V[t]=n,re(t+" joined","success"),n.ontrack=function(e){be(e,t)},n.onicecandidate=function(e){me(e)},e.next=9,de(n,t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.on("webrtc_offer",function(){var e=Object(O.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Socket event callback: webrtc_offer from "+n),le(c=new RTCPeerConnection(q)),V[n]=c,c.ontrack=function(e){console.log(e),console.log(n),be(e,n)},c.onicecandidate=function(e){me(e)},c.setRemoteDescription(new RTCSessionDescription(t)),e.next=9,fe(c,n);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),s.on("webrtc_answer",(function(e,t){console.log("Socket event callback: webrtc_answer from "+t),V[t].setRemoteDescription(new RTCSessionDescription(e))})),s.on("webrtc_ice_candidate",(function(e,t){console.log("Socket event callback: webrtc_ice_candidate from "+t);var n=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});V[t].addIceCandidate(n)})),s.on("user-disconnected",(function(e){re(e+" left","error"),V[e]&&V[e].close();var t=document.getElementById(e);t&&(t.remove(),M((function(e){return e-1})))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f(0)},className:e.join,children:"Join"}):0===u?Object(x.jsx)(_.a,{}):null,Object(x.jsx)(S.a,{style:{color:U?"grey":"red",marginRight:"10px"},onClick:function(){ae(1===u)},children:U?Object(x.jsx)(I.a,{style:{fontSize:"30px"}}):Object(x.jsx)(D.a,{style:{fontSize:"30px"}})}),Object(x.jsx)(S.a,{style:{color:X?"grey":"red",marginLeft:"10px",marginRight:"10px"},onClick:function(){oe(1===u)},children:X?Object(x.jsx)(E.a,{style:{fontSize:"30px"}}):Object(x.jsx)(z.a,{style:{fontSize:"30px"}})}),1===u?Object(x.jsx)(S.a,{style:{color:te?"grey":"red",marginLeft:"10px"},onClick:function(){ie()},children:te?Object(x.jsx)(A.a,{style:{fontSize:"30px"}}):Object(x.jsx)(B.a,{style:{fontSize:"30px"}})}):null]}):null]})},K=[{path:"/",children:[{path:"/",element:Object(x.jsx)(h,{})},{path:"/:roomId",element:Object(x.jsx)(H,{})},{path:"*",element:Object(x.jsx)(p.a,{to:"/",replace:!0})}]}];var Q=function(){var e=Object(p.h)(K);return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C.a,{maxSnack:3,children:e})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},Z=n(37);f.a.render(Object(x.jsx)(Z.a,{children:Object(x.jsx)(Q,{})}),document.getElementById("root")),X()}},[[158,1,2]]]);
//# sourceMappingURL=main.a4de69ea.chunk.js.map