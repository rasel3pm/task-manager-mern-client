import{r as m,e as f,j as e,x as d,i as o,f as a,y as u,z as x,B as p}from"./index-31a7259d.js";const j=()=>{let r,l=m.useRef(),n=f();const i=()=>{let s=r.value,t=l.value;if(o(s))return a("Password Required"),!1;if(o(t))return a("Confirm Password Required"),!1;if(s!==t)return a("Password & Confirm Password Should be Same"),!1;u(d(),x(),s).then(c=>{c===!0&&(p("Password Reset Success"),n("/login"))})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-md-7 col-lg-6 center-screen",children:e.jsx("div",{className:"card w-90 p-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{children:"SET NEW PASSWORD"}),e.jsx("br",{}),e.jsx("label",{children:"Your email address"}),e.jsx("input",{readOnly:!0,value:d(),placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"}),e.jsx("br",{}),e.jsx("label",{children:"New Password"}),e.jsx("input",{ref:s=>r=s,placeholder:"New Password",className:"form-control animated fadeInUp",type:"password"}),e.jsx("br",{}),e.jsx("label",{children:"Confirm Password"}),e.jsx("input",{ref:s=>l=s,placeholder:"Confirm Password",className:"form-control animated fadeInUp",type:"password"}),e.jsx("br",{}),e.jsx("button",{onClick:i,className:"btn w-100 animated fadeInUp float-end btn-primary",children:"Next"})]})})})})})})};export{j as default};