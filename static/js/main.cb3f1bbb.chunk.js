(this["webpackJsonpmy-task-list"]=this["webpackJsonpmy-task-list"]||[]).push([[0],{159:function(e,t,a){e.exports=a(280)},164:function(e,t,a){},165:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),s=a.n(r),o=(a(164),a(146)),c=a(127),i=a(128),u=a(129),m=a(148),k=a(147),g=a(293),d=a(29),h=a(294),f=a(291),p=a(290),E=(a(165),function(e){Object(m.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getTasks()},n.onChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.onSubmit=function(){if(n.state.task){var e=JSON.parse(localStorage.getItem("tasklist"));null==e&&(e=[]);var t={task:"\ud83d\udcc4 ".concat(n.state.task),status:!1};e.push(t),localStorage.setItem("tasklist",JSON.stringify(e)),n.setState({task:""}),n.getTasks()}},n.getTasks=function(){var e=JSON.parse(localStorage.getItem("tasklist"));e&&(e=e.sort((function(e,t){return e.status?1:t.status?-1:0})),localStorage.setItem("tasklist",JSON.stringify(e)),n.setState({tasklist:e.map((function(e,t){var a="yellow",r={background:"white"},s={textDecoration:"none"};return e.status&&(a="green",r.background="beige",s.textDecoration="line-through"),l.a.createElement(g.a,{key:t,color:a,fluid:!0,style:r},l.a.createElement(g.a.Content,null,l.a.createElement(g.a.Header,{textAlign:"left",style:s},l.a.createElement("div",{style:{wordWrap:"break-word"}},e.task)),l.a.createElement(g.a.Meta,{textAlign:"right"},l.a.createElement(d.a,{link:!0,name:"check circle",color:"green",onClick:function(){return n.updateTask(t)}}),l.a.createElement("span",{style:{paddingRight:10}},"Done"),l.a.createElement(d.a,{link:!0,name:"undo",color:"yellow",onClick:function(){return n.undoTask(t)}}),l.a.createElement("span",{style:{paddingRight:10}},"Undo"),l.a.createElement(d.a,{link:!0,name:"delete",color:"red",onClick:function(){return n.deleteTask(t)}}),l.a.createElement("span",{style:{paddingRight:10}},"Delete"))))}))}))},n.updateTask=function(e){var t=JSON.parse(localStorage.getItem("tasklist"));t[e].status=!0,localStorage.setItem("tasklist",JSON.stringify(t)),n.getTasks()},n.undoTask=function(e){var t=JSON.parse(localStorage.getItem("tasklist"));t[e].status=!1,localStorage.setItem("tasklist",JSON.stringify(t)),n.getTasks()},n.deleteTask=function(e){var t=JSON.parse(localStorage.getItem("tasklist"));t.splice(e,1),localStorage.setItem("tasklist",JSON.stringify(t)),n.getTasks()},n.state={task:"",tasklist:[]},n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(h.a,{as:"h1"})),l.a.createElement("div",{className:"app-form"},l.a.createElement(f.a,{onSubmit:this.onSubmit},l.a.createElement(p.a,{type:"text",name:"task",onChange:this.onChange,value:this.state.task,fluid:!0,placeholder:"enter the task..."}))),l.a.createElement("div",null,l.a.createElement(g.a.Group,null,this.state.tasklist)))}}]),a}(n.Component));a(279);var S=function(){var e=l.a.useState(function(){var e="dark"in localStorage,t=JSON.parse(localStorage.getItem("dark")),a=function(){if(!window.matchMedia)return;return window.matchMedia("(prefers-color-scheme: dark)").matches}();return e?t:!!a}()),t=Object(o.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){localStorage.setItem("dark",JSON.stringify(a))}),[a]),l.a.createElement("div",{className:a?"dark-mode":"light-mode"},l.a.createElement("nav",null,l.a.createElement("div",{className:"toggle-container"},l.a.createElement("h1",null,"\ud83d\udcdd My Task List"),l.a.createElement("span",{style:{color:a?"grey":"yellow"}},"\u2600\ufe0e"),l.a.createElement("span",{className:"toggle"},l.a.createElement("input",{checked:a,onChange:function(){return n((function(e){return!e}))},id:"checkbox",className:"checkbox",type:"checkbox"}),l.a.createElement("label",{htmlFor:"checkbox"})),l.a.createElement("span",{style:{color:a?"slateblue":"black"}},"\u263e"))),l.a.createElement("main",null,l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=document.getElementById("root");s.a.render(l.a.createElement(S,null),v),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[159,1,2]]]);
//# sourceMappingURL=main.cb3f1bbb.chunk.js.map