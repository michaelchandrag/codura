import{m as Y,h as d,n as Q,p as A,g as z,a as e,q as x,w as h,x as me,y as R,z as ve,b as k,c,A as C,t as I,B as he,T as fe,C as ge,D as g,r as be,o as _e,E as w,G as N,H as ye,I as xe,F as M,f as S,u,v as V,J as we,K as Ae,L as ke,_ as Ce,M as Be}from"./index-BzEsixov.js";const Fe="/assets/img/share.png";(function(){try{var t=document.createElement("style");t.appendChild(document.createTextNode(".vs-focus-container__focus-redirector,.vs-focus-container__last-focusable{opacity:0;position:absolute}.vs-focus-container__content{outline:none}.vs-modal{font-size:.875em}.vs-modal.is-aligned-top .vs-modal__wrapper{vertical-align:initial}.vs-modal.is-aligned-top.has-footer .vs-modal__body,.vs-modal.has-footer .vs-modal__body{max-height:calc(100vh - 125px)}.vs-modal:not(.has-footer) .vs-modal__body{padding:0 24px 20px}.vs-modal--is-open{overflow:hidden}.vs-modal.is-backdrop-blur{backdrop-filter:blur(3px)}.vs-modal__mask{display:table;position:fixed;z-index:800;top:0;left:0;width:100%;height:100vh;transition:opacity .3s ease;background-color:#33333380}.vs-modal__wrapper{display:table-cell;overflow-x:hidden;text-align:center;vertical-align:middle}.vs-modal__wrapper.has-dummy-scrollbar{overflow-y:scroll}.vs-modal__container{display:inline-block;position:relative;width:530px;max-width:100vw;max-height:100vh;margin:0 auto;padding:0;overflow:hidden;transition:all .3s ease;border-radius:3px;outline:none;background-color:#fff;box-shadow:0 2px 8px #33333354;text-align:initial}.vs-modal__header{display:flex;position:relative;z-index:1;align-items:center;min-height:55px;padding:0 24px}.vs-modal__header-text{display:flex;flex-grow:1;align-items:center;margin:0;font-size:1.125em;font-weight:400}.vs-modal__close-button button{position:absolute;z-index:100;top:20px;right:20px;background:none;border:none;text-align:right;margin:0;padding:0;cursor:pointer}.vs-modal__close-button button img{width:12px;height:12px}.vs-modal__body{max-height:calc(100vh - 55px);padding:16px 24px;overflow-y:auto}.vs-modal__footer{display:flex;align-items:center;justify-content:flex-end;height:70px;padding:0 24px}.vs-modal--size-s>.vs-modal__wrapper>.vs-modal__container{width:320px}.vs-modal--size-l>.vs-modal__wrapper>.vs-modal__container{width:850px}.vs-modal--size-fullscreen>.vs-modal__wrapper>.vs-modal__container{width:100vw;border-radius:0}.vs-modal--size-fullscreen>.vs-modal__wrapper>.vs-modal__container .vs-modal__body{height:100vh;max-height:100vh}.vs-modal--size-auto>.vs-modal__wrapper>.vs-modal__container{width:initial}.vs-modal--transition-fade-enter-from,.vs-modal--transition-fade-leave-active,.vs-modal--transition-slide-up-enter-from,.vs-modal--transition-slide-up-leave-active{opacity:0}.vs-modal--transition-slide-up-enter-from .vs-modal__container,.vs-modal--transition-slide-up-leave-active .vs-modal__container{transform:translateY(20px)}.vs-modal--transition-slide-down-enter-from,.vs-modal--transition-slide-down-leave-active{opacity:0}.vs-modal--transition-slide-down-enter-from .vs-modal__container,.vs-modal--transition-slide-down-leave-active .vs-modal__container{transform:translateY(-20px)}")),document.head.appendChild(t)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();const J=(t,o)=>{const a=t.__vccOpts||t;for(const[m,r]of o)a[m]=r;return a},Oe={name:"VsFocusContainer",props:{containFocus:{type:Boolean,default:!0},focusRedirector:Function,disabled:{type:Boolean,default:!1},tag:{type:String,default:"div"},lazy:{type:Boolean,default:!1}},computed:{renderRedirector(){return this.disabled?!1:this.lazy?this.containFocus:!0}},methods:{focus(){this.$refs.content.focus()},redirectFocus(t,o){if(!this.containFocus){this.$emit("focus-overflow",t,o);return}if(t.stopPropagation(),this.focusRedirector){this.focusRedirector(t,o);return}o.isTabbingForward?this.$refs.content.focus():this.$refs.lastFocusable.focus()}}},Te={ref:"content",class:"vs-focus-container__content",tabindex:"-1"},Me={key:1,ref:"lastFocusable",class:"vs-focus-container__last-focusable",tabindex:"-1"};function $e(t,o,a,m,r,n){return d(),Q(ge(a.tag),{class:"vs-focus-container"},{default:A(()=>[n.renderRedirector?(d(),c("span",{key:0,class:"vs-focus-container__focus-redirector",tabindex:"0",onFocus:o[0]||(o[0]=p=>n.redirectFocus(p,{isTabbingForward:!1}))},null,32)):k("",!0),e("div",Te,[C(t.$slots,"default")],512),!a.disabled&&a.containFocus?(d(),c("span",Me,null,512)):k("",!0),n.renderRedirector?(d(),c("span",{key:2,class:"vs-focus-container__focus-redirector",tabindex:"0",onFocus:o[1]||(o[1]=p=>n.redirectFocus(p,{isTabbingForward:!0}))},null,32)):k("",!0)]),_:3})}const He=J(Oe,[["render",$e]]),G=/^\s+|\s+$/g,P=/\s+/g;function Ee(t){return t&&typeof t=="object"&&typeof t.nodeName=="string"&&t.nodeType===1}function W(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:Ee(t)}function j(t){return W(t)?(t.getAttribute("class")||"").replace(G,"").split(P):[]}function $(t){return typeof t=="string"?t.replace(G,"").split(P):t}function q(t,o){W(t)&&t.setAttribute("class",$(o).join(" "))}function Z(t,o){const a=j(t);return $(o).forEach(m=>{const r=a.indexOf(m);r!==-1&&a.splice(r,1)}),q(t,a),a}function Se(t,o){const a=Z(t,o),m=$(o);return a.push(...m),q(t,a),a}function U(t,o){const a=j(t);return $(o).every(m=>a.indexOf(m)!==-1)}const K={add:Se,remove:Z,contains:U,has:U,set:q,get:j},ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAJeTmmCIcbPbyAQAAAOtJREFUSMeF1ksKwjAURuE6cF50BY4cC4oLEHQquAVXYIVs3wiFn3C4nA76SG+/PpLc2+l9fk7lsr3dp0c71QH79p2ubZmr85t+sgshCHTh1UIQaJe+DkFgmddNBZyyLYGRIAACAAgA2SeAAwI5OowBu/WaEJ95AI4BQBD4N6xEgFyQFsSTYDgJAmgkkFYCIACAAABiAEgAABGgIAIURICCCFAQAEAQYIDewh9SX9M/lH5q7yztbh8wOuR80Oqw94mjU88nr05/TyCagjyJaRr0RKqp2JO5lgMvKFqStKhpWbTC6qVZi7v+HvwAcK2oz9BduqwAAAAASUVORK5CYII=",Re={name:"VsModal",components:{VsFocusContainer:He},props:{title:{type:String,default:"Modal title"},alignTop:{type:Boolean,default:!1},alignTopMargin:{type:Number,default:60},size:{type:String,default:"m"},role:{type:String,default:"dialog"},transition:{type:String,default:"slide-up"},removeHeader:{type:Boolean,default:!1},removeCloseButton:{type:Boolean,default:!1},preventShift:{type:Boolean,default:!1},dismissible:{type:Boolean,default:!0},dismissOn:{type:String,default:"backdrop esc close-button"},backdropBlur:{type:Boolean,default:!1}},data(){return{isOpen:!1,lastFocusedElement:null}},computed:{classes(){return[`vs-modal--size-${this.size}`,{"has-footer":this.hasFooter},{"is-open":this.isOpen},{"is-aligned-top":this.alignTop},{"is-backdrop-blur":this.backdropBlur}]},alignTopStyle(){return this.alignTop?{"padding-top":`${this.alignTopMargin}px`}:null},toggleTransition(){return`vs-modal--transition-${this.transition}`},hasFooter(){return!!this.$slots.footer},dismissOnBackdrop(){return this.dismissOn.indexOf("backdrop")>-1},dismissOnCloseButton(){return this.dismissOn.indexOf("close-button")>-1},dismissOnEsc(){return this.dismissOn.indexOf("esc")>-1}},watch:{isOpen(){this.$nextTick(()=>{this[this.isOpen?"onOpen":"onClose"]()})}},beforeDestroy(){this.isOpen&&this.returnFocus()},methods:{open(){this.isOpen=!0},close(){!this.dismissible||(this.isOpen=!1)},redirectFocus(){this.$refs.focusContainer.focus()},returnFocus(){this.lastFocusedElement&&this.lastFocusedElement.focus()},onBackdropClick(){this.dismissOnBackdrop?this.close():this.redirectFocus()},onEsc(){this.dismissOnEsc&&this.close()},onOpen(){this.lastFocusedElement=document.activeElement,this.$refs.focusContainer.focus(),K.add(document.body,"vs-modal--is-open"),this.incrementOpenModalCount(),this.$emit("open")},onClose(){this.$emit("close"),this.returnFocus()},onEnter(){this.$emit("reveal")},onLeave(){this.$emit("hide"),this.decrementOpenModalCount()===0&&K.remove(document.body,"vs-modal--is-open")},getOpenModalCount(){const t=document.body.getAttribute("data-open-modals");return t===void 0?0:Number(t)},setOpenModalCount(t){const o=Math.max(0,t);return o===0?document.body.removeAttribute("data-open-modals"):document.body.setAttribute("data-open-modals",o),o},incrementOpenModalCount(){return this.setOpenModalCount(this.getOpenModalCount()+1)},decrementOpenModalCount(){return this.setOpenModalCount(this.getOpenModalCount()-1)}}},Ie=["role"],je={key:0,class:"vs-modal__header"},qe={class:"vs-modal__header-text"},De={class:"vs-modal__close-button"},Le=e("img",{src:ze,alt:"close"},null,-1),Ne=[Le],Ve={class:"vs-modal__body"},Ue={key:1,class:"vs-modal__footer"};function Ke(t,o,a,m,r,n){const p=Y("vs-focus-container");return d(),Q(fe,{name:n.toggleTransition,onAfterEnter:n.onEnter,onAfterLeave:n.onLeave},{default:A(()=>[z(e("div",{class:x(["vs-modal vs-modal__mask",n.classes]),role:a.role,onClick:o[2]||(o[2]=h((...v)=>n.onBackdropClick&&n.onBackdropClick(...v),["self"]))},[e("div",{class:x(["vs-modal__wrapper",{"has-dummy-scrollbar":a.preventShift}]),style:me(n.alignTopStyle),onClick:o[1]||(o[1]=h((...v)=>n.onBackdropClick&&n.onBackdropClick(...v),["self"]))},[R(p,{ref:"focusContainer",class:"vs-modal__container",tabindex:"-1",onKeydown:ve(h(n.onEsc,["stop"]),["native","esc"])},{default:A(()=>[a.removeHeader?k("",!0):(d(),c("div",je,[C(t.$slots,"header",{},()=>[e("h2",qe,I(a.title),1)])])),e("div",De,[C(t.$slots,"close",{},()=>[n.dismissOnCloseButton&&!a.removeCloseButton&&a.dismissible?(d(),c("button",{key:0,onClick:o[0]||(o[0]=(...v)=>n.close&&n.close(...v))},Ne)):k("",!0)])]),e("div",Ve,[C(t.$slots,"default")]),n.hasFooter?(d(),c("div",Ue,[C(t.$slots,"footer")])):k("",!0)]),_:3},8,["onKeydown"])],6)],10,Ie),[[he,r.isOpen]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])}const Ye=J(Re,[["render",Ke]]),Qe={class:"section bg-dark ai-section section-content p-0"},Je={class:"container-ai px-3"},Ge={class:"row gy-4 justify-content-center content-ai"},Pe={class:"ai-history-header mb-2 pt-2 d-flex align-items-center justify-content-center"},We={class:"card border-0 ai-history-content"},Ze={class:"ai-content-header border-0 card-header bg-transparent py-3 d-flex justify-content-between align-items-center"},Xe={class:"d-inline-flex gap-2"},et={id:"ai-history-body",class:"card-body text-start pt-0"},tt=["onClick"],st={class:"m-0 text-white fs-12px"},ot={class:"d-inline-flex gap-1 ws-25"},nt=["onClick"],at=["onClick"],it={class:"col-lg-9 ai-message-sidebar py-3 px-2"},lt={class:"card h-100 card-conversation border-0 bg-white rounded-md"},rt={class:"ai-content-header card-header bg-white py-3 d-flex justify-content-between align-items-center rounded-md shadow border-0 bottom-shadow"},dt={class:"d-inline-flex gap-3"},ct={key:0},ut={class:"col-lg-8 m-auto"},pt={class:"row"},mt={class:"col-lg-6"},vt={class:"card bg-white mb-3"},ht=["onClick"],ft={class:"card-body text-center p-3"},gt={class:"m-0 fs-12px text-dark"},bt=["innerHTML"],_t={id:"ai-message-footer",class:"card-footer py-3 border-0"},yt={class:"col-lg-11 m-auto"},xt={class:"input-group input-group-lg rounded-sm py-1 shadow border"},wt={class:"input-group-text border-0 bg-transparent"},At=["disabled"],kt={class:"input-group-text border-0 bg-transparent"},Ct=["disabled"],Bt={key:0,class:"spinner-border spinner-border-sm text-secondary",role:"status"},Ft={key:1,class:"bi bi-arrow-up"},Ot={class:"modal-body mt-2"},Mt={__name:"Index",setup(t){const o=Ae(),a=ke(),m=g(o.query.text);let r=g([]),n=g([]),p=g(-1),v=be({index:null,title:""}),H=g(null);const B=g(null);let _=g(""),y=g(!1);const X=g(50);g(!1),_e(async()=>{const i=w.getters.stateChatHistory;if(i&&i.length)n.value=i;else if(N.length){let s=[];N.forEach(async(b,l)=>{const f={key:`chat-default-${Date.now()}`,title:b,messages:[]};s.push(f),await w.commit("addChatHistory",f)}),n.value=s}m.value&&(_.value=m.value,await E()),ee(),F()});const ee=()=>{Object.keys(o.query).length>0&&a.replace({path:o.path})},F=()=>{ye(()=>{B.value&&(B.value.scrollTop=B.value.scrollHeight)})},te=async()=>{const i={key:`chat-${Date.now()}`,title:`Chat ${n.value.length+1}`,messages:[]};await w.commit("addChatHistory",i),p.value=n.value.length},se=async i=>{_.value=i,await E()},E=async()=>{if(!_.value.trim()||y.value)return;y.value=!0,r.value.push({role:"user",content:_.value}),F();const i=r.value.slice(-1).map(b=>({role:b.role,content:b.content})),s=await xe(i);s&&(s.success&&(_.value="",await oe({role:"assistant",content:s.respone})),y.value=!1)},oe=async i=>{const s=r.value.length;r.value.push({...i,content:""}),F(),await ne(i,s),await ae()};async function ne(i,s){const b=i.content;r.value[s].content="";for(let l=0;l<b.length;l++)r.value[s].content+=b[l],await new Promise(f=>setTimeout(f,X.value))}const ae=async()=>{if(p.value==-1){const i={key:`chat-${Date.now()}`,title:`Chat ${n.value.length+1}`,messages:r.value};await w.commit("addChatHistory",i),p.value=n.value.length}else ie()},ie=async()=>{await w.commit("updateChatMessageHistory",{key:p.value,messages:r.value})},D=async i=>{p.value=i,r.value=n.value[`${p.value}`].messages,O.value=!1,F()},le=async i=>{v.index=i,v.title=n.value[i].title,re()},re=i=>{H.value.open()},de=()=>{H.value.close()},ce=async()=>{await w.commit("updateChatTitleHistory",{key:v.index,title:v.title}),de()},ue=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/```(.*?)\n([\s\S]*?)```/g,(f,T,pe)=>`<pre><code class="language-${T}">${pe.trim()}</code></pre>`).replace(/`([^`]+)`/g,'<code class="attribute">$1</code>').replace(/\n/g,"<br>"),O=g(!1);function L(){O.value=!O.value}return(i,s)=>{const b=Y("router-link");return d(),c(M,null,[e("section",Qe,[e("div",Je,[e("div",Ge,[e("div",{class:x(["col-lg-3 ai-history-sidebar p-0",{"is-show":O.value}])},[e("div",Pe,[R(b,{class:"bg-dark rounded-sm p-1",to:{name:"home"}},{default:A(()=>s[4]||(s[4]=[e("img",{class:"lg",src:Ce},null,-1)])),_:1})]),e("div",We,[e("div",Ze,[e("div",Xe,[e("a",{onClick:s[0]||(s[0]=h(l=>{L()},["prevent"])),class:"d-xl-none d-lg-none btn btn-sm py-0 px-2 text-white"},"Close")])]),e("div",et,[(d(!0),c(M,null,S(u(n),(l,f)=>(d(),c("div",{key:l.key,class:x([{"bg-white":u(p)==f},"ai-history-item d-flex mb-1 align-items-center justify-content-between py-1 px-0 rounded-sm"])},[e("a",{href:"#",onClick:h(T=>D(f),["prevent"]),class:"ps-2 ws-75"},[e("p",st,I(l.title),1)],8,tt),e("div",ot,[e("a",{href:"#",onClick:h(T=>le(f),["prevent"]),class:"btn btn-sm"},s[5]||(s[5]=[e("i",{class:"text-white bi bi-pencil"},null,-1)]),8,nt),e("a",{onClick:h(T=>D(f),["prevent"]),href:"#",class:"btn btn-sm"},s[6]||(s[6]=[e("i",{class:"text-white bi bi-chevron-right"},null,-1)]),8,at)])],2))),128))])])],2),e("div",it,[e("div",lt,[e("div",rt,[e("a",{onClick:h(te,["prevent"]),class:"btn btn-sm rounded text-dark border px-3 gap-1 d-inline-flex align-items-center fs-16px lh-normal"},s[7]||(s[7]=[e("i",{class:"bi bi-plus fs-18px"},null,-1),e("span",{class:"fs-12px"},"New Chat",-1)])),e("div",dt,[s[8]||(s[8]=e("a",{class:"btn btn-sm py-1 px-1 text-dark fs-11px border"},[e("img",{src:Fe})],-1)),e("a",{onClick:s[1]||(s[1]=h(l=>{L()},["prevent"])),class:"d-xl-none d-lg-none btn btn-sm py-0 px-2 text-dark fs-11px"},"History")])]),e("div",{id:"ai-message-body",ref_key:"chatbox",ref:B,class:"card-body text-start"},[u(r).length?(d(!0),c(M,{key:1},S(u(r),l=>(d(),c("div",{class:x([{"is-me":l.role=="user"},"ai-message-item d-flex mb-1"])},[e("p",{class:"px-3 m-0 text-dark fs-12px bubble py-2 rounded-sm",innerHTML:ue(l.content)},null,8,bt)],2))),256)):(d(),c("div",ct,[e("div",ut,[s[9]||(s[9]=e("h6",{class:"text-center text-dark mb-3 p-2"},"What can I help with?",-1)),e("div",pt,[(d(!0),c(M,null,S(u(Be),l=>(d(),c("div",mt,[e("div",vt,[e("a",{href:"#",onClick:h(f=>se(l),["prevent"])},[e("div",ft,[e("p",gt,I(l),1)])],8,ht)])]))),256))])])]))],512),e("div",_t,[e("div",yt,[e("form",{onSubmit:h(E,["prevent"])},[e("div",xt,[e("div",wt,[e("a",{disabled:u(y),class:x([{disabled:u(y)},"text-dark"])},s[10]||(s[10]=[e("i",{class:"bi bi-plus-circle"},null,-1)]),10,At)]),z(e("input",{id:"ai-message-prompt","onUpdate:modelValue":s[2]||(s[2]=l=>we(_)?_.value=l:_=l),required:"",class:"form-control form-control-sm fs-12px text-dark ps-0 bg-transparent",placeholder:"Start typing your prompt ..."},null,512),[[V,u(_)]]),e("div",kt,[e("button",{id:"ai-send-message",type:"submit",disabled:u(y),class:x([{disabled:u(y)},"text-white btn btn-sm bg-dark ai-action-message rounded-sm"])},[u(y)?(d(),c("span",Bt)):(d(),c("i",Ft))],10,Ct)])])],32)])])])])])])]),R(u(Ye),{size:"s",ref_key:"modal_change_title",ref:H},{header:A(()=>s[11]||(s[11]=[e("h6",{class:"m-0"},"Ubah Riwayat",-1)])),default:A(()=>[e("div",Ot,[e("form",{onSubmit:h(ce,["prevent"])},[z(e("input",{class:"form-control",placeholder:"Input title","onUpdate:modelValue":s[3]||(s[3]=l=>u(v).title=l)},null,512),[[V,u(v).title]]),s[12]||(s[12]=e("div",{class:"d-flex justify-content-end mt-3"},[e("button",{type:"submit",class:"btn btn-sm btn-primary"},"Save Change")],-1))],32)])]),_:1},512)],64)}}};export{Mt as default};
