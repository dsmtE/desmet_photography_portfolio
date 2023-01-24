import{S as nt,i as at,s as rt,a as ot,e as F,c as it,b as J,g as de,t as M,d as pe,f as B,h as G,j as st,o as Ie,k as lt,l as ct,m as ft,n as ve,p as V,q as ut,r as dt,u as pt,v as W,w as Y,x as Ne,y as X,z as Z,A as le}from"./chunks/index-bbd4aece.js";import{S as et,I as q,g as Ke,f as ze,a as Ee,b as ce,s as C,i as We,c as ue,P as Ye,d as ht}from"./chunks/singletons-904abf46.js";import{_ as fe}from"./chunks/preload-helper-41c905a7.js";import{s as mt,a as _t}from"./chunks/shared-23917130.js";function gt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function yt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(a,e){const n=new URL(a);for(const l of bt){let o=n[l];Object.defineProperty(n,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function St(a){return a.replace(/\/$/,"")+kt}function Rt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let l=n.length;for(;l;)e=e*33^n[--l]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ue(a)),he(a,e));const te=new Map;function Lt(a,e){const n=Ue(a,e),l=document.querySelector(n);if(l!=null&&l.textContent){const{body:o,...m}=JSON.parse(l.textContent),t=l.getAttribute("data-ttl");return t&&te.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return he(a,e)}function It(a,e,n){if(te.size>0){const l=Ue(a,n),o=te.get(l);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);te.delete(l)}}return he(e,n)}function Ue(a,e){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(l+=`[data-hash="${Rt(e.body)}"]`),l}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(l=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(l);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!l)return;const t=l.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(O=>parseInt(O,16))));const w=At.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,R,j,D]=w;return e.push({name:j,matcher:D,optional:!!v,rest:!!R,chained:R?_===1&&t[0]==="":!1}),R?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Pt)}function Ut(a,e,n){const l={},o=a.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=o[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(l[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let _=o.indexOf(void 0,t);if(_===-1){const w=e[t+1];if(w!=null&&w.rest&&w.chained)m=h;else return}for(;_>=t;)o[_]=o[_-1],_-=1;continue}return}l[f.name]=h}}if(!m)return l}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t(a,e,n,l){const o=new Set(e);return Object.entries(n).map(([f,[h,_,w]])=>{const{pattern:v,params:R}=Ot(f),j={id:f,exec:D=>{const O=v.exec(D);if(O)return Ut(O,R,l)},errors:[1,...w||[]].map(D=>a[D]),layouts:[0,..._||[]].map(t),leaf:m(h)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function m(f){const h=f<0;return h&&(f=~f),[h,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function jt(a){let e,n,l;var o=a[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=W(o,m(a))),{c(){e&&Y(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&X(e,t,f),J(t,n,f),l=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),o!==(o=t[0][0])){if(e){de();const _=e;M(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}o?(e=W(o,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Tt(a){let e,n,l;var o=a[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return o&&(e=W(o,m(a))),{c(){e&&Y(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&X(e,t,f),J(t,n,f),l=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const _=e;M(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}o?(e=W(o,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Dt(a){let e,n,l;var o=a[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=W(o,m(a))),{c(){e&&Y(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&X(e,t,f),J(t,n,f),l=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),o!==(o=t[0][1])){if(e){de();const _=e;M(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}o?(e=W(o,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=lt("div"),n&&n.c(),this.h()},l(l){e=ct(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ft(e);n&&n.l(o),o.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(l,o){J(l,e,o),n&&n.m(e,null)},p(l,o){l[5]?n?n.p(l,o):(n=Ze(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=ut(a[6])},l(n){e=dt(n,a[6])},m(n,l){J(n,e,l)},p(n,l){l&64&&pt(e,n[6])},d(n){n&&G(e)}}}function Vt(a){let e,n,l,o,m;const t=[Tt,jt],f=[];function h(w,v){return w[0][1]?0:1}e=h(a),n=f[e]=t[e](a);let _=a[4]&&Xe(a);return{c(){n.c(),l=ot(),_&&_.c(),o=F()},l(w){n.l(w),l=it(w),_&&_.l(w),o=F()},m(w,v){f[e].m(w,v),J(w,l,v),_&&_.m(w,v),J(w,o,v),m=!0},p(w,[v]){let R=e;e=h(w),e===R?f[e].p(w,v):(de(),M(f[R],1,1,()=>{f[R]=null}),pe(),n=f[e],n?n.p(w,v):(n=f[e]=t[e](w),n.c()),B(n,1),n.m(l.parentNode,l)),w[4]?_?_.p(w,v):(_=Xe(w),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(w){m||(B(n),m=!0)},o(w){M(n),m=!1},d(w){f[e].d(w),w&&G(l),_&&_.d(w),w&&G(o)}}}function qt(a,e,n){let{stores:l}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;st(l.page.notify);let _=!1,w=!1,v=null;return Ie(()=>{const R=l.page.subscribe(()=>{_&&(n(5,w=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),R}),a.$$set=R=>{"stores"in R&&n(7,l=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,m=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,h=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&l.page.set(o)},[m,t,f,h,_,w,v,l,o]}class Ct extends nt{constructor(e){super(),at(this,e,qt,Vt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},me=[()=>fe(()=>import("./chunks/0-ca022fab.js"),["./chunks/0-ca022fab.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-49429f13.js","./chunks/index-bbd4aece.js","./chunks/stores-9990a2c5.js","./chunks/singletons-904abf46.js","./chunks/shared-23917130.js","./assets/_layout-a33c2d43.css"],import.meta.url),()=>fe(()=>import("./chunks/1-34c31708.js"),["./chunks/1-34c31708.js","./components/error.svelte-d6a9ddd0.js","./chunks/index-bbd4aece.js","./chunks/stores-9990a2c5.js","./chunks/singletons-904abf46.js","./chunks/shared-23917130.js"],import.meta.url),()=>fe(()=>import("./chunks/2-0b1814e3.js"),["./chunks/2-0b1814e3.js","./chunks/_page-da46b06b.js","./components/pages/_page.svelte-9da0ee0c.js","./chunks/index-bbd4aece.js","./chunks/preload-helper-41c905a7.js","./chunks/shared-23917130.js","./assets/_page-4390a309.css"],import.meta.url),()=>fe(()=>import("./chunks/3-3bff96c7.js"),["./chunks/3-3bff96c7.js","./chunks/_page-57618ffe.js","./components/pages/about/_page.svelte-1a0c1c69.js","./chunks/index-bbd4aece.js"],import.meta.url)],Mt=[],Bt={"/":[2],"/about":[3]},Gt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Ht(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([l,o])=>[l,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Jt=-1,Kt=-2,zt=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(a){if(typeof a=="number")return l(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function l(o,m=!1){if(o===Jt)return;if(o===zt)return NaN;if(o===Wt)return 1/0;if(o===Yt)return-1/0;if(o===Xt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const h=new Set;n[o]=h;for(let v=1;v<t.length;v+=1)h.add(l(t[v]));break;case"Map":const _=new Map;n[o]=_;for(let v=1;v<t.length;v+=2)_.set(l(t[v]),l(t[v+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[o]=w;for(let v=1;v<t.length;v+=2)w[t[v]]=l(t[v+1]);break}else{const f=new Array(t.length);n[o]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==Kt&&(f[h]=l(_))}}else{const f={};n[o]=f;for(const h in t){const _=t[h];f[h]=l(_)}}return n[o]}return l(0)}function Qt(a){return a.filter(e=>e!=null)}const Se=$t(me,Mt,Bt,Ft),Oe=me[0],Pe=me[1];Oe();Pe();let ne={};try{ne=JSON.parse(sessionStorage[et])}catch{}function Re(a){ne[a]=ue()}function xt({target:a,base:e}){var Ge;const n=document.documentElement,l=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,w=!1,v=!1,R=!1,j=!1,D,O=(Ge=history.state)==null?void 0:Ge[q];O||(O=Date.now(),history.replaceState({...history.state,[q]:O},"",location.href));const _e=ne[O];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let H,$e,ae;async function je(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),i=ie(r,!0);o=null,await De(i,r,[])}async function ge(r,{noScroll:i=!1,replaceState:c=!1,keepFocus:s=!1,state:d={},invalidateAll:u=!1},p,b){return typeof r=="string"&&(r=new URL(r,Ke(document))),se({url:r,scroll:i?ue():null,keepfocus:s,redirect_chain:p,details:{state:d,replaceState:c},nav_token:b,accepted:()=>{u&&(j=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const i=ie(r,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:i.id,promise:Ce(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function re(...r){const c=Se.filter(s=>r.some(d=>s.exec(d))).map(s=>Promise.all([...s.layouts,s.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function De(r,i,c,s,d={},u){var b,y;$e=d;let p=r&&await Ce(r);if(p||(p=await Be(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,$e!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(i.pathname))p=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ge(new URL(p.location,i).href,{},[...c,i.pathname],d),!1;else((y=(b=p.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await C.updated.check()&&await x(i);if(l.length=0,j=!1,w=!0,s&&s.details){const{details:g}=s,k=g.replaceState?0:1;g.state[q]=O+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(o=null,h?(t=p.state,p.props.page&&(p.props.page.url=i),D.$set(p.props)):Ve(p),s){const{scroll:g,keepfocus:k}=s,{activeElement:P}=document;await le();const T=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!T&&await Le(),_){const L=i.hash&&document.getElementById(i.hash.slice(1));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await le();_=!0,p.props.page&&(H=p.props.page),u&&u(),w=!1}function Ve(r){var s;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),H=r.props.page,D=new Ct({target:a,props:{...r.props,stores:C},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(d=>d(c)),h=!0}async function Q({url:r,params:i,branch:c,status:s,error:d,route:u,form:p}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);r.pathname=gt(r.pathname,b),r.search=r.search;const y={type:"loaded",state:{url:r,params:i,branch:c,error:d,route:u},props:{components:Qt(c).map(L=>L.node.component)}};p!==void 0&&(y.props.form=p);let g={},k=!H,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],N=t.branch[L];(E==null?void 0:E.data)!==(N==null?void 0:N.data)&&(k=!0),E&&(g={...g,...E.data},k&&(y.props[`data_${P}`]=g),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==d||p!==void 0&&p!==H.form||k)&&(y.props.page={error:d,params:i,route:{id:(u==null?void 0:u.id)??null},status:s,url:new URL(r),form:p??null,data:k?g:H.data}),y}async function we({loader:r,parent:i,url:c,params:s,route:d,server_data_node:u}){var g,k,P;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((g=y.universal)!=null&&g.load){let T=function(...E){for(const N of E){const{href:$}=new URL(N,c);b.dependencies.add($)}};const L={route:{get id(){return b.route=!0,d.id}},params:new Proxy(s,{get:(E,N)=>(b.params.add(N),E[N])}),data:(u==null?void 0:u.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,N){let $;E instanceof Request?($=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):$=E;const S=new URL($,c).href;return T(S),h?It($,S,N):Lt($,N)},setHeaders:()=>{},depends:T,parent(){return b.parent=!0,i()}};p=await y.universal.load.call(null,L)??null,p=p?await Ht(p):null}return{node:y,loader:r,server:u,universal:(k=y.universal)!=null&&k.load?{type:"data",data:p,uses:b}:null,data:p??(u==null?void 0:u.data)??null,slash:((P=y.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function qe(r,i,c,s,d){if(j)return!0;if(!s)return!1;if(s.parent&&r||s.route&&i||s.url&&c)return!0;for(const u of s.params)if(d[u]!==t.params[u])return!0;for(const u of s.dependencies)if(l.some(p=>p(new URL(u))))return!0;return!1}function ye(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function Ce({id:r,invalidating:i,url:c,params:s,route:d}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:p,leaf:b}=d,y=[...p,b];u.forEach(S=>S==null?void 0:S().catch(()=>{})),y.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?d.id!==t.route.id:!1,T=y.reduce((S,A,U)=>{var z;const I=t.branch[U],K=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||qe(S.some(Boolean),P,k,(z=I.server)==null?void 0:z.uses,s));return S.push(K),S},[]);if(T.some(Boolean)){try{g=await xe(c,T)}catch(S){return oe({status:500,error:await ee(S,{url:c,params:s,route:{id:d.id}}),url:c,route:d})}if(g.type==="redirect")return g}const L=g==null?void 0:g.nodes;let E=!1;const N=y.map(async(S,A)=>{var z;if(!S)return;const U=t.branch[A],I=L==null?void 0:L[A];if((!I||I.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!qe(E,P,k,(z=U.universal)==null?void 0:z.uses,s))return U;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return we({loader:S[1],url:c,params:s,route:d,parent:async()=>{var Je;const He={};for(let be=0;be<A;be+=1)Object.assign(He,(Je=await N[be])==null?void 0:Je.data);return He},server_data_node:ye(I===void 0&&S[0]?{type:"skip"}:I??null,U==null?void 0:U.server)})});for(const S of N)S.catch(()=>{});const $=[];for(let S=0;S<y.length;S+=1)if(y[S])try{$.push(await N[S])}catch(A){if(A instanceof Qe)return{type:"redirect",location:A.location};let U=500,I;if(L!=null&&L.includes(A))U=A.status??U,I=A.error;else if(A instanceof Ae)U=A.status,I=A.body;else{if(await C.updated.check())return await x(c);I=await ee(A,{params:s,url:c,route:{id:d.id}})}const K=await Fe(S,$,u);return K?await Q({url:c,params:s,branch:$.slice(0,K.idx).concat(K.node),status:U,error:I,route:d}):await Be(c,{id:d.id},I,U)}else $.push(void 0);return await Q({url:c,params:s,branch:$,status:200,error:null,route:d,form:i?void 0:null})}async function Fe(r,i,c){for(;r--;)if(c[r]){let s=r;for(;!i[s];)s-=1;try{return{idx:s+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:i,url:c,route:s}){const d={},u=await Oe();let p=null;if(u.has_server_load)try{const g=await xe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;p=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await x(c)}const b=await we({loader:Oe,url:c,params:d,route:s,parent:()=>Promise.resolve({}),server_data_node:ye(p)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:d,branch:[b,y],status:r,error:i,route:null})}function ie(r,i){if(We(r,e))return;const c=wt(r.pathname.slice(e.length)||"/");for(const s of Se){const d=s.exec(c);if(d)return{id:r.pathname+r.search,invalidating:i,route:s,params:yt(d),url:r}}}function Me({url:r,type:i,intent:c,delta:s}){var b,y;let d=!1;const u={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:i};s!==void 0&&(u.delta=s);const p={...u,cancel:()=>{d=!0}};return v||m.before_navigate.forEach(g=>g(p)),d?null:u}async function se({url:r,scroll:i,keepfocus:c,redirect_chain:s,details:d,type:u,delta:p,nav_token:b,accepted:y,blocked:g}){const k=ie(r,!1),P=Me({url:r,type:u,delta:p,intent:k});if(!P){g();return}Re(O),y(),v=!0,h&&C.navigating.set(P),await De(k,r,s,{scroll:i,keepfocus:c,details:d},b,()=>{v=!1,m.after_navigate.forEach(T=>T(P)),C.navigating.set(null)})}async function Be(r,i,c,s){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:s,error:c,url:r,route:i}):await x(r)}function x(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(r),r=setTimeout(()=>{s(p,2)},20)});function i(u){s(u.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(re(new URL(p.target.href).pathname),c.unobserve(p.target))},{threshold:0});function s(u,p){const b=ze(u,n);if(!b)return;const{url:y,external:g}=Ee(b,e);if(g)return;const k=ce(b);k.reload||(p<=k.preload_data?Te(y):p<=k.preload_code&&re(y.pathname))}function d(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:b}=Ee(u,e);if(b)continue;const y=ce(u);y.reload||(y.preload_code===Ye.viewport&&c.observe(u),y.preload_code===Ye.eager&&re(p.pathname))}}m.after_navigate.push(d),d()}return{after_navigate:r=>{Ie(()=>(m.after_navigate.push(r),()=>{const i=m.after_navigate.indexOf(r);m.after_navigate.splice(i,1)}))},before_navigate:r=>{Ie(()=>(m.before_navigate.push(r),()=>{const i=m.before_navigate.indexOf(r);m.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(w||!h)&&(_=!1)},goto:(r,i={})=>ge(r,i,[]),invalidate:r=>{if(typeof r=="function")l.push(r);else{const{href:i}=new URL(r,location.href);l.push(c=>c.href===i)}return je()},invalidateAll:()=>(j=!0,je()),preload_data:async r=>{const i=new URL(r,Ke(document));await Te(i)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:c,route:s}=t;if(!s)return;const d=await Fe(t.branch.length,c,s.errors);if(d){const u=await Q({url:i,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:s});t=u.state,D.$set(u.props),le().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...H,form:r.data,status:r.status}};D.$set(i),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var s;let c=!1;if(!v){const d={from:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(u=>u(d))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(O);try{sessionStorage[et]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=ze(i.composedPath()[0],n);if(!c)return;const{url:s,external:d,target:u}=Ee(c,e);if(!s)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const p=ce(c);if(!(c instanceof SVGAElement)&&s.protocol!==location.protocol&&!(s.protocol==="https:"||s.protocol==="http:"))return;if(d||p.reload){Me({url:s,type:"link"})||i.preventDefault(),v=!0;return}const[y,g]=s.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){R=!0,Re(O),t.url=s,C.page.set({...H,url:s}),C.page.notify();return}se({url:s,scroll:p.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:s.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),s=i.submitter;if(((s==null?void 0:s.formMethod)||c.method)!=="get")return;const u=new URL((s==null?void 0:s.hasAttribute("formaction"))&&(s==null?void 0:s.formAction)||c.action);if(We(u,e))return;const p=i.target,{noscroll:b,reload:y}=ce(p);if(y)return;i.preventDefault(),i.stopPropagation();const g=new FormData(p),k=s==null?void 0:s.getAttribute("name");k&&g.append(k,(s==null?void 0:s.getAttribute("value"))??""),u.search=new URLSearchParams(g).toString(),se({url:u,scroll:b?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[q]){if(i.state[q]===O)return;const s=i.state[q]-O;se({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[q]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&C.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:c,params:s,route:d,data:u,form:p})=>{f=!0;const b=new URL(location.href);({params:s={},route:d={id:null}}=ie(b,!1)||{});let y;try{const g=c.map(async(k,P)=>{const T=u[P];return we({loader:me[k],url:b,params:s,route:d,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await g[E]).data);return L},server_data_node:ye(T)})});y=await Q({url:b,params:s,branch:await Promise.all(g),status:r,error:i,form:p,route:Se.find(({id:k})=>k===d.id)??null})}catch(g){if(g instanceof Qe){await x(new URL(g.location,location.href));return}y=await oe({status:g instanceof Ae?g.status:500,error:await ee(g,{url:b,params:s,route:d}),url:b,route:d})}Ve(y)}}}async function xe(a,e){var m;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const l=await he(n.href),o=await l.json();if(!l.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ee(a,e){return a instanceof Ae?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(l=>{setTimeout(()=>{var o;l((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function sn({env:a,hydrate:e,paths:n,target:l,version:o}){mt(n),_t(o);const m=xt({target:l,base:n.base});ht({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{sn as start};
