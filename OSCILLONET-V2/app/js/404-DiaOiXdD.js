import{k as n,c as o,a as t,t as s,d,p as c,g as i,h as u,u as m,j as _,b as p}from"./index-Cbedevfa.js";const f={class:"col-12 col-lg-8 m-auto"},g={class:"alert-heading"},k={class:"fs-15px"},h={key:0},b={class:"mb-0"},v={__name:"AlertContent",props:{type:{type:String,default:"info"},title:{type:String,default:"Informasi!"},msg:{type:String,default:""},info:{type:String,default:""}},setup(e){return(l,a)=>(n(),o("div",f,[t("div",{class:c([[`alert-${e.type}`],"alert text-start"]),role:"alert"},[t("h5",g,s(e.title),1),t("p",k,s(e.msg),1),e.info?(n(),o("div",h,[a[0]||(a[0]=t("hr",null,null,-1)),t("p",b,s(e.info),1)])):d("",!0)],2)]))}},y={class:"section-content"},x={class:"page-title dark-background bg-transparent"},$={class:"container position-relative"},S={class:"breadcrumbs"},C={id:"starter-section",class:"starter-section section"},N={class:"container section-title aos-init aos-animate","data-aos":"fade-up"},B={__name:"404",setup(e){return(l,a)=>{const r=_("router-link");return n(),o("div",y,[t("div",x,[t("div",$,[a[2]||(a[2]=t("h1",null,"4 0 4",-1)),t("nav",S,[t("ol",null,[t("li",null,[i(r,{to:{name:"home"}},{default:u(()=>a[0]||(a[0]=[p("Home")])),_:1})]),a[1]||(a[1]=t("li",{class:"current"},"404",-1))])])])]),t("section",C,[t("div",N,[i(m(v),{type:"danger",title:"Page Not Found!",msg:"Maaf, kami tidak dapat menemukan halaman yang Anda cari. Halaman tersebut mungkin sudah tidak tersedia atau sedang dalam perbaikan.",info:"Silakan periksa kembali URL atau kembali ke halaman utama."})])])])}}};export{B as default};
