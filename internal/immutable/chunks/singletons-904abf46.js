import{B as d,s as m}from"./index-bbd4aece.js";import{b as E,v}from"./shared-23917130.js";const c=[];function b(e,t=d){let n;const o=new Set;function s(a){if(m(e,a)&&(e=a,n)){const u=!c.length;for(const l of o)l[1](),c.push(l,e);if(u){for(let l=0;l<c.length;l+=2)c[l][0](c[l+1]);c.length=0}}}function r(a){s(a(e))}function i(a,u=d){const l=[a,u];return o.add(l),o.size===1&&(n=t(s)||d),a(e),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:i}}const I="sveltekit:scroll",y="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const h={...p,"":p.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function T(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function U(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!o||R(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:o}}function L(e){let t=null,n=null,o=null,s=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),o===null&&(o=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),s===null&&(s=f(r,"reload")),r=_(r);return{preload_code:h[n??"off"],preload_data:h[o??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function g(e){const t=b(e);let n=!0;function o(){n=!0,t.update(i=>i)}function s(i){n=!1,t.set(i)}function r(i){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&i(a=u)})}return{notify:o,set:s,subscribe:r}}function w(){const{set:e,subscribe:t}=b(!1);let n;async function o(){clearTimeout(n);const s=await fetch(`${E}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const i=(await s.json()).version!==v;return i&&(e(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:o}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function O(e){e.client}const V={url:g({}),page:g({}),navigating:b(null),updated:w()};export{y as I,p as P,I as S,U as a,L as b,x as c,O as d,T as f,S as g,R as i,V as s};
