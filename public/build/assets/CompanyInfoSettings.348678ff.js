import{C as Z,g as A,i as w,j as L,k as q,m as h,n as F,aQ as ee,q as T,r as d,o as I,s as N,w as l,t as r,x as y,y as e,b as o,v as k,z as R,A as z,B as E,am as ae,p as te,c as j,a0 as oe,F as se}from"./vendor.d8bc4b48.js";import{c as J,g as O,m as Q}from"./main.90d606cc.js";const ne={class:"flex justify-between w-full"},le={class:"px-6 pt-6"},de={class:"font-medium text-lg text-left"},re={class:"mt-2 text-sm leading-snug text-gray-500",style:{"max-width":"680px"}},ie=["onSubmit"],me={class:"p-4 sm:p-6 space-y-4"},ue={class:"z-0 flex justify-end p-4 bg-gray-50 border-modal-bg"},ce={setup(H){const m=J(),g=O(),S=Q(),$=Z(),{t:D}=A();let i=w(!1);const a=L({id:m.selectedCompany.id,name:null}),v=q(()=>g.active&&g.componentName==="DeleteCompanyModal"),B={formData:{name:{required:h.withMessage(D("validation.required"),F),sameAsName:h.withMessage(D("validation.company_name_not_same"),ee(m.selectedCompany.name))}}},c=T(B,{formData:a},{$scope:!1});async function x(){if(c.value.$touch(),c.value.$invalid)return!0;const f=m.companies[0];i.value=!0;try{const _=await m.deleteCompany(a);console.log(_.data.success),_.data.success&&(V(),await m.setSelectedCompany(f),$.push("/admin/dashboard"),await S.setIsAppLoaded(!1),await S.bootstrap()),i.value=!1}catch{i.value=!1}}function p(){a.id=null,a.name="",c.value.$reset()}function V(){g.closeModal(),setTimeout(()=>{p(),c.value.$reset()},300)}return(f,_)=>{const U=d("BaseInput"),n=d("BaseInputGroup"),t=d("BaseButton"),M=d("BaseIcon"),u=d("BaseModal");return I(),N(u,{show:e(v),onClose:V},{default:l(()=>[r("div",ne,[r("div",le,[r("h6",de,y(e(g).title),1),r("p",re,y(f.$t("settings.company_info.delete_company_modal_desc",{company:e(m).selectedCompany.name})),1)])]),r("form",{action:"",onSubmit:E(x,["prevent"])},[r("div",me,[o(n,{label:f.$t("settings.company_info.delete_company_modal_label",{company:e(m).selectedCompany.name}),error:e(c).formData.name.$error&&e(c).formData.name.$errors[0].$message,required:""},{default:l(()=>[o(U,{modelValue:e(a).name,"onUpdate:modelValue":_[0]||(_[0]=b=>e(a).name=b),invalid:e(c).formData.name.$error,onInput:_[1]||(_[1]=b=>e(c).formData.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),r("div",ue,[o(t,{class:"mr-3 text-sm",variant:"primary-outline",outline:"",type:"button",onClick:V},{default:l(()=>[k(y(f.$t("general.cancel")),1)]),_:1}),o(t,{loading:e(i),disabled:e(i),variant:"danger",type:"submit"},{left:l(b=>[e(i)?z("",!0):(I(),N(M,{key:0,name:"TrashIcon",class:R(b.class)},null,8,["class"]))]),default:l(()=>[k(" "+y(f.$t("general.delete")),1)]),_:1},8,["loading","disabled"])])],40,ie)]),_:1},8,["show"])}}},pe=["onSubmit"],_e={key:0,class:"py-5"},fe={class:"text-lg leading-6 font-medium text-gray-900"},ye={class:"mt-2 max-w-xl text-sm text-gray-500"},ge={class:"mt-5"},$e={setup(H){const m=J(),g=Q(),S=O(),{t:$}=A(),D=ae("utils");let i=w(!1);const a=L({name:null,logo:null,address:{address_street_1:"",address_street_2:"",website:"",country_id:null,state:"",city:"",phone:"",zip:""}});D.mergeSettings(a,{...m.selectedCompany});let v=w([]),B=w(null),c=w(null);a.logo&&v.value.push({image:a.logo});const x=q(()=>({name:{required:h.withMessage($("validation.required"),F),minLength:h.withMessage($("validation.name_min_length"),te(3))},address:{country_id:{required:h.withMessage($("validation.required"),F)}}})),p=T(x,q(()=>a));g.fetchCountries();function V(n,t,M,u){c.value=u.name,B.value=t}function f(){B.value=null}async function _(){if(p.value.$touch(),p.value.$invalid)return!0;if(i.value=!0,(await m.updateCompany(a)).data.data){if(B.value){let t=new FormData;t.append("company_logo",JSON.stringify({name:c.value,data:B.value})),await m.updateCompanyLogo(t)}i.value=!1}i.value=!1}function U(n){S.openModal({title:$("settings.company_info.are_you_absolutely_sure"),componentName:"DeleteCompanyModal",size:"sm"})}return(n,t)=>{const M=d("BaseFileUploader"),u=d("BaseInputGroup"),b=d("BaseInputGrid"),C=d("BaseInput"),K=d("BaseMultiselect"),G=d("BaseTextarea"),P=d("BaseIcon"),W=d("BaseButton"),X=d("BaseDivider"),Y=d("BaseSettingCard");return I(),j(se,null,[r("form",{onSubmit:E(_,["prevent"])},[o(Y,{title:n.$t("settings.company_info.company_info"),description:n.$t("settings.company_info.section_description")},{default:l(()=>[o(b,{class:"mt-5"},{default:l(()=>[o(u,{label:n.$tc("settings.company_info.company_logo")},{default:l(()=>[o(M,{modelValue:e(v),"onUpdate:modelValue":t[0]||(t[0]=s=>oe(v)?v.value=s:v=s),base64:"",onChange:V,onRemove:f},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o(b,{class:"mt-5"},{default:l(()=>[o(u,{label:n.$tc("settings.company_info.company_name"),error:e(p).name.$error&&e(p).name.$errors[0].$message,required:""},{default:l(()=>[o(C,{modelValue:e(a).name,"onUpdate:modelValue":t[1]||(t[1]=s=>e(a).name=s),invalid:e(p).name.$error,onBlur:t[2]||(t[2]=s=>e(p).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),o(u,{label:n.$tc("settings.company_info.phone")},{default:l(()=>[o(C,{modelValue:e(a).address.phone,"onUpdate:modelValue":t[3]||(t[3]=s=>e(a).address.phone=s)},null,8,["modelValue"])]),_:1},8,["label"]),o(u,{label:n.$tc("settings.company_info.country"),error:e(p).address.country_id.$error&&e(p).address.country_id.$errors[0].$message,required:""},{default:l(()=>[o(K,{modelValue:e(a).address.country_id,"onUpdate:modelValue":t[4]||(t[4]=s=>e(a).address.country_id=s),label:"name",invalid:e(p).address.country_id.$error,options:e(g).countries,"value-prop":"id","can-deselect":!0,"can-clear":!1,searchable:"","track-by":"name"},null,8,["modelValue","invalid","options"])]),_:1},8,["label","error"]),o(u,{label:n.$tc("settings.company_info.state")},{default:l(()=>[o(C,{modelValue:e(a).address.state,"onUpdate:modelValue":t[5]||(t[5]=s=>e(a).address.state=s),name:"state",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(u,{label:n.$tc("settings.company_info.city")},{default:l(()=>[o(C,{modelValue:e(a).address.city,"onUpdate:modelValue":t[6]||(t[6]=s=>e(a).address.city=s),type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(u,{label:n.$tc("settings.company_info.zip")},{default:l(()=>[o(C,{modelValue:e(a).address.zip,"onUpdate:modelValue":t[7]||(t[7]=s=>e(a).address.zip=s)},null,8,["modelValue"])]),_:1},8,["label"]),r("div",null,[o(u,{label:n.$tc("settings.company_info.address")},{default:l(()=>[o(G,{modelValue:e(a).address.address_street_1,"onUpdate:modelValue":t[8]||(t[8]=s=>e(a).address.address_street_1=s),rows:"2"},null,8,["modelValue"])]),_:1},8,["label"]),o(G,{modelValue:e(a).address.address_street_2,"onUpdate:modelValue":t[9]||(t[9]=s=>e(a).address.address_street_2=s),rows:"2",row:2,class:"mt-2"},null,8,["modelValue"])])]),_:1}),o(W,{loading:e(i),disabled:e(i),type:"submit",class:"mt-6"},{left:l(s=>[e(i)?z("",!0):(I(),N(P,{key:0,class:R(s.class),name:"SaveIcon"},null,8,["class"]))]),default:l(()=>[k(" "+y(n.$tc("settings.company_info.save")),1)]),_:1},8,["loading","disabled"]),e(m).companies.length!==1?(I(),j("div",_e,[o(X,{class:"my-4"}),r("h3",fe,y(n.$tc("settings.company_info.delete_company")),1),r("div",ye,[r("p",null,y(n.$tc("settings.company_info.delete_company_description")),1)]),r("div",ge,[r("button",{type:"button",class:"inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm",onClick:U},y(n.$tc("general.delete")),1)])])):z("",!0)]),_:1},8,["title","description"])],40,pe),o(ce)],64)}}};export{$e as default};