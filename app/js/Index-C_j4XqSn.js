import{r as n,o as _,s as h,w as C,c as l,a as e,t as x,u as i,b,F as v,d as k,e as A,v as I,i as S,n as m,f as z,g as c}from"./index-D4hCRDQJ.js";import{_ as M,c as T,p as D}from"./index-DSKuSFHw.js";const H={id:"hero",class:"main-hero hero section bg-transparent first-section pb-2"},B={class:"container position-relative","data-aos":"fade-up","data-aos-delay":"100"},j={class:"row gy-4 align-items-center justify-content-between"},O={class:"col-12 col-lg-6"},P={class:"hero-prompt"},V={class:"input-group p-2 rounded-sm bg-white"},F={class:"form-control form-control-sm fs-13px bg-transparent border-0 ls-sm"},N={class:"col-12 col-lg-5"},R={class:"card rounded-sm ai-card h-100","data-aos":"fade-left","data-aos-delay":"100"},W={class:"py-2 px-3"},E={id:"ai-message-footer",class:"card-footer"},L={class:"input-group bg-transparent"},U=["disabled"],Z={key:0,class:"spinner-border spinner-border-sm text-secondary",role:"status"},$={key:1,src:M},K={__name:"Index",setup(q){let u=n("7nu8ZgCMWgpdSN75bVoMedLckf17Mv4oZ7j1Ce6tpump"),o=n(!1),f=n(0),r=n([{role:"system",content:"Codura is your AI-powered coding assistant, here to help you write, optimize, and debug code effortlessly. Whether you're building from scratch or refining your project, just type your prompt and watch Codura turn your ideas into reality"}]);const d=n(null);let a=n("");_(()=>{f.value=h.getters.stateChatHistory.length,g()}),C(r,()=>{g()});const g=()=>{d.value&&(d.value.scrollTop=d.value.scrollHeight)},y=async()=>{if(!a.value.trim()||o.value)return;o.value=!0,r.value.push({role:"user",content:a.value});const p=r.value.slice(-2).map(s=>({role:s.role,content:s.content})),t=await D(p);t&&(t.success&&(r.value.push({role:"assistant",content:t.respone}),a.value="",w()),o.value=!1)},w=async()=>{const p={key:`chat-${Date.now()}`,title:`Chat ${f.value+1}`,messages:r.value};await h.commit("addChatHistory",p)};return(p,t)=>(c(),l(v,null,[e("section",H,[e("div",B,[e("div",j,[e("div",O,[t[3]||(t[3]=e("div",{class:"hero-text mb-5"},[e("h2",{class:"ls-sm fw-bold text-white fs-50px"},"AI Smart Contract Code Optimizer"),e("p",{class:"mt-3 w-100 text-white fw-normal ls-xs fs-16px hero-desc"},"Boost Security, Efficiency, and Performance of Smart Contracts with Decentralized AI-Powered Insights")],-1)),e("div",P,[e("div",V,[e("div",F,x(i(u)),1),e("a",{onClick:t[0]||(t[0]=b(s=>i(T)(i(u)),["prevent"])),class:"input-group-text btn btn-sm bg-green rounded-sm text-white fs-13px px-3 d-inline-flex align-items-center gap-2"},t[2]||(t[2]=[e("i",{class:"bi bi-copy"},null,-1),e("span",null,"Copy CA",-1)]))])])]),e("div",N,[e("div",R,[e("div",{id:"ai-message-body",ref_key:"chatbox",ref:d,class:"is-prompt card-body text-start px-2 py-3"},[(c(!0),l(v,null,k(i(r),s=>(c(),l("div",{class:m([{"is-me":s.role=="user"},"ai-message-item d-flex"])},[e("div",W,[e("p",{class:m([{"py-2 px-3":s.role=="user"},"m-0 text-white fs-12px ls-xs ws-100 bubble rounded-sm full fw-300"])},x(s.content),3)])],2))),256))],512),e("div",E,[e("form",{onSubmit:b(y,["prevent"])},[e("div",L,[A(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>S(a)?a.value=s:a=s),required:"",class:"form-control form-control-sm fs-12px text-white bg-transparent fw-300",placeholder:"Start Typing your prompt ..."},null,512),[[I,i(a)]]),e("button",{type:"submit",disabled:i(o),class:m([{disabled:i(o)},"btn btn-sm text-white bg-transparent input-group-text"])},[i(o)?(c(),l("span",Z)):(c(),l("img",$))],10,U)])],32)])])])])])]),t[4]||(t[4]=z('<section class="section bg-transparent"><div class="container section-title pb-2 text-start"><h3 class="text-white text-capitalize ls-sm">How it Works?</h3></div><div class="container"><div class="why-list mt-2"><div class="d-flex align-items-start gap-3 mb-2"><i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i><p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Code Submission</strong>: Users submit their smart contract code either by direct input or file upload. </p></div><div class="d-flex align-items-start gap-3 mb-2"><i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i><p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>AI-Powered Analysis</strong> The AI engine performs a comprehensive audit, detecting gas inefficiencies, security risks, and deviations from best practices.</p></div><div class="d-flex align-items-start gap-3 mb-2"><i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i><p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Optimization Insights</strong> The system generates detailed, actionable insights accompanied by AI-suggested code refinements.</p></div><div class="d-flex align-items-start gap-3 mb-2"><i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i><p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Decentralized Review</strong> Optional peer validation allows the development community to verify the AI findings, promoting transparency and trust.</p></div><div class="d-flex align-items-start gap-3 mb-2"><i class="bi bi-check-circle-fill fs-16px lh-normal text-green"></i><p class="text-light fw-normal fs-14px m-0 ls-xs"><strong>Deployment-Ready Output</strong> After implementing the enhancements, the optimized smart contract is exportable and prepared for secure on-chain deployment. </p></div></div></div></section>',1))],64))}};export{K as default};
