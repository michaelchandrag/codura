import{g as n,c as o,a as t,t as s,q as d,n as c,b as i,d as m,u,F as p,f as _,h as f}from"./index-txs44NBA.js";const g={class:"col-12 col-lg-8 m-auto"},k={class:"alert-heading"},h={class:"fs-15px"},b={key:0},y={class:"mb-0"},v={__name:"AlertContent",props:{type:{type:String,default:"info"},title:{type:String,default:"Informasi!"},msg:{type:String,default:""},info:{type:String,default:""}},setup(e){return(l,a)=>(n(),o("div",g,[t("div",{class:c([[`alert-${e.type}`],"alert text-start"]),role:"alert"},[t("h5",k,s(e.title),1),t("p",h,s(e.msg),1),e.info?(n(),o("div",b,[a[0]||(a[0]=t("hr",null,null,-1)),t("p",y,s(e.info),1)])):d("",!0)],2)]))}},x={class:"page-title dark-background bg-transparent"},$={class:"container position-relative"},S={class:"breadcrumbs"},C={id:"starter-section",class:"starter-section section"},N={class:"container section-title aos-init aos-animate","data-aos":"fade-up"},B={__name:"404",setup(e){return(l,a)=>{const r=_("router-link");return n(),o(p,null,[t("div",x,[t("div",$,[a[2]||(a[2]=t("h1",{class:"text-app"},"4 0 4",-1)),t("nav",S,[t("ol",null,[t("li",null,[i(r,{to:{name:"home"}},{default:m(()=>a[0]||(a[0]=[f("Home")])),_:1})]),a[1]||(a[1]=t("li",{class:"current"},"404",-1))])])])]),t("section",C,[t("div",N,[i(u(v),{type:"danger",title:"Page Not Found!",msg:"Maaf, kami tidak dapat menemukan halaman yang Anda cari. Halaman tersebut mungkin sudah tidak tersedia atau sedang dalam perbaikan.",info:"Silakan periksa kembali URL atau kembali ke halaman utama."})])])],64)}}};export{B as default};
