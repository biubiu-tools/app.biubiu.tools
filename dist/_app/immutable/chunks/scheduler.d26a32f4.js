function D(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function Y(){return Object.create(null)}function P(t){t.forEach(M)}function Z(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function W(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function et(t,e,n){t.$$.on_destroy.push(W(e,n))}function nt(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function it(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function rt(t,e,n,i,r,l){if(r){const c=A(e,n,i,l);t.p(c,r)}}function ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function lt(t){return t??""}let p=!1;function st(){p=!0}function ot(){p=!1}function B(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function L(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:B(1,r,z=>e[n[z]].claim_order,a))-1;i[s]=n[u]+1;const k=u+1;n[k]=s,r=Math.max(k,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<c.length;s++){for(;a<l.length&&c[s].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(c[s],u)}}function O(t,e){t.appendChild(e)}function q(t,e){if(p){for(L(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function at(t,e,n){p&&!n?q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function ft(){return v(" ")}function dt(){return v("")}function E(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ht(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function mt(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,r=!1){R(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function j(t,e,n,i){return C(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function bt(t,e,n){return j(t,e,n,S)}function yt(t,e,n){return j(t,e,n,F)}function U(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function gt(t){return U(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function xt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let h;function G(){if(h===void 0){h=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{h=!0}}return h}function vt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=S("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=G();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=E(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=E(i.contentWindow,"resize",e),e()}),O(t,i),()=>{(r||l&&i.contentWindow)&&l(),I(i)}}function kt(t,e,n){t.classList.toggle(e,!!n)}function J(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Et(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Nt(t,e){return new t(e)}let m;function y(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}function At(t){b().$$.on_mount.push(t)}function St(t){b().$$.after_update.push(t)}function Ct(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=J(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function jt(t){return b().$$.context.get(t)}function Tt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const _=[],N=[];let d=[];const w=[],T=Promise.resolve();let x=!1;function K(){x||(x=!0,T.then(V))}function zt(){return K(),T}function Q(t){d.push(t)}function Dt(t){w.push(t)}const g=new Set;let f=0;function V(){if(f!==0)return;const t=m;do{try{for(;f<_.length;){const e=_[f];f++,y(e),X(e.$$)}}catch(e){throw _.length=0,f=0,e}for(y(null),_.length=0,f=0;N.length;)N.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];g.has(n)||(g.add(n),n())}d.length=0}while(_.length);for(;w.length;)w.pop()();x=!1,g.clear(),y(t)}function X(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Ht(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{jt as $,N as A,Nt as B,P as C,Y as D,V as E,Z as F,tt as G,Q as H,Ht as I,m as J,y as K,M as L,_ as M,K as N,st as O,ot as P,E as Q,Tt as R,F as S,yt as T,lt as U,ut as V,Dt as W,ht as X,Ct as Y,H as Z,kt as _,it as a,vt as a0,ft as b,nt as c,bt as d,S as e,pt as f,ct as g,U as h,I as i,gt as j,at as k,q as l,wt as m,D as n,et as o,_t as p,Et as q,mt as r,$ as s,v as t,rt as u,dt as v,St as w,At as x,xt as y,zt as z};