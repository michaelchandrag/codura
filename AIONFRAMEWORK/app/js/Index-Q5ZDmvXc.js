import{h as fe,e as d,i as K,j as C,l as z,a as e,n as A,w as m,m as he,q as Y,s as ge,b as w,c,v as k,t as R,x as be,T as ye,y as _e,z as g,A as xe,o as Ae,B as x,C as N,D as we,E as ke,u,F as T,r as S,G as V,H as Ce,I as Be,J as Fe,K as Oe}from"./index-CJpxs8fa.js";const Te="/assets/img/bookmark.png",$e="/assets/img/share.png",Me="/assets/img/attach-circle.png",He="/assets/img/send-2.png";(function(){try{var s=document.createElement("style");s.appendChild(document.createTextNode(".vs-focus-container__focus-redirector,.vs-focus-container__last-focusable{opacity:0;position:absolute}.vs-focus-container__content{outline:none}.vs-modal{font-size:.875em}.vs-modal.is-aligned-top .vs-modal__wrapper{vertical-align:initial}.vs-modal.is-aligned-top.has-footer .vs-modal__body,.vs-modal.has-footer .vs-modal__body{max-height:calc(100vh - 125px)}.vs-modal:not(.has-footer) .vs-modal__body{padding:0 24px 20px}.vs-modal--is-open{overflow:hidden}.vs-modal.is-backdrop-blur{backdrop-filter:blur(3px)}.vs-modal__mask{display:table;position:fixed;z-index:800;top:0;left:0;width:100%;height:100vh;transition:opacity .3s ease;background-color:#33333380}.vs-modal__wrapper{display:table-cell;overflow-x:hidden;text-align:center;vertical-align:middle}.vs-modal__wrapper.has-dummy-scrollbar{overflow-y:scroll}.vs-modal__container{display:inline-block;position:relative;width:530px;max-width:100vw;max-height:100vh;margin:0 auto;padding:0;overflow:hidden;transition:all .3s ease;border-radius:3px;outline:none;background-color:#fff;box-shadow:0 2px 8px #33333354;text-align:initial}.vs-modal__header{display:flex;position:relative;z-index:1;align-items:center;min-height:55px;padding:0 24px}.vs-modal__header-text{display:flex;flex-grow:1;align-items:center;margin:0;font-size:1.125em;font-weight:400}.vs-modal__close-button button{position:absolute;z-index:100;top:20px;right:20px;background:none;border:none;text-align:right;margin:0;padding:0;cursor:pointer}.vs-modal__close-button button img{width:12px;height:12px}.vs-modal__body{max-height:calc(100vh - 55px);padding:16px 24px;overflow-y:auto}.vs-modal__footer{display:flex;align-items:center;justify-content:flex-end;height:70px;padding:0 24px}.vs-modal--size-s>.vs-modal__wrapper>.vs-modal__container{width:320px}.vs-modal--size-l>.vs-modal__wrapper>.vs-modal__container{width:850px}.vs-modal--size-fullscreen>.vs-modal__wrapper>.vs-modal__container{width:100vw;border-radius:0}.vs-modal--size-fullscreen>.vs-modal__wrapper>.vs-modal__container .vs-modal__body{height:100vh;max-height:100vh}.vs-modal--size-auto>.vs-modal__wrapper>.vs-modal__container{width:initial}.vs-modal--transition-fade-enter-from,.vs-modal--transition-fade-leave-active,.vs-modal--transition-slide-up-enter-from,.vs-modal--transition-slide-up-leave-active{opacity:0}.vs-modal--transition-slide-up-enter-from .vs-modal__container,.vs-modal--transition-slide-up-leave-active .vs-modal__container{transform:translateY(20px)}.vs-modal--transition-slide-down-enter-from,.vs-modal--transition-slide-down-leave-active{opacity:0}.vs-modal--transition-slide-down-enter-from .vs-modal__container,.vs-modal--transition-slide-down-leave-active .vs-modal__container{transform:translateY(-20px)}")),document.head.appendChild(s)}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();const Q=(s,o)=>{const a=s.__vccOpts||s;for(const[v,r]of o)a[v]=r;return a},Ee={name:"VsFocusContainer",props:{containFocus:{type:Boolean,default:!0},focusRedirector:Function,disabled:{type:Boolean,default:!1},tag:{type:String,default:"div"},lazy:{type:Boolean,default:!1}},computed:{renderRedirector(){return this.disabled?!1:this.lazy?this.containFocus:!0}},methods:{focus(){this.$refs.content.focus()},redirectFocus(s,o){if(!this.containFocus){this.$emit("focus-overflow",s,o);return}if(s.stopPropagation(),this.focusRedirector){this.focusRedirector(s,o);return}o.isTabbingForward?this.$refs.content.focus():this.$refs.lastFocusable.focus()}}},Se={ref:"content",class:"vs-focus-container__content",tabindex:"-1"},ze={key:1,ref:"lastFocusable",class:"vs-focus-container__last-focusable",tabindex:"-1"};function Re(s,o,a,v,r,n){return d(),K(_e(a.tag),{class:"vs-focus-container"},{default:C(()=>[n.renderRedirector?(d(),c("span",{key:0,class:"vs-focus-container__focus-redirector",tabindex:"0",onFocus:o[0]||(o[0]=p=>n.redirectFocus(p,{isTabbingForward:!1}))},null,32)):w("",!0),e("div",Se,[k(s.$slots,"default")],512),!a.disabled&&a.containFocus?(d(),c("span",ze,null,512)):w("",!0),n.renderRedirector?(d(),c("span",{key:2,class:"vs-focus-container__focus-redirector",tabindex:"0",onFocus:o[1]||(o[1]=p=>n.redirectFocus(p,{isTabbingForward:!0}))},null,32)):w("",!0)]),_:3})}const Ie=Q(Ee,[["render",Re]]),J=/^\s+|\s+$/g,G=/\s+/g;function je(s){return s&&typeof s=="object"&&typeof s.nodeName=="string"&&s.nodeType===1}function P(s){return typeof HTMLElement=="object"?s instanceof HTMLElement:je(s)}function I(s){return P(s)?(s.getAttribute("class")||"").replace(J,"").split(G):[]}function $(s){return typeof s=="string"?s.replace(J,"").split(G):s}function j(s,o){P(s)&&s.setAttribute("class",$(o).join(" "))}function W(s,o){const a=I(s);return $(o).forEach(v=>{const r=a.indexOf(v);r!==-1&&a.splice(r,1)}),j(s,a),a}function qe(s,o){const a=W(s,o),v=$(o);return a.push(...v),j(s,a),a}function L(s,o){const a=I(s);return $(o).every(v=>a.indexOf(v)!==-1)}const U={add:qe,remove:W,contains:L,has:L,set:j,get:I},De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAJeTmmCIcbPbyAQAAAOtJREFUSMeF1ksKwjAURuE6cF50BY4cC4oLEHQquAVXYIVs3wiFn3C4nA76SG+/PpLc2+l9fk7lsr3dp0c71QH79p2ubZmr85t+sgshCHTh1UIQaJe+DkFgmddNBZyyLYGRIAACAAgA2SeAAwI5OowBu/WaEJ95AI4BQBD4N6xEgFyQFsSTYDgJAmgkkFYCIACAAABiAEgAABGgIAIURICCCFAQAEAQYIDewh9SX9M/lH5q7yztbh8wOuR80Oqw94mjU88nr05/TyCagjyJaRr0RKqp2JO5lgMvKFqStKhpWbTC6qVZi7v+HvwAcK2oz9BduqwAAAAASUVORK5CYII=",Ne={name:"VsModal",components:{VsFocusContainer:Ie},props:{title:{type:String,default:"Modal title"},alignTop:{type:Boolean,default:!1},alignTopMargin:{type:Number,default:60},size:{type:String,default:"m"},role:{type:String,default:"dialog"},transition:{type:String,default:"slide-up"},removeHeader:{type:Boolean,default:!1},removeCloseButton:{type:Boolean,default:!1},preventShift:{type:Boolean,default:!1},dismissible:{type:Boolean,default:!0},dismissOn:{type:String,default:"backdrop esc close-button"},backdropBlur:{type:Boolean,default:!1}},data(){return{isOpen:!1,lastFocusedElement:null}},computed:{classes(){return[`vs-modal--size-${this.size}`,{"has-footer":this.hasFooter},{"is-open":this.isOpen},{"is-aligned-top":this.alignTop},{"is-backdrop-blur":this.backdropBlur}]},alignTopStyle(){return this.alignTop?{"padding-top":`${this.alignTopMargin}px`}:null},toggleTransition(){return`vs-modal--transition-${this.transition}`},hasFooter(){return!!this.$slots.footer},dismissOnBackdrop(){return this.dismissOn.indexOf("backdrop")>-1},dismissOnCloseButton(){return this.dismissOn.indexOf("close-button")>-1},dismissOnEsc(){return this.dismissOn.indexOf("esc")>-1}},watch:{isOpen(){this.$nextTick(()=>{this[this.isOpen?"onOpen":"onClose"]()})}},beforeDestroy(){this.isOpen&&this.returnFocus()},methods:{open(){this.isOpen=!0},close(){!this.dismissible||(this.isOpen=!1)},redirectFocus(){this.$refs.focusContainer.focus()},returnFocus(){this.lastFocusedElement&&this.lastFocusedElement.focus()},onBackdropClick(){this.dismissOnBackdrop?this.close():this.redirectFocus()},onEsc(){this.dismissOnEsc&&this.close()},onOpen(){this.lastFocusedElement=document.activeElement,this.$refs.focusContainer.focus(),U.add(document.body,"vs-modal--is-open"),this.incrementOpenModalCount(),this.$emit("open")},onClose(){this.$emit("close"),this.returnFocus()},onEnter(){this.$emit("reveal")},onLeave(){this.$emit("hide"),this.decrementOpenModalCount()===0&&U.remove(document.body,"vs-modal--is-open")},getOpenModalCount(){const s=document.body.getAttribute("data-open-modals");return s===void 0?0:Number(s)},setOpenModalCount(s){const o=Math.max(0,s);return o===0?document.body.removeAttribute("data-open-modals"):document.body.setAttribute("data-open-modals",o),o},incrementOpenModalCount(){return this.setOpenModalCount(this.getOpenModalCount()+1)},decrementOpenModalCount(){return this.setOpenModalCount(this.getOpenModalCount()-1)}}},Ve=["role"],Le={key:0,class:"vs-modal__header"},Ue={class:"vs-modal__header-text"},Ke={class:"vs-modal__close-button"},Ye=e("img",{src:De,alt:"close"},null,-1),Qe=[Ye],Je={class:"vs-modal__body"},Ge={key:1,class:"vs-modal__footer"};function Pe(s,o,a,v,r,n){const p=fe("vs-focus-container");return d(),K(ye,{name:n.toggleTransition,onAfterEnter:n.onEnter,onAfterLeave:n.onLeave},{default:C(()=>[z(e("div",{class:A(["vs-modal vs-modal__mask",n.classes]),role:a.role,onClick:o[2]||(o[2]=m((...f)=>n.onBackdropClick&&n.onBackdropClick(...f),["self"]))},[e("div",{class:A(["vs-modal__wrapper",{"has-dummy-scrollbar":a.preventShift}]),style:he(n.alignTopStyle),onClick:o[1]||(o[1]=m((...f)=>n.onBackdropClick&&n.onBackdropClick(...f),["self"]))},[Y(p,{ref:"focusContainer",class:"vs-modal__container",tabindex:"-1",onKeydown:ge(m(n.onEsc,["stop"]),["native","esc"])},{default:C(()=>[a.removeHeader?w("",!0):(d(),c("div",Le,[k(s.$slots,"header",{},()=>[e("h2",Ue,R(a.title),1)])])),e("div",Ke,[k(s.$slots,"close",{},()=>[n.dismissOnCloseButton&&!a.removeCloseButton&&a.dismissible?(d(),c("button",{key:0,onClick:o[0]||(o[0]=(...f)=>n.close&&n.close(...f))},Qe)):w("",!0)])]),e("div",Je,[k(s.$slots,"default")]),n.hasFooter?(d(),c("div",Ge,[k(s.$slots,"footer")])):w("",!0)]),_:3},8,["onKeydown"])],6)],10,Ve),[[be,r.isOpen]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])}const We=Q(Ne,[["render",Pe]]),Ze={class:"section bg-transparent ai-section section-content p-0"},Xe={class:"container-ai px-3"},et={class:"row gy-4 justify-content-center content-ai"},tt={class:"ai-history-header mb-2 d-flex align-items-center justify-content-between px-4 pt-2"},st={class:"card border-0 ai-history-content"},ot={key:0,class:"ai-search p-3"},nt={class:"ai-content-header border-0 card-header bg-transparent py-3 d-flex justify-content-between align-items-center"},at={class:"d-inline-flex gap-2"},it={id:"ai-history-body",class:"card-body text-start pt-0"},lt=["onClick"],rt={class:"m-0 text-dark fs-12px"},dt={class:"d-inline-flex gap-1 ws-25"},ct=["onClick"],ut=["onClick"],pt={class:"col-lg-9 ai-message-sidebar p-0"},mt={class:"card h-100 card-conversation border-0"},vt={class:"ai-content-header card-header bg-transparent py-3 d-flex justify-content-between align-items-center border-light"},ft={class:"d-inline-flex gap-3"},ht={key:0},gt={class:"col-lg-8 m-auto"},bt={class:"row"},yt={class:"col-lg-6"},_t={class:"card bg-white mb-3"},xt=["onClick"],At={class:"card-body text-center p-3"},wt={class:"m-0 fs-12px text-dark"},kt=["innerHTML"],Ct={id:"ai-message-footer",class:"card-footer py-3 border-0"},Bt={class:"col-lg-10 m-auto"},Ft={class:"input-group input-group-lg rounded-md py-2 shadow"},Ot={class:"input-group-text border-0 bg-transparent"},Tt=["disabled"],$t={class:"input-group-text border-0 bg-transparent"},Mt=["disabled"],Ht={key:0,class:"spinner-border spinner-border-sm text-secondary",role:"status"},Et={key:1,src:He},St={class:"modal-body mt-2"},Rt={__name:"Index",setup(s){const o=Be(),a=Fe(),v=g(o.query.text);let r=g([]),n=g([]),p=g(-1),f=xe({index:null,title:""}),M=g(null);const B=g(null);let b=g(""),y=g(!1);const Z=g(50);let H=g(!1);Ae(async()=>{const i=x.getters.stateChatHistory;if(i&&i.length)n.value=i;else if(N.length){let t=[];N.forEach(async(l,h)=>{const _={key:`chat-default-${Date.now()}`,title:l,messages:[]};t.push(_),await x.commit("addChatHistory",_)}),n.value=t}v.value&&(b.value=v.value,await E()),X(),F()});const X=()=>{Object.keys(o.query).length>0&&a.replace({path:o.path})},F=()=>{we(()=>{B.value&&(B.value.scrollTop=B.value.scrollHeight)})};function ee(){H.value=!H.value}const te=async()=>{const i={key:`chat-${Date.now()}`,title:`Chat ${n.value.length+1}`,messages:[]};await x.commit("addChatHistory",i),p.value=n.value.length},se=async i=>{b.value=i,await E()},E=async()=>{if(!b.value.trim()||y.value)return;y.value=!0,r.value.push({role:"user",content:b.value}),F();const i=r.value.slice(-1).map(l=>({role:l.role,content:l.content})),t=await ke(i);t&&(t.success&&(b.value="",await oe({role:"assistant",content:t.respone})),y.value=!1)},oe=async i=>{const t=r.value.length;r.value.push({...i,content:""}),F(),await ne(i,t),await ae()};async function ne(i,t){const l=i.content;r.value[t].content="";for(let h=0;h<l.length;h++)r.value[t].content+=l[h],await new Promise(_=>setTimeout(_,Z.value))}const ae=async()=>{if(p.value==-1){const i={key:`chat-${Date.now()}`,title:`Chat ${n.value.length+1}`,messages:r.value};await x.commit("addChatHistory",i),p.value=n.value.length}else ie()},ie=async()=>{await x.commit("updateChatMessageHistory",{key:p.value,messages:r.value})},q=async i=>{p.value=i,r.value=n.value[`${p.value}`].messages,O.value=!1,F()},le=async i=>{f.index=i,f.title=n.value[i].title,re()},re=i=>{M.value.open()},de=()=>{M.value.close()},ce=async()=>{await x.commit("updateChatTitleHistory",{key:f.index,title:f.title}),de()},ue=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/```(.*?)\n([\s\S]*?)```/g,(_,me,ve)=>`<pre><code class="language-${me}">${ve.trim()}</code></pre>`).replace(/`([^`]+)`/g,'<code class="attribute">$1</code>').replace(/\n/g,"<br>"),O=g(!1);function D(){O.value=!O.value}async function pe(){r.value=[],p.value=-1,n.value=[],await x.commit("destroyChatHistory")}return(i,t)=>(d(),c(T,null,[e("section",Ze,[e("div",Xe,[e("div",et,[e("div",{class:A(["col-lg-3 ai-history-sidebar p-0",{"is-show":O.value}])},[e("div",tt,[e("a",{onClick:m(te,["prevent"]),class:"btn btn-sm rounded text-white px-3 py-1 ws-80 align-items-center d-inline-flex justify-content-center"},t[5]||(t[5]=[e("i",{class:"bi bi-plus fs-20px lh-normal"},null,-1),e("span",{class:"fs-13px"},"New Chat",-1)])),e("a",{onClick:m(ee,["prevent"]),class:"btn btn-sm rounded text-white"},t[6]||(t[6]=[e("i",{class:"bi bi-search"},null,-1)]))]),e("div",st,[u(H)?(d(),c("div",ot,t[7]||(t[7]=[e("form",null,[e("div",{class:"input-group m-0 rounded-sm bg-transparent border shadow"},[e("span",{class:"input-group-text bg-transparent text-dark-lighter border-0"},[e("i",{class:"bi bi-search"})]),e("input",{class:"ps-0 fs-12px form-control form-control-md bg-transparent border-0 no-shadow text-dark",placeholder:"Search..."})])],-1)]))):w("",!0),e("div",nt,[t[8]||(t[8]=e("h6",{class:"m-0 text-dark fs-11px fw-300 ls-xs text-uppercase"},"Your conversations",-1)),e("div",at,[e("a",{onClick:t[0]||(t[0]=m(l=>{pe()},["prevent"])),class:"btn btn-sm py-0 px-2 text-primary fs-11px"},"Clear All"),e("a",{onClick:t[1]||(t[1]=m(l=>{D()},["prevent"])),class:"d-xl-none d-lg-none btn btn-sm py-0 px-2 text-dark"},"Close")])]),e("div",it,[(d(!0),c(T,null,S(u(n),(l,h)=>(d(),c("div",{key:l.key,class:A([{"bg-dark":u(p)==h},"ai-history-item d-flex mb-1 align-items-center justify-content-between py-1 px-0 rounded-sm"])},[t[11]||(t[11]=e("div",{class:"d-inline-flex gap-1 ws-5 ps-2"},[e("i",{class:"bi bi-chat-dots"})],-1)),e("a",{href:"#",onClick:m(_=>q(h),["prevent"]),class:"ps-3 ws-70"},[e("p",rt,R(l.title),1)],8,lt),e("div",dt,[e("a",{href:"#",onClick:m(_=>le(h),["prevent"]),class:"btn btn-sm"},t[9]||(t[9]=[e("i",{class:"text-dark bi bi-pencil"},null,-1)]),8,ct),e("a",{onClick:m(_=>q(h),["prevent"]),href:"#",class:"btn btn-sm"},t[10]||(t[10]=[e("i",{class:"text-dark bi bi-chevron-right"},null,-1)]),8,ut)])],2))),128))])])],2),e("div",pt,[e("div",mt,[e("div",vt,[t[14]||(t[14]=e("h6",{class:"m-0 text-dark ls-xs"},"Ask Anything",-1)),e("div",ft,[t[12]||(t[12]=e("a",{class:"btn btn-sm py-1 px-1 text-dark fs-11px border"},[e("img",{src:Te})],-1)),t[13]||(t[13]=e("a",{class:"btn btn-sm py-1 px-1 text-dark fs-11px border"},[e("img",{src:$e})],-1)),e("a",{onClick:t[2]||(t[2]=m(l=>{D()},["prevent"])),class:"d-xl-none d-lg-none btn btn-sm py-0 px-2 text-dark fs-11px"},"History")])]),e("div",{id:"ai-message-body",ref_key:"chatbox",ref:B,class:"card-body text-start"},[u(r).length?(d(!0),c(T,{key:1},S(u(r),l=>(d(),c("div",{class:A([{"is-me":l.role=="user"},"ai-message-item d-flex mb-1"])},[e("p",{class:"px-3 m-0 text-dark fs-12px bubble py-2 rounded-sm",innerHTML:ue(l.content)},null,8,kt)],2))),256)):(d(),c("div",ht,[e("div",gt,[t[15]||(t[15]=e("h6",{class:"text-center text-dark mb-3 p-2"},"What can I help with?",-1)),e("div",bt,[(d(!0),c(T,null,S(u(Oe),l=>(d(),c("div",yt,[e("div",_t,[e("a",{href:"#",onClick:m(h=>se(l),["prevent"])},[e("div",At,[e("p",wt,R(l),1)])],8,xt)])]))),256))])])]))],512),e("div",Ct,[e("div",Bt,[e("form",{onSubmit:m(E,["prevent"])},[e("div",Ft,[e("div",Ot,[e("a",{disabled:u(y),class:A([{disabled:u(y)},"text-dark"])},t[16]||(t[16]=[e("img",{src:Me},null,-1)]),10,Tt)]),z(e("input",{id:"ai-message-prompt","onUpdate:modelValue":t[3]||(t[3]=l=>Ce(b)?b.value=l:b=l),required:"",class:"form-control form-control-sm fs-12px text-dark ps-0 bg-transparent",placeholder:"What’s in your mind?..."},null,512),[[V,u(b)]]),e("div",$t,[e("button",{id:"ai-send-message",type:"submit",disabled:u(y),class:A([{disabled:u(y)},"text-dark ai-action-message"])},[u(y)?(d(),c("span",Ht)):(d(),c("img",Et))],10,Mt)])])],32)])])])])])])]),Y(u(We),{size:"s",ref_key:"modal_change_title",ref:M},{header:C(()=>t[17]||(t[17]=[e("h6",{class:"m-0"},"Ubah Riwayat",-1)])),default:C(()=>[e("div",St,[e("form",{onSubmit:m(ce,["prevent"])},[z(e("input",{class:"form-control",placeholder:"Input title","onUpdate:modelValue":t[4]||(t[4]=l=>u(f).title=l)},null,512),[[V,u(f).title]]),t[18]||(t[18]=e("div",{class:"d-flex justify-content-end mt-3"},[e("button",{type:"submit",class:"btn btn-sm btn-primary"},"Save Change")],-1))],32)])]),_:1},512)],64))}};export{Rt as default};
