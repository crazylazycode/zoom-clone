(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},132:function(e,t){},134:function(e,t){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),r=a.n(i),l=(a(101),a(22)),o=a(191),s=a(187),d=a(184),j=a(193),u=a(19),b=a(83),m=a(54),x=a.n(m),p=a(4),O=Object(n.createContext)(),f=Object(b.io)("https://not-zoom.herokuapp.com/"),h=function(e){var t=e.children,a=Object(n.useState)({}),c=Object(u.a)(a,2),i=c[0],r=c[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],d=o[1],j=Object(n.useState)(null),b=Object(u.a)(j,2),m=b[0],h=b[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),C=v[0],w=v[1],y=Object(n.useState)(!1),N=Object(u.a)(y,2),k=N[0],I=N[1],S=Object(n.useState)(""),D=Object(u.a)(S,2),A=D[0],B=D[1],E=Object(n.useRef)(),R=Object(n.useRef)(),U=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){h(e),E.current.srcObject=e})).catch((function(e){console.error("Error accessing media devices.",e)})),f.on("me",(function(e){return d(e)})),f.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;r({isReceivedCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(p.jsx)(O.Provider,{value:{call:i,callAccepted:C,myVideo:E,userVideo:R,stream:m,name:A,setName:B,callEnded:k,me:s,callUser:function(e){var t=new x.a({initiator:!0,trickle:!1,stream:m});t.on("signal",(function(t){f.emit("callUser",{userToCall:e,signalData:t,from:s,name:A})})),t.on("stream",(function(e){R.current.srcObject=e})),f.on("callAccepted",(function(e){w(!0),t.signal(e)})),U.current=t},leaveCall:function(){I(!0),U.current.destroy(),window.location.reload()},answerCall:function(){w(!0);var e=new x.a({initiator:!1,trickle:!1,stream:m});e.on("signal",(function(e){f.emit("answerCall",{signal:e,to:i.from})})),e.on("stream",(function(e){R.current.srcObject=e})),e.signal(i.signal),U.current=e}},children:t})},g=function(){var e=Object(n.useContext)(O),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(p.jsx)(p.Fragment,{children:a.isReceivingCall&&!c&&Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(p.jsxs)("h1",{children:[a.name," is calling:"]}),Object(p.jsx)(j.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},v=a(185),C=a(152),w=a(186),y=a(192),N=a(89),k=a(188),I=a(189),S=a(190),D=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(l.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(l.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),A=function(e){var t=e.children,a=Object(n.useContext)(O),c=a.me,i=a.callAccepted,r=a.name,l=a.setName,o=a.callEnded,d=a.leaveCall,b=a.callUser,m=Object(n.useState)(""),x=Object(u.a)(m,2),f=x[0],h=x[1],g=D();return Object(p.jsx)(v.a,{className:g.container,children:Object(p.jsxs)(C.a,{elevation:10,className:g.paper,children:[Object(p.jsx)("form",{className:g.root,noValidate:!0,autoComplete:"off",children:Object(p.jsxs)(w.a,{container:!0,className:g.gridContainer,children:[Object(p.jsxs)(w.a,{item:!0,xs:12,md:6,className:g.padding,children:[Object(p.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(p.jsx)(y.a,{label:"Name",value:r,onChange:function(e){return l(e.target.value)},fullWidth:!0}),Object(p.jsx)(N.CopyToClipboard,{text:c,className:g.margin,children:Object(p.jsx)(j.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(p.jsx)(k.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(p.jsxs)(w.a,{item:!0,xs:12,md:6,className:g.padding,children:[Object(p.jsx)(s.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(p.jsx)(y.a,{label:"ID to call",value:f,onChange:function(e){return h(e.target.value)},fullWidth:!0}),i&&!o?Object(p.jsx)(j.a,{variant:"contained",color:"secondary",startIcon:Object(p.jsx)(I.a,{fontSize:"large"}),fullWidth:!0,onClick:d,className:g.margin,children:"Hang Up"}):Object(p.jsx)(j.a,{variant:"contained",color:"primary",startIcon:Object(p.jsx)(S.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return b(f)},className:g.margin,children:"Call"})]})]})}),t]})})},B=(a(149),Object(d.a)((function(e){return{video:Object(l.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(l.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}}))),E=function(){var e=Object(n.useContext)(O),t=e.me,a=e.name,c=e.callAccepted,i=e.myVideo,r=e.userVideo,l=e.callEnded,o=e.stream,d=e.call,j=B();return Object(p.jsxs)(w.a,{container:!0,className:j.gridContainer,children:[o&&Object(p.jsx)(C.a,{className:j.paper,children:Object(p.jsxs)(w.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:a||"Name"}),Object(p.jsx)("video",{playsInline:!0,muted:!0,ref:i,autoPlay:!0,className:j.video})]})}),console.log(t),c&&!l&&Object(p.jsx)(C.a,{className:j.paper,children:Object(p.jsxs)(w.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:d.name||"Name"}),Object(p.jsx)("video",{playsInline:!0,ref:r,autoPlay:!0,className:j.video})]})})]})},R=(a(150),Object(d.a)((function(e){return{appBar:Object(l.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px  black"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}}))),U=function(){var e=R();return Object(p.jsxs)("div",{className:e.wrapper,children:[Object(p.jsx)(o.a,{className:e.appBar,position:"static",color:"inherit",children:Object(p.jsx)(s.a,{variant:"h4",align:"center",children:"Zoom Clone"})}),Object(p.jsx)(E,{}),Object(p.jsx)(A,{children:Object(p.jsx)(g,{})})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(h,{children:Object(p.jsx)(U,{})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.be89134b.chunk.js.map