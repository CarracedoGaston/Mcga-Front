(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{23:function(e,t,a){e.exports=a(41)},24:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);a(24),a(25);var n=a(0),c=a.n(n),i=a(20),l=a.n(i),o=a(2),s=a(3),r=a(5),u=a(4),m=a(6),d=a(11),b=a(10),p=(a(30),a(12)),E=(a(31),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={colorHeader:"",backgroundApp:""},a.MenuShowHide=a.MenuShowHide.bind(Object(p.a)(a)),a.MenuOut=a.MenuOut.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"MenuShowHide",value:function(){"flex"===document.getElementById("Menu").style.display?document.getElementById("Menu").style.display="none":document.getElementById("Menu").style.display="flex","flex"===document.getElementById("Dark").style.display?document.getElementById("Dark").style.display="none":document.getElementById("Dark").style.display="flex"}},{key:"MenuOut",value:function(){"flex"===document.getElementById("Menu").style.display?document.getElementById("Menu").style.display="none":document.getElementById("Menu").style.display="flex","flex"===document.getElementById("Dark").style.display?document.getElementById("Dark").style.display="none":document.getElementById("Dark").style.display="flex"}},{key:"componentDidMount",value:function(){switch(window.location.pathname.split("/")[1]){case"home":this.setState({colorHeader:"rgb(105, 73, 247)"}),this.setState({backgroundApp:"rgb(202, 192, 247)"});break;case"login":this.setState({colorHeader:"rgb(231, 56, 223)"}),this.setState({backgroundApp:"rgb(243, 192, 247)"});break;case"gametypes":this.setState({colorHeader:"rgb(228, 66, 134)"}),this.setState({backgroundApp:"rgb(247, 192, 224)"});break;case"questions":this.setState({colorHeader:"rgb(44, 188, 207)"}),this.setState({backgroundApp:"rgb(192, 247, 243)"});break;case"statics":this.setState({colorHeader:"rgb(124, 10, 177)"}),this.setState({backgroundApp:"rgb(222, 192, 247)"});break;default:this.setState({colorHeader:"black"}),this.setState({backgroundApp:"black"})}}},{key:"render",value:function(){return c.a.createElement("div",{id:"MainLayout"},c.a.createElement("div",{id:"header",className:"color",style:{color:this.state.colorHeader}},window.location.pathname.split("/")),c.a.createElement("div",{id:"MenuButton",onClick:this.MenuShowHide}),c.a.createElement("div",{id:"Menu"},c.a.createElement("div",{id:"ImgTop"}),c.a.createElement("ul",{id:"MenuContainer"},c.a.createElement("div",{id:"publicSection"},c.a.createElement(d.b,{to:"/home"},c.a.createElement("li",{className:"link"},c.a.createElement("div",{id:"homeImg",className:"imgsMenu"}),"Home")),c.a.createElement(d.b,{to:"/login"},c.a.createElement("li",{className:"link"},c.a.createElement("div",{id:"loginImg",className:"imgsMenu"}),"Login"))),c.a.createElement("div",{id:"privateSection"},c.a.createElement(d.b,{to:"/gametypes"},c.a.createElement("li",{className:"link"},c.a.createElement("div",{id:"gameImg",className:"imgsMenu"}),"Game Types")),c.a.createElement(d.b,{to:"/questions"},c.a.createElement("li",{className:"link"},c.a.createElement("div",{id:"questionImg",className:"imgsMenu"}),"Questions")),c.a.createElement(d.b,{to:"/statics"},c.a.createElement("li",{className:"link"},c.a.createElement("div",{id:"staticImg",className:"imgsMenu"}),"Statics"))))),c.a.createElement("div",{id:"MainContainer",style:{backgroundColor:this.state.backgroundApp}},this.props.children),c.a.createElement("div",{id:"Dark",onClick:this.MenuOut}))}}]),t}(n.Component)),y=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"Container"},c.a.createElement("div",{id:"questionPlay"},c.a.createElement("div",{id:"questionToAnswer"},c.a.createElement("h1",null,"Which sport do you prefer?")),c.a.createElement("div",{className:"buttonAnswer"},"Basquet"),c.a.createElement("div",{className:"buttonAnswer"},"Football"),c.a.createElement("div",{className:"buttonAnswer"},"Tennis")),c.a.createElement("div",{id:"staticsImgExample"})))}}]),t}(n.Component),h=(a(37),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).createAccount=a.createAccount.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createAccount",value:function(){document.getElementById("inputCreateAccount").style.display="flex",document.getElementById("createAccount").style.display="none",document.getElementById("buttonLogin").style.display="none",document.getElementById("buttonSave").style.display="flex"}},{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"Container"},c.a.createElement("div",{id:"login"},c.a.createElement("input",{className:"inputLogin",placeholder:" Name"}),c.a.createElement("input",{className:"inputLogin",placeholder:" Password"}),c.a.createElement("input",{id:"inputCreateAccount",placeholder:" Email"})),c.a.createElement("div",{id:"buttonsLoginContainer"},c.a.createElement("div",{id:"createAccount",onClick:this.createAccount},"Create Account"),c.a.createElement("button",{id:"buttonLogin",className:"buttonLogin"},"Log In"),c.a.createElement("button",{id:"buttonSave",className:"buttonLogin"},"Save"))))}}]),t}(n.Component)),g=(a(38),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"Container"},c.a.createElement("div",{id:"gameQuestion"},c.a.createElement("div",{className:"gameQuestion"},"Sports"),c.a.createElement("div",{className:"gameQuestion"},"History"),c.a.createElement("div",{className:"gameQuestion"},"Movies"),c.a.createElement("div",{className:"gameQuestion"},"Languages"),c.a.createElement("div",{className:"gameQuestion"},"Fashion"),c.a.createElement("div",{className:"gameQuestion"},"Foods")),c.a.createElement("div",{id:"buttonPanel"},c.a.createElement("button",{className:"buttonBack"},"Back"))))}}]),t}(n.Component)),v=(a(39),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"Container"},c.a.createElement("div",{id:"newQuestion"},c.a.createElement("div",{id:"questionToMake"},c.a.createElement("h1",null,"Insert your new Question!!")),c.a.createElement("div",{className:"inputAnswer"},"Answer..."),c.a.createElement("div",{className:"inputAnswer"},"Answer..."),c.a.createElement("div",{className:"inputAnswer"},"Answer...")),c.a.createElement("div",{id:"buttonNewQuestion"},c.a.createElement("button",{className:"buttonQuestion"},"Game Type"),c.a.createElement("button",{className:"buttonQuestion"},"Save Question"))))}}]),t}(n.Component)),f=(a(40),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"Container"},c.a.createElement("div",{id:"selectStatic"},c.a.createElement("div",{className:"staticQuestion"},"Which sport do you prefer?"),c.a.createElement("div",{className:"staticQuestion"},"What type of person you are?"),c.a.createElement("div",{className:"staticQuestion"},"How old are you?"),c.a.createElement("div",{className:"staticQuestion"},"Which color do you prefer?"),c.a.createElement("div",{className:"staticQuestion"},"What is your sex?")),c.a.createElement("div",{id:"staticsImgExamp"})))}}]),t}(n.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(b.d,null,c.a.createElement(b.b,{exact:!0,path:"/home",component:y}),c.a.createElement(b.b,{exact:!0,path:"/login",component:h}),c.a.createElement(b.b,{exact:!0,path:"/gametypes",component:g}),c.a.createElement(b.b,{exact:!0,path:"/questions",component:v}),c.a.createElement(b.b,{exact:!0,path:"/statics",component:f}),c.a.createElement(b.a,{from:"/",to:"/home"})))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(k,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.dce9898c.chunk.js.map