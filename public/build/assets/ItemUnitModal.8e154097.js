import{g as S,i as V,k as g,m as h,n as C,p as k,q as x,r as i,o as b,s as B,w as r,t as d,v as p,x as v,y as e,b as l,z as q,A as z,B as N}from"./vendor.d8bc4b48.js";import{p as D,g as j}from"./main.90d606cc.js";const E={class:"flex justify-between w-full"},G=["onSubmit"],L={class:"p-8 sm:p-6"},T={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid border-modal-bg"},H={setup(A){const t=D(),a=j(),{t:f}=S();let s=V(!1);const $=g(()=>({name:{required:h.withMessage(f("validation.required"),C),minLength:h.withMessage(f("validation.name_min_length",{count:3}),k(3))}})),n=x($,g(()=>t.currentItemUnit));async function y(){if(n.value.$touch(),n.value.$invalid)return!0;try{const o=t.isItemUnitEdit?t.updateItemUnit:t.addItemUnit;s.value=!0,await o(t.currentItemUnit),a.refreshData&&a.refreshData(),u(),s.value=!1}catch{return s.value=!1,!0}}function u(){a.closeModal(),setTimeout(()=>{t.currentItemUnit={id:null,name:""},a.$reset(),n.value.$reset()},300)}return(o,m)=>{const _=i("BaseIcon"),U=i("BaseInput"),w=i("BaseInputGroup"),I=i("BaseButton"),M=i("BaseModal");return b(),B(M,{show:e(a).active&&e(a).componentName==="ItemUnitModal",onClose:u},{header:r(()=>[d("div",E,[p(v(e(a).title)+" ",1),l(_,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:u})])]),default:r(()=>[d("form",{action:"",onSubmit:N(y,["prevent"])},[d("div",L,[l(w,{label:o.$t("settings.customization.items.unit_name"),error:e(n).name.$error&&e(n).name.$errors[0].$message,variant:"horizontal",required:""},{default:r(()=>[l(U,{modelValue:e(t).currentItemUnit.name,"onUpdate:modelValue":m[0]||(m[0]=c=>e(t).currentItemUnit.name=c),invalid:e(n).name.$error,type:"text",onInput:m[1]||(m[1]=c=>e(n).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),d("div",T,[l(I,{type:"button",variant:"primary-outline",class:"mr-3 text-sm",onClick:u},{default:r(()=>[p(v(o.$t("general.cancel")),1)]),_:1}),l(I,{loading:e(s),disabled:e(s),variant:"primary",type:"submit"},{left:r(c=>[e(s)?z("",!0):(b(),B(_,{key:0,name:"SaveIcon",class:q(c.class)},null,8,["class"]))]),default:r(()=>[p(" "+v(e(t).isItemUnitEdit?o.$t("general.update"):o.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,G)]),_:1},8,["show"])}}};export{H as _};