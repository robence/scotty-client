(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,n,t){e.exports=t(183)},122:function(e,n,t){},183:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(3),l=t.n(c),o=(t(122),t(123),t(32)),i=t(12),u=t(13),m="#18d884",s="#14b870",d="0.4rem",f="0.8rem",h="1.2rem",p="1.6rem";function g(){var e=Object(i.a)(["\n  margin-left: 5vw;\n  margin-right: calc(15vw - 6rem);\n  white-space: nowrap;\n  user-select: none;\n  cursor: pointer;\n  width: min-content;\n  font-size: 1.2rem;\n  color: white;\n"]);return g=function(){return e},e}var E=u.a.span(g());function b(){return r.a.createElement(E,null,"Scooty Wallet")}function v(){var e=Object(i.a)(["\n  user-select: none;\n  font-weight: 700;\n  font-size: 1rem;\n  border-radius: ",";\n  padding: ",";\n  cursor: pointer;\n  align-self: center;\n  margin: 0 ",";\n\n  :hover {\n    background-color: ",";\n  }\n  & > a {\n    color: white;\n    text-decoration: none;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  height: 100%;\n"]);return w=function(){return e},e}function x(){var e=Object(i.a)(["\n  height: inherit;\n"]);return x=function(){return e},e}function O(){var e=Object(i.a)(["\n  height: 3rem;\n  color: white;\n  background-color: ",";\n  width: 100%;\n"]);return O=function(){return e},e}var j=u.a.header(O(),m),y=u.a.nav(x()),C=u.a.ul(w()),S=u.a.li(v(),d,d,d,s);function k(){return r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(C,null,r.a.createElement(b,null),r.a.createElement(S,null,r.a.createElement(o.b,{to:"/"},"Dashboard")),r.a.createElement(S,null,r.a.createElement(o.b,{to:"/expense"},"New Expense")),r.a.createElement(S,null,r.a.createElement(o.b,{to:"/tag"},"New Tag")),r.a.createElement(S,null,r.a.createElement(o.b,{to:"/account"},"Account")))))}var T=t(33);function N(){var e=Object(i.a)([""]);return N=function(){return e},e}var z=u.a.div(N());function A(){return r.a.createElement(z,null,"Dashboard")}function D(){return r.a.createElement("div",null,"Hi!")}var J=t(89),U=t(185),B=t(184),G=t(64);function H(){var e=Object(i.a)(["\n  /* min-width: 200px;\n  min-height: 300px; */\n  width: fit-content;\n  height: fit-content;\n  margin: ",";\n  background-color: white;\n  padding: ",";\n  box-shadow: 0 "," "," 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return H=function(){return e},e}var I=u.a.div(H(),p,h,d,f,d);function P(e){var n=e.children;return r.a.createElement(I,null,n)}function R(){var e=Object(i.a)(["\n  display: inline-block;\n  color: ",";\n"]);return R=function(){return e},e}var W=u.a.label(R(),function(e){return e.color||"black"});function q(e){var n=e.title,t=e.color;return r.a.createElement(W,{color:t},n)}function F(){var e=Object(i.a)(["\n  width: 350px;\n  height: 300px;\n"]);return F=function(){return e},e}var K=u.a.div(F());function L(e){var n=e.tag,t=e.loading,a=e.tagExists,c=e.disabled,l=e.dataSource,o=e.handleChange,i=e.handleSubmit;return r.a.createElement(P,null,r.a.createElement(K,null,r.a.createElement("h2",null,"Create a new tag:"),a&&r.a.createElement(q,{title:"This tag already exists. Please enter a new one.",color:"red"}),r.a.createElement(B.a,{style:{width:200,marginRight:"1rem"},dataSource:l,placeholder:"Enter a new tag",allowClear:!0,value:n,onChange:o,filterOption:function(e,n){return-1!==n.props.children.toUpperCase().indexOf(e.toUpperCase())}}),r.a.createElement(G.a,{type:"primary",disabled:c,loading:t,onClick:i},"Create")))}var M=["Gyros","Cinema","Shampoo"];function Q(){var e=Object(a.useState)(""),n=Object(J.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(!1),o=Object(J.a)(l,2),i=o[0],u=o[1],m=M.includes(t),s=m||""===t;Object(a.useEffect)(function(){if(i){var e=setTimeout(function(){U.a.success("New tag was created successfully."),u(!1),c("")},1234);return function(){return clearTimeout(e)}}return function(){}},[i]);return r.a.createElement(L,{tag:t,loading:i,tagExists:m,disabled:s,dataSource:M,handleSubmit:function(){u(!0)},handleChange:function(e){return c(e?e.toString():"")}})}function V(){return r.a.createElement("div",null,"Account!")}function X(){var e=Object(i.a)(["\n  display: flex;\n  padding: ",";\n  min-height: 90vh;\n"]);return X=function(){return e},e}var Y=u.a.main(X(),f);function Z(){return r.a.createElement(Y,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",exact:!0,component:A}),r.a.createElement(T.a,{path:"/expense",component:D}),r.a.createElement(T.a,{path:"/tag",component:Q}),r.a.createElement(T.a,{path:"/account",component:V})))}l.a.render(r.a.createElement(function(){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(Z,null))},null),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.5b0e574f.chunk.js.map