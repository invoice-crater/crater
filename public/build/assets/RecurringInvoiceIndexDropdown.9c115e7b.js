import{g as b,u as E,C as k,am as C,r as c,o as a,s as n,w as o,y as t,b as r,v as f,x as I,A as v}from"./vendor.d8bc4b48.js";import{B as x,u as S,i as V,d as $,e as y}from"./main.90d606cc.js";const U={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:()=>{}}},setup(l){const _=l,d=x(),w=S(),B=V(),m=$(),{t:s}=b(),h=E();k(),C("utils");async function D(i=null){B.openDialog({title:s("general.are_you_sure"),message:s("invoices.confirm_delete"),yesLabel:s("general.ok"),noLabel:s("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async u=>{u&&await d.deleteMultipleRecurringInvoices(i).then(e=>{e.data.success?(_.table&&_.table.refresh(),d.$patch(g=>{g.selectedRecurringInvoices=[],g.selectAllField=!1}),w.showNotification({type:"success",message:s("recurring_invoices.deleted_message",2)})):e.data.error&&w.showNotification({type:"error",message:e.data.message})})})}return(i,u)=>{const e=c("BaseIcon"),g=c("BaseButton"),p=c("BaseDropdownItem"),R=c("router-link"),N=c("BaseDropdown");return a(),n(N,{"content-loading":t(d).isFetchingViewData},{activator:o(()=>[t(h).name==="recurring-invoices.view"?(a(),n(g,{key:0,variant:"primary"},{default:o(()=>[r(e,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(a(),n(e,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:o(()=>[t(m).hasAbilities(t(y).EDIT_RECURRING_INVOICE)?(a(),n(R,{key:0,to:`/admin/recurring-invoices/${l.row.id}/edit`},{default:o(()=>[r(p,null,{default:o(()=>[r(e,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),f(" "+I(i.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):v("",!0),t(h).name!=="recurring-invoices.view"&&t(m).hasAbilities(t(y).VIEW_RECURRING_INVOICE)?(a(),n(R,{key:1,to:`recurring-invoices/${l.row.id}/view`},{default:o(()=>[r(p,null,{default:o(()=>[r(e,{name:"EyeIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),f(" "+I(i.$t("general.view")),1)]),_:1})]),_:1},8,["to"])):v("",!0),t(m).hasAbilities(t(y).DELETE_RECURRING_INVOICE)?(a(),n(p,{key:2,onClick:u[0]||(u[0]=A=>D(l.row.id))},{default:o(()=>[r(e,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),f(" "+I(i.$t("general.delete")),1)]),_:1})):v("",!0)]),_:1},8,["content-loading"])}}};export{U as _};