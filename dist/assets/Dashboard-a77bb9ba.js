import{r as c,S as i,u as t,j as a}from"./index-9b33d3cb.js";import{m}from"./motion-6941f2ef.js";const o=()=>{c.useEffect(()=>{i()},[]);const e=t(s=>s.summary.value);return a.jsx(a.Fragment,{children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"row",children:e.map((s,r)=>a.jsx(m.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},transition:{duration:1},className:"col-12 col-lg-3 col-sm-6 col-md-3  p-2",children:a.jsx("div",{className:"card h-100",children:a.jsxs("div",{className:"card-body",children:[a.jsxs("h5",{className:"animated fadeInUp",children:["Total ",s._id]}),a.jsx("h6",{className:"text-secondary animated fadeInUp",children:s.sum})]})})},r))})})})};export{o as default};