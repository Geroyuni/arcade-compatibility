(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),c=s(7),r=s.n(c),i=(s(12),s(2)),o=s(3),u=s(5),d=s(4),j=(s(13),s(0)),l=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).state={text:t.text},a}return Object(o.a)(s,[{key:"render",value:function(){var t="Works"===this.state.text?"blue":"";return Object(j.jsx)("span",{className:"tag "+t,children:this.state.text})}}]),s}(a.Component),h=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).toggleAccordion=function(){a.setState({active:!a.state.active})},a.images=function(t){switch(t){case"Steam":return"assets/steam.svg";case"EGS":return"assets/egs.svg";default:return"assets/generic.svg"}},a.state={data:t.data,active:!1},a}return Object(o.a)(s,[{key:"render",value:function(){var t=this;console.log(this.state.data.data);var e=0,s=this.state.data.tests.map((function(t){var s=t.issues.map((function(t){return Object(j.jsx)("span",{className:"tag gray",children:t},e++)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"spacing"}),Object(j.jsxs)("h4",{children:[Object(j.jsx)("b",{children:t.gpu_vendor})," ",t.gpu_info]}),Object(j.jsxs)("p",{children:["Fullscreen:",Object(j.jsx)(l,{text:t.fullscreen})]}),Object(j.jsxs)("p",{children:["Windowed:",Object(j.jsx)(l,{text:t.windowed})]}),t.issues.length?Object(j.jsxs)("p",{children:["Issues:",s]}):""]})}));return Object(j.jsxs)("div",{className:"game "+(this.state.active?"":"hide_info"),children:[Object(j.jsxs)("div",{className:"game_select",onClick:function(){return t.toggleAccordion()},children:[Object(j.jsxs)("div",{className:"game_name",children:[Object(j.jsx)("img",{src:this.images(this.state.data.location),alt:this.state.data.location,width:"16px"}),Object(j.jsx)("p",{children:this.state.data.name})]}),Object(j.jsxs)("div",{className:"game_status",children:[this.state.data.tweak?Object(j.jsx)(l,{text:"Requires tweaks"}):"",Object(j.jsx)(l,{text:this.state.data.status})]})]}),Object(j.jsxs)("div",{className:"game_info",children:[this.state.data.tweak?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:this.state.data.tweak}),Object(j.jsx)("div",{className:"spacing"})]}):"",s]})]})}}]),s}(a.Component),b=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.call(this)).setQuery=function(e){t.setState({query:e})},t.state={data:[],query:""},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("games.json").then((function(t){return t.json()})).then((function(e){var s=0,a=e.map((function(t){return t.status="Works",t.tests.forEach((function(e){("Works"!==e.fullscreen||"Works"!==e.windowed||e.issues.length)&&(t.status="Has issues")})),t.index_id=s++,t}));t.setState({data:a})}))}},{key:"render",value:function(){var t=this,e=this.state.data,s=(e=e.sort((function(t,e){return t.name.toLowerCase()<e.name.toLowerCase()?-1:1})).filter((function(e){return e.name.toLowerCase().includes(t.state.query.toLowerCase())||e.status.toLowerCase().includes(t.state.query.toLowerCase())||!!e.tweak&&"requires tweaks".includes(t.state.query.toLowerCase())}))).map((function(t){return Object(j.jsx)(h,{data:t},t.index_id)}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Parsec Compatibility"}),Object(j.jsx)("p",{children:"These are tests done by the community to check whether a game works or not on Arcade. Note that compatibility will vary depending on your hardware, and it's possible that you won't be able to host a game that is said to work here."}),Object(j.jsx)("input",{type:"text",onChange:function(e){return t.setQuery(e.target.value)},placeholder:"Search for a game or tag..."})]}),Object(j.jsx)("main",{children:s})]})}}]),s}(a.Component),m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,r=e.getTTFB;s(t),a(t),n(t),c(t),r(t)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.querySelector("#root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.bc5a86de.chunk.js.map