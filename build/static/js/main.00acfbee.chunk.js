(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(76)},40:function(e,t,n){},41:function(e,t,n){},73:function(e,t){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(32),r=n.n(a),i=(n(40),n(34)),l=n(15),u=(n(41),n(33)),s=n.n(u)()("http://192.168.43.80:3000");var m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),u=Object(l.a)(r,2),m=u[0],p=u[1];return s.on("chat2",(function(e){p([].concat(Object(i.a)(m),[e]))})),Object(c.useEffect)((function(){return s.on("message",(function(e){console.log(e),a(e)})),function(){return s.disconnect()}}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("p",null,n),o.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter your message",id:"msg-input"}),o.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=document.getElementById("msg-input").value;s.emit("chat",e)}},"Click"),m.map((function(e){return o.a.createElement("p",null,e)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.00acfbee.chunk.js.map