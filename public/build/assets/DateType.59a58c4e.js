import{h as r,k as m,r as p,o as d,s as c,y as f,a0 as i}from"./vendor.d8bc4b48.js";const k={props:{modelValue:{type:[String,Date],default:r().format("YYYY-MM-DD")}},emits:["update:modelValue"],setup(t,{emit:l}){const s=t,e=m({get:()=>s.modelValue,set:a=>{l("update:modelValue",a)}});return(a,o)=>{const u=p("BaseDatePicker");return d(),c(u,{modelValue:f(e),"onUpdate:modelValue":o[0]||(o[0]=n=>i(e)?e.value=n:null)},null,8,["modelValue"])}}};export{k as default};