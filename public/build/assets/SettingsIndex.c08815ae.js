import{o as c,c as h,S as b,k as g,r as a,s as B,w as i,A as M,t as d,x as P,$ as R,g as N,i as H,u as j,C as q,ac as A,b as n,y as f,a0 as E,H as F,F as O}from"./vendor.d8bc4b48.js";import{_ as k,m as U}from"./main.90d606cc.js";const D={name:"List"},G={class:"list-none"};function T(o,u,t,s,l,p){return c(),h("div",G,[b(o.$slots,"default")])}var z=k(D,[["render",T]]);const J={name:"ListItem",props:{title:{type:String,required:!1,default:""},active:{type:Boolean,required:!0},index:{type:Number,default:null}},setup(o,{slots:u}){const t="cursor-pointer pb-2 pr-0 text-sm font-medium leading-5  flex items-center";let s=g(()=>!!u.icon),l=g(()=>o.active?`${t} text-primary-500`:`${t} text-gray-500`);return{hasIconSlot:s,containerClass:l}}},K={key:0,class:"mr-3"};function Q(o,u,t,s,l,p){const m=a("router-link");return c(),B(m,R(o.$attrs,{class:s.containerClass}),{default:i(()=>[s.hasIconSlot?(c(),h("span",K,[b(o.$slots,"icon")])):M("",!0),d("span",null,P(t.title),1)]),_:3},16,["class"])}var W=k(J,[["render",Q]]);const X={class:"w-full mb-6 select-wrapper xl:hidden"},Y={class:"flex"},Z={class:"hidden mt-1 xl:block min-w-[240px]"},ee={class:"w-full overflow-hidden"},ne={setup(o){const{t:u}=N();let t=H({});const s=U(),l=j(),p=q(),m=g(()=>s.settingMenu.map(e=>Object.assign({},e,{title:u(e.title)})));A(()=>{l.path==="/admin/settings"&&p.push("/admin/settings/account-settings");const e=m.value.find(_=>_.link===l.path);t.value=e});function w(e){return l.path.indexOf(e)>-1}function x(e){return p.push(e.link)}return(e,_)=>{const v=a("BaseBreadcrumbItem"),y=a("BaseBreadcrumb"),S=a("BasePageHeader"),V=a("BaseMultiselect"),C=a("BaseIcon"),I=a("RouterView"),L=a("BasePage");return c(),B(L,null,{default:i(()=>[n(S,{title:e.$tc("settings.setting",1),class:"mb-6"},{default:i(()=>[n(y,null,{default:i(()=>[n(v,{title:e.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),n(v,{title:e.$tc("settings.setting",2),to:"/admin/settings/account-settings",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),d("div",X,[n(V,{modelValue:f(t),"onUpdate:modelValue":[_[0]||(_[0]=r=>E(t)?t.value=r:t=r),x],options:f(m),"can-deselect":!1,"value-prop":"title","track-by":"title",label:"title",object:""},null,8,["modelValue","options"])]),d("div",Y,[d("div",Z,[n(z,null,{default:i(()=>[(c(!0),h(O,null,F(f(s).settingMenu,(r,$)=>(c(),B(W,{key:$,title:e.$t(r.title),to:r.link,active:w(r.link),index:$,class:"py-3"},{icon:i(()=>[n(C,{name:r.icon},null,8,["name"])]),_:2},1032,["title","to","active","index"]))),128))]),_:1})]),d("div",ee,[n(I)])])]),_:1})}}};export{ne as default};