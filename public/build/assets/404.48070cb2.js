import{G as u,aN as m,k as d,r as n,o as h,e as p,h as s,t as o,f as c,w as f,i as _,u as x}from"./vendor.451c1a79.js";const g={class:"w-full h-screen"},w={class:"flex items-center justify-center w-full h-full"},y={class:"flex flex-col items-center justify-center"},b={class:"text-primary-500",style:{"font-size":"10rem"}},v={class:"mb-10 text-3xl text-primary-500"},$={setup(k){const e=u();m();const l=d(()=>{if(e.path.indexOf("customer")>-1&&e.params.company)return`/${e.params.company}/customer/dashboard`;if(e.params.catchAll){let a=e.params.catchAll.indexOf("/");return a>-1?`/${e.params.catchAll.substring(a,0)}/customer/dashboard`:"/"}else return"/admin/dashboard"});return(t,a)=>{const r=n("BaseIcon"),i=n("router-link");return h(),p("div",g,[s("div",w,[s("div",y,[s("h1",b,o(t.$t("general.four_zero_four")),1),s("h5",v,o(t.$t("general.you_got_lost")),1),c(i,{class:"flex items-center w-32 h-12 px-3 py-1 text-base font-medium leading-none text-center text-white rounded whitespace-nowrap bg-primary-500 btn-lg hover:text-white",to:x(l)},{default:f(()=>[c(r,{name:"ArrowLeftIcon",class:"mr-2 text-white icon"}),_(" "+o(t.$t("general.go_home")),1)]),_:1},8,["to"])])])])}}};export{$ as default};