import{S as C,i as F,s as G,C as Je,D as ue,E as ce,m as q,h as y,F as oe,b as S,G as Qe,B as ee,H as Ee,n as E,I as z,J as ye,K as pe,L as ke,f as p,t as T,w as X,x as Z,y as x,z as $,e as P,g as J,d as Q,a as B,c as A,M as we,N as be,O as lt,P as nt,k as N,q as Te,l as O,r as Le,Q as L,R as Se,T as it,U as st,V as ze,u as rt,W as at,X as ft,o as ot,Y as ut,p as V,Z as Me,_ as Re,$ as He}from"../../chunks/index-bbd4aece.js";import{n as ct,p as ht}from"../../chunks/stores-9990a2c5.js";import{c as ve}from"../../chunks/shared-23917130.js";function mt(i){let e,n=[i[0]],l={};for(let t=0;t<n.length;t+=1)l=Je(l,n[t]);return{c(){e=ue("path"),this.h()},l(t){e=ce(t,"path",{}),q(e).forEach(y),this.h()},h(){oe(e,l)},m(t,a){S(t,e,a)},p(t,[a]){oe(e,l=Qe(n,[a&1&&t[0]]))},i:ee,o:ee,d(t){t&&y(e)}}}function _t(i,e,n){let{data:l={}}=e;return i.$$set=t=>{"data"in t&&n(0,l=t.data)},[l]}class dt extends C{constructor(e){super(),F(this,e,_t,mt,G,{data:0})}}function gt(i){let e,n=[i[0]],l={};for(let t=0;t<n.length;t+=1)l=Je(l,n[t]);return{c(){e=ue("polygon"),this.h()},l(t){e=ce(t,"polygon",{}),q(e).forEach(y),this.h()},h(){oe(e,l)},m(t,a){S(t,e,a)},p(t,[a]){oe(e,l=Qe(n,[a&1&&t[0]]))},i:ee,o:ee,d(t){t&&y(e)}}}function bt(i,e,n){let{data:l={}}=e;return i.$$set=t=>{"data"in t&&n(0,l=t.data)},[l]}class vt extends C{constructor(e){super(),F(this,e,bt,gt,G,{data:0})}}function Et(i){let e;return{c(){e=ue("g")},l(n){e=ce(n,"g",{});var l=q(e);l.forEach(y)},m(n,l){S(n,e,l),e.innerHTML=i[0]},p(n,[l]){l&1&&(e.innerHTML=n[0])},i:ee,o:ee,d(n){n&&y(e)}}}function yt(i,e,n){let l=870711;function t(){return l+=1,`fa-${l.toString(16)}`}let a,{data:s}=e;function f(r){if(!r||!r.raw)return null;let o=r.raw;const _={};return o=o.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(v,w)=>{const h=t();return _[w]=h,` id="${h}"`}),o=o.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(v,w,h,d)=>{const k=w||d;return!k||!_[k]?v:`#${_[k]}`}),o}return i.$$set=r=>{"data"in r&&n(1,s=r.data)},i.$$.update=()=>{i.$$.dirty&2&&n(0,a=f(s))},[a,s]}class pt extends C{constructor(e){super(),F(this,e,yt,Et,G,{data:1})}}function kt(i){let e,n,l,t;const a=i[13].default,s=Ee(a,i,i[12],null);return{c(){e=ue("svg"),s&&s.c(),this.h()},l(f){e=ce(f,"svg",{version:!0,class:!0,x:!0,y:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var r=q(e);s&&s.l(r),r.forEach(y),this.h()},h(){E(e,"version","1.1"),E(e,"class",n="fa-icon "+i[0]+" svelte-1dof0an"),E(e,"x",i[8]),E(e,"y",i[9]),E(e,"width",i[1]),E(e,"height",i[2]),E(e,"aria-label",i[11]),E(e,"role",l=i[11]?"img":"presentation"),E(e,"viewBox",i[3]),E(e,"style",i[10]),z(e,"fa-spin",i[4]),z(e,"fa-pulse",i[6]),z(e,"fa-inverse",i[5]),z(e,"fa-flip-horizontal",i[7]==="horizontal"),z(e,"fa-flip-vertical",i[7]==="vertical")},m(f,r){S(f,e,r),s&&s.m(e,null),t=!0},p(f,[r]){s&&s.p&&(!t||r&4096)&&ye(s,a,f,f[12],t?ke(a,f[12],r,null):pe(f[12]),null),(!t||r&1&&n!==(n="fa-icon "+f[0]+" svelte-1dof0an"))&&E(e,"class",n),(!t||r&256)&&E(e,"x",f[8]),(!t||r&512)&&E(e,"y",f[9]),(!t||r&2)&&E(e,"width",f[1]),(!t||r&4)&&E(e,"height",f[2]),(!t||r&2048)&&E(e,"aria-label",f[11]),(!t||r&2048&&l!==(l=f[11]?"img":"presentation"))&&E(e,"role",l),(!t||r&8)&&E(e,"viewBox",f[3]),(!t||r&1024)&&E(e,"style",f[10]),(!t||r&17)&&z(e,"fa-spin",f[4]),(!t||r&65)&&z(e,"fa-pulse",f[6]),(!t||r&33)&&z(e,"fa-inverse",f[5]),(!t||r&129)&&z(e,"fa-flip-horizontal",f[7]==="horizontal"),(!t||r&129)&&z(e,"fa-flip-vertical",f[7]==="vertical")},i(f){t||(p(s,f),t=!0)},o(f){T(s,f),t=!1},d(f){f&&y(e),s&&s.d(f)}}}function wt(i,e,n){let{$$slots:l={},$$scope:t}=e,{class:a}=e,{width:s}=e,{height:f}=e,{box:r}=e,{spin:o=!1}=e,{inverse:_=!1}=e,{pulse:v=!1}=e,{flip:w=null}=e,{x:h=void 0}=e,{y:d=void 0}=e,{style:k=void 0}=e,{label:m=void 0}=e;return i.$$set=c=>{"class"in c&&n(0,a=c.class),"width"in c&&n(1,s=c.width),"height"in c&&n(2,f=c.height),"box"in c&&n(3,r=c.box),"spin"in c&&n(4,o=c.spin),"inverse"in c&&n(5,_=c.inverse),"pulse"in c&&n(6,v=c.pulse),"flip"in c&&n(7,w=c.flip),"x"in c&&n(8,h=c.x),"y"in c&&n(9,d=c.y),"style"in c&&n(10,k=c.style),"label"in c&&n(11,m=c.label),"$$scope"in c&&n(12,t=c.$$scope)},[a,s,f,r,o,_,v,w,h,d,k,m,t,l]}class Tt extends C{constructor(e){super(),F(this,e,wt,kt,G,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function Ve(i,e,n){const l=i.slice();return l[24]=e[n],l}function Be(i,e,n){const l=i.slice();return l[27]=e[n],l}function Ae(i){let e,n,l,t,a=i[6].paths&&Pe(i),s=i[6].polygons&&Ue(i),f=i[6].raw&&Ce(i);return{c(){a&&a.c(),e=B(),s&&s.c(),n=B(),f&&f.c(),l=P()},l(r){a&&a.l(r),e=A(r),s&&s.l(r),n=A(r),f&&f.l(r),l=P()},m(r,o){a&&a.m(r,o),S(r,e,o),s&&s.m(r,o),S(r,n,o),f&&f.m(r,o),S(r,l,o),t=!0},p(r,o){r[6].paths?a?(a.p(r,o),o&64&&p(a,1)):(a=Pe(r),a.c(),p(a,1),a.m(e.parentNode,e)):a&&(J(),T(a,1,1,()=>{a=null}),Q()),r[6].polygons?s?(s.p(r,o),o&64&&p(s,1)):(s=Ue(r),s.c(),p(s,1),s.m(n.parentNode,n)):s&&(J(),T(s,1,1,()=>{s=null}),Q()),r[6].raw?f?(f.p(r,o),o&64&&p(f,1)):(f=Ce(r),f.c(),p(f,1),f.m(l.parentNode,l)):f&&(J(),T(f,1,1,()=>{f=null}),Q())},i(r){t||(p(a),p(s),p(f),t=!0)},o(r){T(a),T(s),T(f),t=!1},d(r){a&&a.d(r),r&&y(e),s&&s.d(r),r&&y(n),f&&f.d(r),r&&y(l)}}}function Pe(i){let e,n,l=i[6].paths,t=[];for(let s=0;s<l.length;s+=1)t[s]=Ye(Be(i,l,s));const a=s=>T(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=P()},l(s){for(let f=0;f<t.length;f+=1)t[f].l(s);e=P()},m(s,f){for(let r=0;r<t.length;r+=1)t[r].m(s,f);S(s,e,f),n=!0},p(s,f){if(f&64){l=s[6].paths;let r;for(r=0;r<l.length;r+=1){const o=Be(s,l,r);t[r]?(t[r].p(o,f),p(t[r],1)):(t[r]=Ye(o),t[r].c(),p(t[r],1),t[r].m(e.parentNode,e))}for(J(),r=l.length;r<t.length;r+=1)a(r);Q()}},i(s){if(!n){for(let f=0;f<l.length;f+=1)p(t[f]);n=!0}},o(s){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)T(t[f]);n=!1},d(s){we(t,s),s&&y(e)}}}function Ye(i){let e,n;return e=new dt({props:{data:i[27]}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,t){x(e,l,t),n=!0},p(l,t){const a={};t&64&&(a.data=l[27]),e.$set(a)},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){$(e,l)}}}function Ue(i){let e,n,l=i[6].polygons,t=[];for(let s=0;s<l.length;s+=1)t[s]=We(Ve(i,l,s));const a=s=>T(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=P()},l(s){for(let f=0;f<t.length;f+=1)t[f].l(s);e=P()},m(s,f){for(let r=0;r<t.length;r+=1)t[r].m(s,f);S(s,e,f),n=!0},p(s,f){if(f&64){l=s[6].polygons;let r;for(r=0;r<l.length;r+=1){const o=Ve(s,l,r);t[r]?(t[r].p(o,f),p(t[r],1)):(t[r]=We(o),t[r].c(),p(t[r],1),t[r].m(e.parentNode,e))}for(J(),r=l.length;r<t.length;r+=1)a(r);Q()}},i(s){if(!n){for(let f=0;f<l.length;f+=1)p(t[f]);n=!0}},o(s){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)T(t[f]);n=!1},d(s){we(t,s),s&&y(e)}}}function We(i){let e,n;return e=new vt({props:{data:i[24]}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,t){x(e,l,t),n=!0},p(l,t){const a={};t&64&&(a.data=l[24]),e.$set(a)},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){$(e,l)}}}function Ce(i){let e,n,l;function t(s){i[15](s)}let a={};return i[6]!==void 0&&(a.data=i[6]),e=new pt({props:a}),be.push(()=>lt(e,"data",t)),{c(){X(e.$$.fragment)},l(s){Z(e.$$.fragment,s)},m(s,f){x(e,s,f),l=!0},p(s,f){const r={};!n&&f&64&&(n=!0,r.data=s[6],nt(()=>n=!1)),e.$set(r)},i(s){l||(p(e.$$.fragment,s),l=!0)},o(s){T(e.$$.fragment,s),l=!1},d(s){$(e,s)}}}function Lt(i){let e,n,l=i[6]&&Ae(i);return{c(){l&&l.c(),e=P()},l(t){l&&l.l(t),e=P()},m(t,a){l&&l.m(t,a),S(t,e,a),n=!0},p(t,a){t[6]?l?(l.p(t,a),a&64&&p(l,1)):(l=Ae(t),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(J(),T(l,1,1,()=>{l=null}),Q())},i(t){n||(p(l),n=!0)},o(t){T(l),n=!1},d(t){l&&l.d(t),t&&y(e)}}}function Dt(i){let e;const n=i[14].default,l=Ee(n,i,i[16],null),t=l||Lt(i);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){l?l.p&&(!e||s&65536)&&ye(l,n,a,a[16],e?ke(n,a[16],s,null):pe(a[16]),null):t&&t.p&&(!e||s&64)&&t.p(a,e?s:-1)},i(a){e||(p(t,a),e=!0)},o(a){T(t,a),e=!1},d(a){t&&t.d(a)}}}function qt(i){let e,n;return e=new Tt({props:{label:i[5],width:i[7],height:i[8],box:i[10],style:i[9],spin:i[1],flip:i[4],inverse:i[2],pulse:i[3],class:i[0],$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,t){x(e,l,t),n=!0},p(l,[t]){const a={};t&32&&(a.label=l[5]),t&128&&(a.width=l[7]),t&256&&(a.height=l[8]),t&1024&&(a.box=l[10]),t&512&&(a.style=l[9]),t&2&&(a.spin=l[1]),t&16&&(a.flip=l[4]),t&4&&(a.inverse=l[2]),t&8&&(a.pulse=l[3]),t&1&&(a.class=l[0]),t&65600&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){$(e,l)}}}let Fe=1;function It(i){if("iconName"in i&&"icon"in i){let e={},n=i.icon,l=i.iconName,t=n[0],a=n[1],s=n[4],f={width:t,height:a,paths:[{d:s}]};return e[l]=f,e}return i}function Nt(i,e,n){let{$$slots:l={},$$scope:t}=e,{class:a=""}=e,{data:s}=e,{scale:f=1}=e,{spin:r=!1}=e,{inverse:o=!1}=e,{pulse:_=!1}=e,{flip:v=null}=e,{label:w=null}=e,h=null,{style:d=null}=e,k,m,c,g;function I(){if(typeof s>"u")return;const b=It(s),[K]=Object.keys(b),D=b[K];D.paths||(D.paths=[]),D.d&&D.paths.push({d:D.d}),D.polygons||(D.polygons=[]),D.points&&D.polygons.push({points:D.points}),n(6,h=D)}function Y(){let b=1;return typeof f<"u"&&(b=Number(f)),isNaN(b)||b<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),Fe):b*Fe}function H(){return h?`0 0 ${h.width} ${h.height}`:`0 0 ${k} ${m}`}function M(){return h?Math.max(h.width,h.height)/16:1}function R(){return h?h.width/M()*Y():0}function te(){return h?h.height/M()*Y():0}function le(){let b="";d!==null&&(b+=d);let K=Y();return K===1?b.length===0?void 0:b:(b!==""&&!b.endsWith(";")&&(b+="; "),`${b}font-size: ${K}em`)}function ne(b){h=b,n(6,h)}return i.$$set=b=>{"class"in b&&n(0,a=b.class),"data"in b&&n(11,s=b.data),"scale"in b&&n(12,f=b.scale),"spin"in b&&n(1,r=b.spin),"inverse"in b&&n(2,o=b.inverse),"pulse"in b&&n(3,_=b.pulse),"flip"in b&&n(4,v=b.flip),"label"in b&&n(5,w=b.label),"style"in b&&n(13,d=b.style),"$$scope"in b&&n(16,t=b.$$scope)},i.$$.update=()=>{i.$$.dirty&14336&&(I(),n(7,k=R()),n(8,m=te()),n(9,c=le()),n(10,g=H()))},[a,r,o,_,v,w,h,k,m,c,g,s,f,d,l,ne,t]}class Ot extends C{constructor(e){super(),F(this,e,Nt,qt,G,{class:0,data:11,scale:12,spin:1,inverse:2,pulse:3,flip:4,label:5,style:13})}}const St={"align-right":{width:1792,height:1792,paths:[{d:"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 960v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zM1792 576v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1792 192v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"}]}};function Ge(i,e,n){const l=i.slice();return l[6]=e[n],l}function Ke(i){let e,n,l=i[6].label+"",t,a,s,f;return{c(){e=N("li"),n=N("a"),t=Te(l),s=B(),this.h()},l(r){e=O(r,"LI",{"aria-current":!0,class:!0});var o=q(e);n=O(o,"A",{href:!0,class:!0});var _=q(n);t=Le(_,l),_.forEach(y),s=A(o),o.forEach(y),this.h()},h(){E(n,"href",a=i[6].href),E(n,"class","svelte-1k4w2nf"),E(e,"aria-current",f=i[2].url.pathname===i[6].href?"page":void 0),E(e,"class","svelte-1k4w2nf")},m(r,o){S(r,e,o),L(e,n),L(n,t),L(e,s)},p(r,o){o&1&&l!==(l=r[6].label+"")&&rt(t,l),o&1&&a!==(a=r[6].href)&&E(n,"href",a),o&5&&f!==(f=r[2].url.pathname===r[6].href?"page":void 0)&&E(e,"aria-current",f)},d(r){r&&y(e)}}}function zt(i){let e,n,l,t,a,s,f,r,o,_,v,w=i[0],h=[];for(let d=0;d<w.length;d+=1)h[d]=Ke(Ge(i,w,d));return r=new Ot({props:{data:St}}),{c(){e=N("nav"),n=N("a"),l=Te("Enguerrand DE SMET"),t=B(),a=N("ul");for(let d=0;d<h.length;d+=1)h[d].c();s=B(),f=N("button"),X(r.$$.fragment),this.h()},l(d){e=O(d,"NAV",{class:!0});var k=q(e);n=O(k,"A",{id:!0,href:!0,class:!0});var m=q(n);l=Le(m,"Enguerrand DE SMET"),m.forEach(y),t=A(k),a=O(k,"UL",{class:!0});var c=q(a);for(let I=0;I<h.length;I+=1)h[I].l(c);c.forEach(y),s=A(k),f=O(k,"BUTTON",{class:!0,"aria-hidden":!0});var g=q(f);Z(r.$$.fragment,g),g.forEach(y),k.forEach(y),this.h()},h(){E(n,"id","title"),E(n,"href",ve),E(n,"class","svelte-1k4w2nf"),E(a,"class","svelte-1k4w2nf"),E(f,"class","mobile-dropdown-toggle svelte-1k4w2nf"),E(f,"aria-hidden","true"),E(e,"class","svelte-1k4w2nf"),z(e,"dropdown-opened",i[1])},m(d,k){S(d,e,k),L(e,n),L(n,l),L(e,t),L(e,a);for(let m=0;m<h.length;m+=1)h[m].m(a,null);L(e,s),L(e,f),x(r,f,null),o=!0,_||(v=[Se(window,"keydown",it(i[4])),Se(f,"click",i[3])],_=!0)},p(d,[k]){if(k&5){w=d[0];let m;for(m=0;m<w.length;m+=1){const c=Ge(d,w,m);h[m]?h[m].p(c,k):(h[m]=Ke(c),h[m].c(),h[m].m(a,null))}for(;m<h.length;m+=1)h[m].d(1);h.length=w.length}(!o||k&2)&&z(e,"dropdown-opened",d[1])},i(d){o||(p(r.$$.fragment,d),o=!0)},o(d){T(r.$$.fragment,d),o=!1},d(d){d&&y(e),we(h,d),$(r),_=!1,st(v)}}}function Mt(i,e,n){let l,t;ze(i,ct,o=>n(5,l=o)),ze(i,ht,o=>n(2,t=o));let{items:a}=e,s=!1;const f=()=>n(1,s=!s);function r(o){o.key==="Escape"&&n(1,s=!1)}return i.$$set=o=>{"items"in o&&n(0,a=o.items)},i.$$.update=()=>{i.$$.dirty&32&&l&&n(1,s=!1)},[a,s,t,f,r,l]}class Rt extends C{constructor(e){super(),F(this,e,Mt,zt,G,{items:0})}}function fe(i,{delay:e=0,duration:n=400,easing:l=at}={}){const t=+getComputedStyle(i).opacity;return{delay:e,duration:n,easing:l,css:a=>`opacity: ${a*t}`}}function je(i){let e,n,l,t,a,s,f,r,o;return{c(){e=N("div"),n=N("div"),a=B(),s=N("div"),this.h()},l(_){e=O(_,"DIV",{class:!0,style:!0});var v=q(e);n=O(v,"DIV",{class:!0,style:!0}),q(n).forEach(y),a=A(v),s=O(v,"DIV",{class:!0,style:!0}),q(s).forEach(y),v.forEach(y),this.h()},h(){E(n,"class","v-track svelte-iodyq2"),V(n,"height",i[6]+"px"),E(s,"class","v-thumb svelte-iodyq2"),V(s,"height",i[12]+"px"),V(s,"top",i[11]+"px"),E(e,"class","v-scrollbar svelte-iodyq2"),V(e,"height",i[6]+"px"),V(e,"margin",i[8]+"px "+i[14]+"px "+i[7]+"px "+i[13]+"px"),z(e,"fixed",i[9])},m(_,v){S(_,e,v),L(e,n),i[24](n),L(e,a),L(e,s),i[25](s),o=!0},p(_,v){(!o||v[0]&64)&&V(n,"height",_[6]+"px"),(!o||v[0]&4096)&&V(s,"height",_[12]+"px"),(!o||v[0]&2048)&&V(s,"top",_[11]+"px"),(!o||v[0]&64)&&V(e,"height",_[6]+"px"),(!o||v[0]&24960)&&V(e,"margin",_[8]+"px "+_[14]+"px "+_[7]+"px "+_[13]+"px"),(!o||v[0]&512)&&z(e,"fixed",_[9])},i(_){o||(Me(()=>{t&&t.end(1),l=Re(n,i[0],{}),l.start()}),Me(()=>{r&&r.end(1),f=Re(s,i[2],{}),f.start()}),o=!0)},o(_){l&&l.invalidate(),t=He(n,i[1],{}),f&&f.invalidate(),r=He(s,i[3],{}),o=!1},d(_){_&&y(e),i[24](null),_&&t&&t.end(),i[25](null),_&&r&&r.end()}}}function Ht(i){let e,n,l=i[10]&&je(i);return{c(){l&&l.c(),e=P()},l(t){l&&l.l(t),e=P()},m(t,a){l&&l.m(t,a),S(t,e,a),n=!0},p(t,a){t[10]?l?(l.p(t,a),a[0]&1024&&p(l,1)):(l=je(t),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(J(),T(l,1,1,()=>{l=null}),Q())},i(t){n||(p(l),n=!0)},o(t){T(l),n=!1},d(t){l&&l.d(t),t&&y(e)}}}function Vt(i,e,n){let l,t,a,s,f,r,o,_,v,w,h,d,k,m,c,{viewport:g}=e,{contents:I}=e,{hideAfter:Y=1e3}=e,{alwaysVisible:H=!1}=e,{initiallyVisible:M=!1}=e,{margin:R={}}=e,{vTrackIn:te=u=>fe(u,{duration:100})}=e,{vTrackOut:le=u=>fe(u,{duration:300})}=e,{vThumbIn:ne=u=>fe(u,{duration:100})}=e,{vThumbOut:b=u=>fe(u,{duration:300})}=e;const K=ft();let D,U,he=0,me=0,ie=0,_e=!1,de=!1;function Xe(u){if(!u)return;if(l==null||l(),typeof window.ResizeObserver>"u")throw new Error("window.ResizeObserver is missing.");n(9,_e=document.scrollingElement===u);const W=_e?document:u;W.addEventListener("scroll",qe,{passive:!0});const j=new ResizeObserver(Oe=>{for(const Yt of Oe)n(21,v=(u==null?void 0:u.scrollHeight)??0),n(6,h=(u==null?void 0:u.clientHeight)-(f+r))});return j.observe(u),()=>{W.removeEventListener("scroll",qe),j.unobserve(I),j.disconnect()}}function Ze(u){if(u)return a==null||a(),D.addEventListener("mouseenter",Ie),D.addEventListener("mouseleave",Ne),()=>{D.removeEventListener("mouseenter",Ie),D.removeEventListener("mouseleave",Ne)}}function xe(u){if(u)return s==null||s(),U.addEventListener("mousedown",se,{passive:!0}),U.addEventListener("touchstart",se,{passive:!0}),()=>{U.removeEventListener("mousedown",se),U.removeEventListener("touchstart",se)}}function $e(u){if(!u)return;if(t==null||t(),typeof window.ResizeObserver>"u")throw new Error("window.ResizeObserver is missing.");const W=new ResizeObserver(j=>{for(const Oe of j)n(21,v=(g==null?void 0:g.scrollHeight)??0)});return W.observe(u),()=>{W.unobserve(u),W.disconnect()}}function De(){ie=window.setTimeout(()=>{n(10,c=m&&(H||M&&!de)||!1),K("hide")},Y)}function ge(){ie&&(window.clearTimeout(ie),ie=0)}function qe(){m&&(ge(),De(),n(10,c=H||M&&!de||!0),n(22,w=(g==null?void 0:g.scrollTop)??0),de=!0,K("show"))}function Ie(){ge()}function Ne(){ge(),De()}function se(u){u.stopPropagation(),u.preventDefault(),he=g.scrollTop,me=u.changedTouches?u.changedTouches[0].clientY:u.clientY,document.addEventListener("mousemove",re),document.addEventListener("touchmove",re),document.addEventListener("mouseup",ae),document.addEventListener("touchend",ae)}function re(u){u.stopPropagation(),u.preventDefault();const W=u.changedTouches?u.changedTouches[0].clientY:u.clientY,j=v/h;n(15,g.scrollTop=he+j*(W-me),g)}function ae(u){u.stopPropagation(),u.preventDefault(),he=0,me=0,document.removeEventListener("mousemove",re),document.removeEventListener("touchmove",re),document.removeEventListener("mouseup",ae),document.removeEventListener("touchend",ae)}ot(()=>{n(15,g=g??document.scrollingElement),n(16,I=I??document.body)}),ut(()=>{l==null||l(),t==null||t(),a==null||a(),s==null||s()});function et(u){be[u?"unshift":"push"](()=>{D=u,n(4,D)})}function tt(u){be[u?"unshift":"push"](()=>{U=u,n(5,U)})}return i.$$set=u=>{"viewport"in u&&n(15,g=u.viewport),"contents"in u&&n(16,I=u.contents),"hideAfter"in u&&n(17,Y=u.hideAfter),"alwaysVisible"in u&&n(18,H=u.alwaysVisible),"initiallyVisible"in u&&n(19,M=u.initiallyVisible),"margin"in u&&n(20,R=u.margin),"vTrackIn"in u&&n(0,te=u.vTrackIn),"vTrackOut"in u&&n(1,le=u.vTrackOut),"vThumbIn"in u&&n(2,ne=u.vThumbIn),"vThumbOut"in u&&n(3,b=u.vThumbOut)},i.$$.update=()=>{i.$$.dirty[0]&32768&&(l=Xe(g)),i.$$.dirty[0]&65536&&(t=$e(I)),i.$$.dirty[0]&16&&(a=Ze(D)),i.$$.dirty[0]&32&&(s=xe(U)),i.$$.dirty[0]&1048576&&n(8,f=R.top??0),i.$$.dirty[0]&1048576&&n(7,r=R.bottom??0),i.$$.dirty[0]&1048576&&n(14,o=R.right??0),i.$$.dirty[0]&1048576&&n(13,_=R.left??0),i.$$.dirty[0]&32768&&n(21,v=(g==null?void 0:g.scrollHeight)??0),i.$$.dirty[0]&32768&&n(22,w=(g==null?void 0:g.scrollTop)??0),i.$$.dirty[0]&33152&&n(6,h=(g==null?void 0:g.clientHeight)??0-(f+r)),i.$$.dirty[0]&2097216&&n(12,d=v>0?h/v*h:0),i.$$.dirty[0]&6291520&&n(11,k=v>0?w/v*h:0),i.$$.dirty[0]&2097216&&n(23,m=v>h),i.$$.dirty[0]&9175040&&n(10,c=m&&(H||M))},[te,le,ne,b,D,U,h,r,f,_e,c,k,d,_,o,g,I,Y,H,M,R,v,w,m,et,tt]}class Bt extends C{constructor(e){super(),F(this,e,Vt,Ht,G,{viewport:15,contents:16,hideAfter:17,alwaysVisible:18,initiallyVisible:19,margin:20,vTrackIn:0,vTrackOut:1,vThumbIn:2,vThumbOut:3},null,[-1,-1])}}function At(i){let e,n,l,t,a,s,f,r,o,_,v,w,h,d;l=new Rt({props:{items:i[0]}});const k=i[2].default,m=Ee(k,i,i[1],null);return h=new Bt({props:{margin:{top:10,buttom:10}}}),{c(){e=N("div"),n=N("header"),X(l.$$.fragment),t=B(),a=N("div"),s=B(),f=N("main"),m&&m.c(),r=B(),o=N("footer"),_=N("p"),v=Te("Enguerrand DE SMET"),w=B(),X(h.$$.fragment),this.h()},l(c){e=O(c,"DIV",{class:!0});var g=q(e);n=O(g,"HEADER",{});var I=q(n);Z(l.$$.fragment,I),t=A(I),a=O(I,"DIV",{class:!0});var Y=q(a);Y.forEach(y),I.forEach(y),s=A(g),f=O(g,"MAIN",{class:!0});var H=q(f);m&&m.l(H),H.forEach(y),r=A(g),o=O(g,"FOOTER",{class:!0});var M=q(o);_=O(M,"P",{});var R=q(_);v=Le(R,"Enguerrand DE SMET"),R.forEach(y),M.forEach(y),w=A(g),Z(h.$$.fragment,g),g.forEach(y),this.h()},h(){E(a,"class","corner"),E(f,"class","svelte-n08hkt"),E(o,"class","svelte-n08hkt"),E(e,"class","app svelte-n08hkt")},m(c,g){S(c,e,g),L(e,n),x(l,n,null),L(n,t),L(n,a),L(e,s),L(e,f),m&&m.m(f,null),L(e,r),L(e,o),L(o,_),L(_,v),L(e,w),x(h,e,null),d=!0},p(c,[g]){m&&m.p&&(!d||g&2)&&ye(m,k,c,c[1],d?ke(k,c[1],g,null):pe(c[1]),null)},i(c){d||(p(l.$$.fragment,c),p(m,c),p(h.$$.fragment,c),d=!0)},o(c){T(l.$$.fragment,c),T(m,c),T(h.$$.fragment,c),d=!1},d(c){c&&y(e),$(l),m&&m.d(c),$(h)}}}function Pt(i,e,n){let{$$slots:l={},$$scope:t}=e;const a=[{label:"Gallerie",href:`${ve}/`},{label:"À propos",href:`${ve}/about`}];return i.$$set=s=>{"$$scope"in s&&n(1,t=s.$$scope)},[a,t,l]}class Ft extends C{constructor(e){super(),F(this,e,Pt,At,G,{})}}export{Ft as default};