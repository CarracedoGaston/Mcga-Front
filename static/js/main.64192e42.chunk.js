(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{31:function(e,t,n){e.exports=n(48)},32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);n(32),n(33);var a=n(0),i=n.n(a),o=n(19),r=n.n(o),s=n(2),c=n(3),l=n(5),u=n(4),d=n(6),m=n(17),p=n(11),h=function(){return{type:"mcga/ADD_POSITION"}},y={isLoading:!1,error:"",position:0},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"mcga/ADD_POSITION":return{position:e.position+1};default:return e}},g={isLoading:!1,error:"",data:{name:"La china",email:"mejorprofe@gmail.com"}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return t.type,e},f=n(30),v=n(28),w=function(){return{type:"mcga/ADD_QUESTION",payload:{id:Date.now(),user:1,gameType:1,title:document.getElementById("questionToMake").value,firstAnswer:document.getElementById("questionFirstAnswer").value,secondAnswer:document.getElementById("questionSecondtAnswer").value,thirdAnswer:document.getElementById("questionThirdAnswer").value,firstQuantity:0,secondQuantity:0,thirdQuantity:0}}};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={isLoading:!1,error:"",list:[{id:Math.random(),user:1,gameType:1,title:"What is your favorite sport",firstAnswer:"tennis",secondAnswer:"volleyball",thirdAnswer:"basketball",firstQuantity:0,secondQuantity:0,thirdQuantity:0},{id:Math.random(),user:1,gameType:1,title:"What is your favorite food",firstAnswer:"pizza",secondAnswer:"pasta",thirdAnswer:"meat",firstQuantity:1,secondQuantity:0,thirdQuantity:3}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"mcga/ADD_QUESTION":return j({},e,{list:[].concat(Object(f.a)(e.list),[t.payload])});default:return e}},I={isLoading:!1,error:"",data:{id:Date.now(),user:1,gameType:1,title:"What food do you prefer?",firstAnswer:"meat",secondAnswer:"pasta",thirdAnswer:"pizza",firstQuantity:10,secondQuantity:50,thirdQuantity:120}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},N={isLoading:!1,error:"",list:[{name:"La china",email:"mejorprofe@gmail.com"},{name:"juan",email:"juancho@gmail.com"},{name:"mariana",email:"mariana@gmail.com"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B=Object(p.b)({login:E,questions:k,statics:q,home:b,users:S}),M=Object(p.c)(B),Q=n(16),C=n(14),D=(n(42),n(15)),L=(n(43),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={colorHeader:"",backgroundApp:""},n.MenuShowHide=n.MenuShowHide.bind(Object(D.a)(n)),n.MenuOut=n.MenuOut.bind(Object(D.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"MenuShowHide",value:function(){"flex"===document.getElementById("Menu").style.display?document.getElementById("Menu").style.display="none":document.getElementById("Menu").style.display="flex","flex"===document.getElementById("Dark").style.display?document.getElementById("Dark").style.display="none":document.getElementById("Dark").style.display="flex"}},{key:"MenuOut",value:function(){"flex"===document.getElementById("Menu").style.display?document.getElementById("Menu").style.display="none":document.getElementById("Menu").style.display="flex","flex"===document.getElementById("Dark").style.display?document.getElementById("Dark").style.display="none":document.getElementById("Dark").style.display="flex"}},{key:"componentDidMount",value:function(){switch(window.location.pathname.split("/")[1]){case"home":this.setState({colorHeader:"rgb(105, 73, 247)"}),this.setState({backgroundApp:"rgb(202, 192, 247)"});break;case"login":this.setState({colorHeader:"rgb(231, 56, 223)"}),this.setState({backgroundApp:"rgb(243, 192, 247)"});break;case"questions":this.setState({colorHeader:"rgb(44, 188, 207)"}),this.setState({backgroundApp:"rgb(192, 247, 243)"});break;case"statics":this.setState({colorHeader:"rgb(124, 10, 177)"}),this.setState({backgroundApp:"rgb(222, 192, 247)"});break;default:this.setState({colorHeader:"black"}),this.setState({backgroundApp:"black"})}}},{key:"render",value:function(){return i.a.createElement("div",{id:"MainLayout"},i.a.createElement("div",{id:"header",className:"color",style:{color:this.state.colorHeader}},window.location.pathname.split("/")),i.a.createElement("div",{id:"MenuButton",onClick:this.MenuShowHide}),i.a.createElement("div",{id:"Menu"},i.a.createElement("div",{id:"ImgTop"}),i.a.createElement("ul",{id:"MenuContainer"},i.a.createElement("div",{id:"publicSection"},i.a.createElement(Q.b,{to:"/home"},i.a.createElement("li",{className:"link"},i.a.createElement("div",{id:"homeImg",className:"imgsMenu"}),"Home")),i.a.createElement(Q.b,{to:"/login"},i.a.createElement("li",{className:"link"},i.a.createElement("div",{id:"loginImg",className:"imgsMenu"}),"Login"))),i.a.createElement("div",{id:"privateSection"},i.a.createElement(Q.b,{to:"/questions"},i.a.createElement("li",{className:"link"},i.a.createElement("div",{id:"questionImg",className:"imgsMenu"}),"Questions")),i.a.createElement(Q.b,{to:"/statics"},i.a.createElement("li",{className:"link"},i.a.createElement("div",{id:"staticImg",className:"imgsMenu"}),"Statics"))))),i.a.createElement("div",{id:"MainContainer",style:{backgroundColor:this.state.backgroundApp}},this.props.children),i.a.createElement("div",{id:"Dark",onClick:this.MenuOut}))}}]),t}(a.Component)),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).choose=function(){n.props.addPosition()},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(L,null,i.a.createElement("div",{className:"Container"},this.props.position!==this.props.questions.length?i.a.createElement("div",{id:"questionPlay"},i.a.createElement("div",{id:"questionToAnswer"},i.a.createElement("h1",null,this.props.questions[this.props.position].title)),i.a.createElement("button",{className:"buttonAnswer",onClick:this.choose},this.props.questions[this.props.position].firstAnswer),i.a.createElement("button",{className:"buttonAnswer",onClick:this.choose},this.props.questions[this.props.position].secondAnswer),i.a.createElement("button",{className:"buttonAnswer",onClick:this.choose},this.props.questions[this.props.position].thirdAnswer)):i.a.createElement("div",null,"No more questions. Try Later"),i.a.createElement("div",{id:"staticsImgExample"})))}}]),t}(a.Component),x=Object(m.b)((function(e,t){return{questions:e.questions.list,position:e.home.position,isLoading:e.questions.isLoading}}),(function(e){return Object(p.a)({addPosition:h},e)}))(T),P=(n(45),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createAccount=n.createAccount.bind(Object(D.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"createAccount",value:function(){document.getElementById("inputCreateAccount").style.display="flex",document.getElementById("createAccount").style.display="none",document.getElementById("buttonLogin").style.display="none",document.getElementById("buttonSave").style.display="flex"}},{key:"render",value:function(){return i.a.createElement(L,null,i.a.createElement("div",{className:"Container"},i.a.createElement("div",{id:"login"},i.a.createElement("input",{className:"inputLogin",placeholder:" Name"}),i.a.createElement("input",{className:"inputLogin",placeholder:" Password"}),i.a.createElement("input",{id:"inputCreateAccount",placeholder:" Email"})),i.a.createElement("div",{id:"buttonsLoginContainer"},i.a.createElement("div",{id:"createAccount",onClick:this.createAccount},"Create Account"),i.a.createElement("button",{id:"buttonLogin",className:"buttonLogin"},"Log In"),i.a.createElement("button",{id:"buttonSave",className:"buttonLogin"},"Save"))))}}]),t}(a.Component)),H=(n(46),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).add=function(){""!==document.getElementById("questionToMake").value&&""!==document.getElementById("questionFirstAnswer").value&&""!==document.getElementById("questionSecondtAnswer").value&&""!==document.getElementById("questionThirdAnswer").value?(n.props.addQuestions(),window.alert("Question Saved"),document.getElementById("questionToMake").value="",document.getElementById("questionFirstAnswer").value="",document.getElementById("questionSecondtAnswer").value="",document.getElementById("questionThirdAnswer").value=""):window.alert("Complete all the data")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(L,null,i.a.createElement("div",{className:"Container"},i.a.createElement("div",{id:"newQuestion"},i.a.createElement("textarea",{id:"questionToMake",placeholder:"Insert your new Question!!"}),i.a.createElement("input",{className:"inputAnswer",id:"questionFirstAnswer",placeholder:"First Answer..."}),i.a.createElement("input",{className:"inputAnswer",id:"questionSecondtAnswer",placeholder:"Second Answer..."}),i.a.createElement("input",{className:"inputAnswer",id:"questionThirdAnswer",placeholder:"Third Answer..."})),i.a.createElement("div",{id:"buttonNewQuestion"},i.a.createElement("button",{className:"buttonQuestion",onClick:this.add},"Save Question")),console.log(this.props.questions)))}}]),t}(a.Component)),W=Object(m.b)((function(e,t){return{questions:e.questions.list,isLoading:e.questions.isLoading}}),(function(e){return Object(p.a)({addQuestions:w},e)}))(H),F=(n(47),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(L,null,i.a.createElement("div",{className:"Container"},i.a.createElement("div",{id:"selectStatic"},i.a.createElement("div",{className:"staticQuestion"},"Which sport do you prefer?"),i.a.createElement("div",{className:"staticQuestion"},"What type of person you are?"),i.a.createElement("div",{className:"staticQuestion"},"How old are you?"),i.a.createElement("div",{className:"staticQuestion"},"Which color do you prefer?"),i.a.createElement("div",{className:"staticQuestion"},"What is your sex?")),i.a.createElement("div",{id:"staticsImgExamp"})))}}]),t}(a.Component)),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(Q.a,null,i.a.createElement(C.d,null,i.a.createElement(C.b,{exact:!0,path:"/home",component:x}),i.a.createElement(C.b,{exact:!0,path:"/login",component:P}),i.a.createElement(C.b,{exact:!0,path:"/questions",component:W}),i.a.createElement(C.b,{exact:!0,path:"/statics",component:F}),i.a.createElement(C.a,{from:"/",to:"/home"})))}}]),t}(a.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{store:M},i.a.createElement(z,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.64192e42.chunk.js.map