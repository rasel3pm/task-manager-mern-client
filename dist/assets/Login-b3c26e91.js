import{r as o,j as e,L as t,q as c,f as r,i as m,s as p}from"./index-9b33d3cb.js";import{m as x}from"./motion-6941f2ef.js";const h=()=>{let a,i=o.useRef();const l=()=>{let s=i.value,n=a.value;c(s)?r("Invalid Email Address"):m(n)?r("Password Required"):p(s,n).then(d=>{d===!0&&(window.location.href="/")})};return e.jsx(x.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},transition:{duration:1},children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-md-7 col-lg-6 center-screen",children:e.jsx("div",{className:"card w-90  p-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{children:"SIGN IN"}),e.jsx("br",{}),e.jsx("input",{ref:s=>i=s,placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"}),e.jsx("br",{}),e.jsx("input",{ref:s=>a=s,placeholder:"User Password",className:"form-control animated fadeInUp",type:"password"}),e.jsx("br",{}),e.jsx("button",{onClick:l,className:"btn w-100 animated fadeInUp float-end btn-primary",children:"Next"}),e.jsx("hr",{}),e.jsx("div",{className:"float-end mt-3",children:e.jsxs("span",{children:[e.jsxs(t,{className:"text-center ms-3 h6 animated fadeInUp",to:"/Registration",children:["Sign Up"," "]}),e.jsx("span",{className:"ms-1",children:"|"}),e.jsx(t,{className:"text-center ms-3 h6 animated fadeInUp",to:"/SendOTP",children:"Forget Password"})]})})]})})})})})})};export{h as default};
