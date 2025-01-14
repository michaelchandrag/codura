import{h as te,g as l,j as U,k as A,e as T,a as t,n as x,b as _,l as se,m as N,p as oe,q as g,c,x as b,t as M,y as ae,T as ne,z as ie,r as h,A as le,o as re,s as C,w as de,F,d as j,u as v,v as I,i as ce,B as ue,C as pe}from"./index-D4hCRDQJ.js";import{p as me,_ as ve}from"./index-DSKuSFHw.js";(function(){try{var e=document.createElement("style");e.appendChild(document.createTextNode(".vs-focus-container__focus-redirector,.vs-focus-container__last-focusable{opacity:0;position:absolute}.vs-focus-container__content{outline:none}.vs-modal{font-size:.875em}.vs-modal.is-aligned-top .vs-modal__wrapper{vertical-align:initial}.vs-modal.is-aligned-top.has-footer .vs-modal__body,.vs-modal.has-footer .vs-modal__body{max-height:calc(100vh - 125px)}.vs-modal:not(.has-footer) .vs-modal__body{padding:0 24px 20px}.vs-modal--is-open{overflow:hidden}.vs-modal.is-backdrop-blur{backdrop-filter:blur(3px)}.vs-modal__mask{display:table;position:fixed;z-index:800;top:0;left:0;width:100%;height:100vh;transition:opacity .3s ease;background-color:#33333380}.vs-modal__wrapper{display:table-cell;overflow-x:hidden;text-align:center;vertical-align:middle}.vs-modal__wrapper.has-dummy-scrollbar{overflow-y:scroll}.vs-modal__container{display:inline-block;position:relative;width:530px;max-width:100vw;max-height:100vh;margin:0 auto;padding:0;overflow:hidden;transition:all .3s ease;border-radius:3px;outline:none;background-color:#fff;box-shadow:0 2px 8px #33333354;text-align:initial}.vs-modal__header{display:flex;position:relative;z-index:1;align-items:center;min-height:55px;padding:0 24px}.vs-modal__header-text{display:flex;flex-grow:1;align-items:center;margin:0;font-size:1.125em;font-weight:400}.vs-modal__close-button button{position:absolute;z-index:100;top:20px;right:20px;background:none;border:none;text-align:right;margin:0;padding:0;cursor:pointer}.vs-modal__close-button button img{width:12px;height:12px}.vs-modal__body{max-height:calc(100vh - 55px);padding:16px 24px;overflow-y:auto}.vs-modal__footer{display:flex;align-items:center;justify-content:flex-end;height:70px;padding:0 24px}.vs-modal--size-s>.vs-modal__wrapper>.vs-modal__container{width:320px}.vs-modal--size-l>.vs-modal__wrapper>.vs-modal__container{width:850px}.vs-modal--size-fullscreen>.vs-modal__wrapper>.vs-modal__container{width:100vw;border-radius:0}.vs-modal--size-fullscreen>.vs-modal__wrapper>.vs-modal__container .vs-modal__body{height:100vh;max-height:100vh}.vs-modal--size-auto>.vs-modal__wrapper>.vs-modal__container{width:initial}.vs-modal--transition-fade-enter-from,.vs-modal--transition-fade-leave-active,.vs-modal--transition-slide-up-enter-from,.vs-modal--transition-slide-up-leave-active{opacity:0}.vs-modal--transition-slide-up-enter-from .vs-modal__container,.vs-modal--transition-slide-up-leave-active .vs-modal__container{transform:translateY(20px)}.vs-modal--transition-slide-down-enter-from,.vs-modal--transition-slide-down-leave-active{opacity:0}.vs-modal--transition-slide-down-enter-from .vs-modal__container,.vs-modal--transition-slide-down-leave-active .vs-modal__container{transform:translateY(-20px)}")),document.head.appendChild(e)}catch(s){console.error("vite-plugin-css-injected-by-js",s)}})();const K=(e,s)=>{const o=e.__vccOpts||e;for(const[u,i]of s)o[u]=i;return o},fe={name:"VsFocusContainer",props:{containFocus:{type:Boolean,default:!0},focusRedirector:Function,disabled:{type:Boolean,default:!1},tag:{type:String,default:"div"},lazy:{type:Boolean,default:!1}},computed:{renderRedirector(){return this.disabled?!1:this.lazy?this.containFocus:!0}},methods:{focus(){this.$refs.content.focus()},redirectFocus(e,s){if(!this.containFocus){this.$emit("focus-overflow",e,s);return}if(e.stopPropagation(),this.focusRedirector){this.focusRedirector(e,s);return}s.isTabbingForward?this.$refs.content.focus():this.$refs.lastFocusable.focus()}}},he={ref:"content",class:"vs-focus-container__content",tabindex:"-1"},_e={key:1,ref:"lastFocusable",class:"vs-focus-container__last-focusable",tabindex:"-1"};function ye(e,s,o,u,i,a){return l(),U(ie(o.tag),{class:"vs-focus-container"},{default:A(()=>[a.renderRedirector?(l(),c("span",{key:0,class:"vs-focus-container__focus-redirector",tabindex:"0",onFocus:s[0]||(s[0]=m=>a.redirectFocus(m,{isTabbingForward:!1}))},null,32)):g("",!0),t("div",he,[b(e.$slots,"default")],512),!o.disabled&&o.containFocus?(l(),c("span",_e,null,512)):g("",!0),a.renderRedirector?(l(),c("span",{key:2,class:"vs-focus-container__focus-redirector",tabindex:"0",onFocus:s[1]||(s[1]=m=>a.redirectFocus(m,{isTabbingForward:!0}))},null,32)):g("",!0)]),_:3})}const ge=K(fe,[["render",ye]]),L=/^\s+|\s+$/g,Y=/\s+/g;function be(e){return e&&typeof e=="object"&&typeof e.nodeName=="string"&&e.nodeType===1}function D(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:be(e)}function E(e){return D(e)?(e.getAttribute("class")||"").replace(L,"").split(Y):[]}function k(e){return typeof e=="string"?e.replace(L,"").split(Y):e}function S(e,s){D(e)&&e.setAttribute("class",k(s).join(" "))}function Q(e,s){const o=E(e);return k(s).forEach(u=>{const i=o.indexOf(u);i!==-1&&o.splice(i,1)}),S(e,o),o}function xe(e,s){const o=Q(e,s),u=k(s);return o.push(...u),S(e,o),o}function q(e,s){const o=E(e);return k(s).every(u=>o.indexOf(u)!==-1)}const V={add:xe,remove:Q,contains:q,has:q,set:S,get:E},Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAJeTmmCIcbPbyAQAAAOtJREFUSMeF1ksKwjAURuE6cF50BY4cC4oLEHQquAVXYIVs3wiFn3C4nA76SG+/PpLc2+l9fk7lsr3dp0c71QH79p2ubZmr85t+sgshCHTh1UIQaJe+DkFgmddNBZyyLYGRIAACAAgA2SeAAwI5OowBu/WaEJ95AI4BQBD4N6xEgFyQFsSTYDgJAmgkkFYCIACAAABiAEgAABGgIAIURICCCFAQAEAQYIDewh9SX9M/lH5q7yztbh8wOuR80Oqw94mjU88nr05/TyCagjyJaRr0RKqp2JO5lgMvKFqStKhpWbTC6qVZi7v+HvwAcK2oz9BduqwAAAAASUVORK5CYII=",we={name:"VsModal",components:{VsFocusContainer:ge},props:{title:{type:String,default:"Modal title"},alignTop:{type:Boolean,default:!1},alignTopMargin:{type:Number,default:60},size:{type:String,default:"m"},role:{type:String,default:"dialog"},transition:{type:String,default:"slide-up"},removeHeader:{type:Boolean,default:!1},removeCloseButton:{type:Boolean,default:!1},preventShift:{type:Boolean,default:!1},dismissible:{type:Boolean,default:!0},dismissOn:{type:String,default:"backdrop esc close-button"},backdropBlur:{type:Boolean,default:!1}},data(){return{isOpen:!1,lastFocusedElement:null}},computed:{classes(){return[`vs-modal--size-${this.size}`,{"has-footer":this.hasFooter},{"is-open":this.isOpen},{"is-aligned-top":this.alignTop},{"is-backdrop-blur":this.backdropBlur}]},alignTopStyle(){return this.alignTop?{"padding-top":`${this.alignTopMargin}px`}:null},toggleTransition(){return`vs-modal--transition-${this.transition}`},hasFooter(){return!!this.$slots.footer},dismissOnBackdrop(){return this.dismissOn.indexOf("backdrop")>-1},dismissOnCloseButton(){return this.dismissOn.indexOf("close-button")>-1},dismissOnEsc(){return this.dismissOn.indexOf("esc")>-1}},watch:{isOpen(){this.$nextTick(()=>{this[this.isOpen?"onOpen":"onClose"]()})}},beforeDestroy(){this.isOpen&&this.returnFocus()},methods:{open(){this.isOpen=!0},close(){!this.dismissible||(this.isOpen=!1)},redirectFocus(){this.$refs.focusContainer.focus()},returnFocus(){this.lastFocusedElement&&this.lastFocusedElement.focus()},onBackdropClick(){this.dismissOnBackdrop?this.close():this.redirectFocus()},onEsc(){this.dismissOnEsc&&this.close()},onOpen(){this.lastFocusedElement=document.activeElement,this.$refs.focusContainer.focus(),V.add(document.body,"vs-modal--is-open"),this.incrementOpenModalCount(),this.$emit("open")},onClose(){this.$emit("close"),this.returnFocus()},onEnter(){this.$emit("reveal")},onLeave(){this.$emit("hide"),this.decrementOpenModalCount()===0&&V.remove(document.body,"vs-modal--is-open")},getOpenModalCount(){const e=document.body.getAttribute("data-open-modals");return e===void 0?0:Number(e)},setOpenModalCount(e){const s=Math.max(0,e);return s===0?document.body.removeAttribute("data-open-modals"):document.body.setAttribute("data-open-modals",s),s},incrementOpenModalCount(){return this.setOpenModalCount(this.getOpenModalCount()+1)},decrementOpenModalCount(){return this.setOpenModalCount(this.getOpenModalCount()-1)}}},Ce=["role"],ke={key:0,class:"vs-modal__header"},Be={class:"vs-modal__header-text"},Oe={class:"vs-modal__close-button"},Fe=t("img",{src:Ae,alt:"close"},null,-1),Te=[Fe],Me={class:"vs-modal__body"},Ee={key:1,class:"vs-modal__footer"};function Se(e,s,o,u,i,a){const m=te("vs-focus-container");return l(),U(ne,{name:a.toggleTransition,onAfterEnter:a.onEnter,onAfterLeave:a.onLeave},{default:A(()=>[T(t("div",{class:x(["vs-modal vs-modal__mask",a.classes]),role:o.role,onClick:s[2]||(s[2]=_((...p)=>a.onBackdropClick&&a.onBackdropClick(...p),["self"]))},[t("div",{class:x(["vs-modal__wrapper",{"has-dummy-scrollbar":o.preventShift}]),style:se(a.alignTopStyle),onClick:s[1]||(s[1]=_((...p)=>a.onBackdropClick&&a.onBackdropClick(...p),["self"]))},[N(m,{ref:"focusContainer",class:"vs-modal__container",tabindex:"-1",onKeydown:oe(_(a.onEsc,["stop"]),["native","esc"])},{default:A(()=>[o.removeHeader?g("",!0):(l(),c("div",ke,[b(e.$slots,"header",{},()=>[t("h2",Be,M(o.title),1)])])),t("div",Oe,[b(e.$slots,"close",{},()=>[a.dismissOnCloseButton&&!o.removeCloseButton&&o.dismissible?(l(),c("button",{key:0,onClick:s[0]||(s[0]=(...p)=>a.close&&a.close(...p))},Te)):g("",!0)])]),t("div",Me,[b(e.$slots,"default")]),a.hasFooter?(l(),c("div",Ee,[b(e.$slots,"footer")])):g("",!0)]),_:3},8,["onKeydown"])],6)],10,Ce),[[ae,i.isOpen]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])}const $e=K(we,[["render",Se]]),He={class:"section bg-transparent ai-section section-content"},ze={class:"container"},Re={class:"row gy-4 justify-content-center"},je={class:"col-lg-4","data-aos":"fade-right","data-aos-delay":"100"},Ie={class:"card rounded-sm ai-card h-100"},qe={id:"ai-history-body",class:"card-body text-start"},Ve=["onClick"],Ue={class:"m-0 text-white fs-12px"},Ne={class:"d-inline-flex gap-1 ws-20"},Ke=["onClick"],Le=["onClick"],Ye={class:"col-lg-8"},De={class:"card rounded-sm ai-card h-100"},Qe={class:"py-2 px-3"},Je={id:"ai-message-footer",class:"card-footer"},Ge={class:"input-group bg-transparent"},Pe=["disabled"],We={key:0,class:"spinner-border spinner-border-sm text-secondary",role:"status"},Ze={key:1,src:ve},Xe={class:"modal-body mt-2"},st={__name:"Index",setup(e){const s=ue(),o=pe(),u=h(s.query.text);let i=h([{role:"system",content:"Hello! How can I assist you today?"}]),a=h([]),m=h(-1),p=le({index:null,title:""}),B=h(null);const w=h(null);let f=h(""),y=h(!1);re(async()=>{const d=C.getters.stateChatHistory;d&&(a.value=d),u.value&&(f.value=u.value,await H()),J(),$()}),de(i,()=>{$()});const J=()=>{Object.keys(s.query).length>0&&o.replace({path:s.path})},$=()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)},H=async()=>{if(!f.value.trim()||y.value)return;y.value=!0,i.value.push({role:"user",content:f.value});const d=i.value.slice(-2).map(r=>({role:r.role,content:r.content})),n=await me(d);n&&(n.success&&(i.value.push({role:"assistant",content:n.respone}),f.value="",G()),y.value=!1)},G=async()=>{if(m.value==-1){const d={key:`chat-${Date.now()}`,title:`Chat ${a.value.length+1}`,messages:i.value};await C.commit("addChatHistory",d),m.value=a.value.length}else P()},P=async()=>{await C.commit("updateChatMessageHistory",{key:m.value,messages:i.value})},z=async d=>{m.value=d,i.value=a.value[`${m.value}`].messages},W=async d=>{p.index=d,p.title=a.value[d].title,Z()},Z=d=>{B.value.open()},X=()=>{B.value.close()},ee=async()=>{await C.commit("updateChatTitleHistory",{key:p.index,title:p.title}),X()};return(d,n)=>(l(),c(F,null,[t("section",He,[t("div",ze,[t("div",Re,[t("div",je,[t("div",Ie,[n[4]||(n[4]=t("div",{id:"ai-history-header",class:"card-header d-flex justify-content-between align-items-center"},[t("h6",{class:"m-0 text-white fw-400 ls-xs"},"History")],-1)),t("div",qe,[(l(!0),c(F,null,j(v(a),(r,O)=>(l(),c("div",{key:r.key,class:"ai-history-item d-flex mb-1 align-items-center justify-content-between py-1 px-2 rounded-sm"},[t("a",{href:"#",onClick:_(R=>z(O),["prevent"]),class:"ps-1 ws-75"},[t("p",Ue,M(r.title),1)],8,Ve),t("div",Ne,[t("a",{href:"#",onClick:_(R=>W(O),["prevent"]),class:"btn btn-sm"},n[2]||(n[2]=[t("i",{class:"text-white bi bi-pencil"},null,-1)]),8,Ke),t("a",{onClick:_(R=>z(O),["prevent"]),href:"#",class:"btn btn-sm"},n[3]||(n[3]=[t("i",{class:"text-white bi bi-chevron-right"},null,-1)]),8,Le)])]))),128))])])]),t("div",Ye,[t("div",De,[n[5]||(n[5]=t("div",{id:"ai-message-header",class:"card-header d-flex justify-content-between align-items-center"},[t("h6",{class:"m-0 text-white fw-400 ls-xs"},"Conversation")],-1)),t("div",{id:"ai-message-body",ref_key:"chatbox",ref:w,class:"card-body text-start px-2 py-3"},[(l(!0),c(F,null,j(v(i),r=>(l(),c("div",{class:x([{"is-me":r.role=="user"},"ai-message-item d-flex mb-1"])},[t("div",Qe,[t("p",{class:x([{"py-2 px-3":r.role=="user"},"m-0 text-white fs-12px ls-xs ws-100 bubble rounded-sm full fw-300"])},M(r.content),3)])],2))),256))],512),t("div",Je,[t("form",{onSubmit:_(H,["prevent"])},[t("div",Ge,[T(t("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>ce(f)?f.value=r:f=r),required:"",class:"form-control form-control-sm fs-12px text-white bg-transparent fw-300",placeholder:"Start typing ....."},null,512),[[I,v(f)]]),t("button",{type:"submit",disabled:v(y),class:x([{disabled:v(y)},"btn btn-sm text-white bg-transparent input-group-text"])},[v(y)?(l(),c("span",We)):(l(),c("img",Ze))],10,Pe)])],32)])])])])])]),N(v($e),{size:"s",ref_key:"modal_change_title",ref:B},{header:A(()=>n[6]||(n[6]=[t("h6",{class:"m-0"},"Ubah Riwayat",-1)])),default:A(()=>[t("div",Xe,[t("form",{onSubmit:_(ee,["prevent"])},[T(t("input",{class:"form-control",placeholder:"Input title","onUpdate:modelValue":n[1]||(n[1]=r=>v(p).title=r)},null,512),[[I,v(p).title]]),n[7]||(n[7]=t("div",{class:"d-flex justify-content-end mt-3"},[t("button",{type:"submit",class:"btn btn-sm btn-primary"},"Save Change")],-1))],32)])]),_:1},512)],64))}};export{st as default};
