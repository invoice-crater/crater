import{i as h,g as A,k as E,r as b,o,c as n,b as a,t as s,w as c,y as e,s as M,v as T,x as d,z as j,a6 as F,A as g,T as L,a7 as O,F as x,H as D,a8 as U}from"./vendor.d8bc4b48.js";import{g as G,r as H,d as P,e as v}from"./main.90d606cc.js";import{_ as W}from"./NoteModal.1222fe10.js";const q={class:"w-full"},J={class:"overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5"},K={class:"relative grid bg-white"},Q={class:"relative p-4"},R={key:0,class:"relative flex flex-col overflow-auto list max-h-36"},X=["onClick"],Y={class:"flex justify-between px-2"},Z={class:"m-0 text-base font-semibold leading-tight text-gray-700 cursor-pointer"},ee={key:1,class:"flex justify-center p-5 text-gray-400"},te={class:"text-base text-gray-500"},se={class:"m-0 ml-3 text-sm leading-none cursor-pointer font-base text-primary-400"},re={props:{type:{type:String,default:null}},emits:["select"],setup(k,{emit:w}){const u=k;h(null);const{t:N}=A(),l=h(null),C=G(),r=H(),m=P(),f=E(()=>l.value?r.notes.filter(function(t){return t.name.toLowerCase().indexOf(l.value.toLowerCase())!==-1}):r.notes);async function B(){await r.fetchNotes({filter:{},orderByField:"",orderBy:"",type:u.type?u.type:""})}function I(t,i){w("select",{...r.notes[t]}),l.value=null,i()}function S(){C.openModal({title:N("settings.customization.notes.add_note"),componentName:"NoteModal",size:"lg",data:u.type})}return(t,i)=>{const y=b("BaseIcon"),V=b("BaseInput");return o(),n(x,null,[a(W),s("div",q,[a(e(U),null,{default:c(({isOpen:z})=>[e(m).hasAbilities(e(v).VIEW_NOTE)?(o(),M(e(F),{key:0,class:j([z?"":"text-opacity-90","flex items-center z-10 font-medium text-primary-400 focus:outline-none focus:border-none"]),onClick:B},{default:c(()=>[a(y,{name:"PlusIcon",class:"w-4 h-4 font-medium text-primary-400"}),T(" "+d(t.$t("general.insert_note")),1)]),_:2},1032,["class"])):g("",!0),a(L,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:c(()=>[a(e(O),{class:"absolute z-20 px-4 mt-3 transform sm:px-0 w-screen max-w-full left-0 top-3"},{default:c(({close:$})=>[s("div",J,[s("div",K,[s("div",Q,[a(V,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=p=>l.value=p),placeholder:t.$t("general.search"),type:"text",class:"text-black"},null,8,["modelValue","placeholder"])]),e(f).length>0?(o(),n("div",R,[(o(!0),n(x,null,D(e(f),(p,_)=>(o(),n("div",{key:_,tabindex:"2",class:"px-6 py-4 border-b border-gray-200 border-solid cursor-pointer hover:bg-gray-100 hover:cursor-pointer last:border-b-0",onClick:oe=>I(_,$)},[s("div",Y,[s("label",Z,d(p.name),1)])],8,X))),128))])):(o(),n("div",ee,[s("label",te,d(t.$t("general.no_note_found")),1)]))]),e(m).hasAbilities(e(v).MANAGE_NOTE)?(o(),n("button",{key:0,type:"button",class:"h-10 flex items-center justify-center w-full px-2 py-3 bg-gray-200 border-none outline-none",onClick:S},[a(y,{name:"CheckCircleIcon",class:"text-primary-400"}),s("label",se,d(t.$t("settings.customization.notes.add_new_note")),1)])):g("",!0)])]),_:1})]),_:1})]),_:1})])],64)}}};export{re as _};