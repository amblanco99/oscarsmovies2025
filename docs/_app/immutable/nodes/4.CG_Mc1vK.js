import{s as et,n as M,d as it,a as S,e as F}from"../chunks/DEf39f-1.js";import{S as at,i as lt,e as u,A as U,l as J,f as p,n as q,B as ut,x as B,g as x,o as L,p as A,j as y,k as j,q as H,s as P,d as ot,t as rt,a as nt,m as dt,c as ct,b as st,h as N}from"../chunks/CIU60hcM.js";import{g as ft,a as K}from"../chunks/CgU5AtxT.js";import{P as mt}from"../chunks/D1Ddcg75.js";import{e as D,t as pt}from"../chunks/DqUdTX-V.js";import{p as _t}from"../chunks/C6pXrN_m.js";function Q(i,t,c){const r=i.slice();return r[4]=t[c],r}function W(i,t,c){const r=i.slice();return r[7]=t[c],r}function X(i,t,c){const r=i.slice();return r[10]=t[c],r}function Y(i){let t,c=i[10]+"",r;return{c(){t=j("th"),r=H(c)},l(a){t=x(a,"TH",{});var e=L(t);r=A(e,c),e.forEach(u)},m(a,e){p(a,t,e),q(t,r)},p:M,d(a){a&&u(t)}}}function Z(i){let t,c=i[7]+"",r;return{c(){t=j("td"),r=H(c)},l(a){t=x(a,"TD",{});var e=L(t);r=A(e,c),e.forEach(u)},m(a,e){p(a,t,e),q(t,r)},p:M,d(a){a&&u(t)}}}function tt(i){let t,c,r=D(Object.values(i[4])),a=[];for(let e=0;e<r.length;e+=1)a[e]=Z(W(i,r,e));return{c(){t=j("tr");for(let e=0;e<a.length;e+=1)a[e].c();c=P()},l(e){t=x(e,"TR",{});var s=L(t);for(let l=0;l<a.length;l+=1)a[l].l(s);c=y(s),s.forEach(u)},m(e,s){p(e,t,s);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(t,null);q(t,c)},p(e,s){if(s&2){r=D(Object.values(e[4]));let l;for(l=0;l<r.length;l+=1){const _=W(e,r,l);a[l]?a[l].p(_,s):(a[l]=Z(_),a[l].c(),a[l].m(t,c))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},d(e){e&&u(t),U(a,e)}}}function ht(i){let t,c=i[0].metadataTable+"",r,a,e,s,l,_,h,f,E,v=i[0].download+"",C,R,O,k,$=D(Object.keys(i[1][0])),o=[];for(let n=0;n<$.length;n+=1)o[n]=Y(X(i,$,n));let m=D(i[1]),g=[];for(let n=0;n<m.length;n+=1)g[n]=tt(Q(i,m,n));return{c(){t=j("h2"),r=H(c),a=P(),e=j("div"),s=j("table"),l=j("tr");for(let n=0;n<o.length;n+=1)o[n].c();_=P();for(let n=0;n<g.length;n+=1)g[n].c();h=P(),f=j("div"),E=j("button"),C=H(v),R=H(" CSV"),this.h()},l(n){t=x(n,"H2",{});var b=L(t);r=A(b,c),b.forEach(u),a=y(n),e=x(n,"DIV",{class:!0});var d=L(e);s=x(d,"TABLE",{class:!0});var T=L(s);l=x(T,"TR",{});var G=L(l);for(let w=0;w<o.length;w+=1)o[w].l(G);G.forEach(u),_=y(T);for(let w=0;w<g.length;w+=1)g[w].l(T);T.forEach(u),d.forEach(u),h=y(n),f=x(n,"DIV",{class:!0});var z=L(f);E=x(z,"BUTTON",{class:!0});var I=L(E);C=A(I,v),R=A(I," CSV"),I.forEach(u),z.forEach(u),this.h()},h(){B(s,"class","metadata-table"),B(e,"class","metadata-table-container svelte-1akrh8d"),B(E,"class","default-button"),B(f,"class","button-container")},m(n,b){p(n,t,b),q(t,r),p(n,a,b),p(n,e,b),q(e,s),q(s,l);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,null);q(s,_);for(let d=0;d<g.length;d+=1)g[d]&&g[d].m(s,null);p(n,h,b),p(n,f,b),q(f,E),q(E,C),q(E,R),O||(k=ut(E,"click",i[2]),O=!0)},p(n,[b]){if(b&1&&c!==(c=n[0].metadataTable+"")&&J(r,c),b&2){$=D(Object.keys(n[1][0]));let d;for(d=0;d<$.length;d+=1){const T=X(n,$,d);o[d]?o[d].p(T,b):(o[d]=Y(T),o[d].c(),o[d].m(l,null))}for(;d<o.length;d+=1)o[d].d(1);o.length=$.length}if(b&2){m=D(n[1]);let d;for(d=0;d<m.length;d+=1){const T=Q(n,m,d);g[d]?g[d].p(T,b):(g[d]=tt(T),g[d].c(),g[d].m(s,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=m.length}b&1&&v!==(v=n[0].download+"")&&J(C,v)},i:M,o:M,d(n){n&&(u(t),u(a),u(e),u(h),u(f)),U(o,n),U(g,n),O=!1,k()}}}function gt(i,t,c){let r;it(i,pt,l=>c(0,r=l));let{metadata:a=_t}=t;const e=a.map(l=>{const _={};for(let[h,f]of Object.entries(l))/^_/.test(h)||(_[h]=f);return _});function s(){const l=",";let _=[Object.keys(e[0]).join(l)];for(let E of e)_.push(Object.values(E).map(v=>new RegExp(`${l}`).test(v)?`"${v}"`:v).join(l));_=_.join(`
`);const h=document.createElement("a"),f=new Blob([_],{type:"text/plain"});h.href=URL.createObjectURL(f),h.download="metadata.csv",h.click(),URL.revokeObjectURL(h.href)}return i.$$set=l=>{"metadata"in l&&c(3,a=l.metadata)},[r,e,s,a]}class bt extends at{constructor(t){super(),lt(this,t,gt,ht,et,{metadata:3})}}function vt(i){let t,c="Metadatos",r,a,e="En esta sección se encuentran los metadatos de la colección. Pueden descargarse y usarse libremente.",s,l,_="Protocolo",h,f,E="Este es el protocolo que especifica la construcción de los datos de la colección:",v,C,R="<thead><tr><th>Dato</th> <th>Descripción</th> <th>Tipo</th></tr></thead> <tbody><tr><td>pid</td> <td>Identificador único</td> <td>categórico</td></tr> <tr><td>label</td> <td>Título de la película en idioma original</td> <td>categórico</td></tr> <tr><td>Título_español</td> <td>Título de la película en la traducción oficial de Latinoamérica</td> <td>categórico</td></tr> <tr><td>Director</td> <td>Nombre del director(es) de la película</td> <td>categórico</td></tr> <tr><td>Guion</td> <td>Nombre del escritor(es) del guion de la película</td> <td>categórico</td></tr> <tr><td>Actores_principales</td> <td>Nombre del actor(es) protagonistas de la historia</td> <td>categórico</td></tr> <tr><td>Editor</td> <td>Nombre del editor(es) de la película</td> <td>categórico</td></tr> <tr><td>Cinematografía</td> <td>Nombre de la persona que realizó la cinematografía de la película</td> <td>categórico</td></tr> <tr><td>Género</td> <td>Género principal de la película, mantener la tendencia principal. Si es 80% drama y 20% comedia, colocar dominante: drama.</td> <td>categórico</td></tr> <tr><td>País</td> <td>País en el que se produjo la película, lugar en el que filmaron, no tiene que coincidir con idioma</td> <td>categórico</td></tr> <tr><td>Año</td> <td>Año en el que se estrenó la película. Escrito en número completo (p.ej 1589)</td> <td>ordinal</td></tr> <tr><td>Duración</td> <td>Número de minutos que dura la película. Escrito solo en minutos, es decir si es una hora colocar 60 (p. ej 180)</td> <td>númerico</td></tr> <tr><td>Idioma</td> <td>Idiomas que se hablan en la película, puede que no corresponda al país.</td> <td>categórico</td></tr> <tr><td>Productora</td> <td>La productora principal, es decir la que desarrolló la película y no la distribuidora.</td> <td>categórico</td></tr> <tr><td>Presupuesto</td> <td>El dinero invertido en la película. La moneda es el dólar. Colocar el número completo separado por puntos (p.ej 4.000.000)</td> <td>númerico</td></tr> <tr><td>Recaudo</td> <td>El recaudo de la película. La moneda es el dólar. Colocar el número completo separado por puntos (p.ej 4.000.000)</td> <td>númerico</td></tr></tbody>",O,k,$;return k=new bt({}),{c(){t=j("h1"),t.textContent=c,r=P(),a=j("p"),a.textContent=e,s=P(),l=j("h2"),l.textContent=_,h=P(),f=j("p"),f.textContent=E,v=P(),C=j("table"),C.innerHTML=R,O=P(),st(k.$$.fragment)},l(o){t=x(o,"H1",{"data-svelte-h":!0}),N(t)!=="svelte-rtrtq6"&&(t.textContent=c),r=y(o),a=x(o,"P",{"data-svelte-h":!0}),N(a)!=="svelte-1fxghb2"&&(a.textContent=e),s=y(o),l=x(o,"H2",{"data-svelte-h":!0}),N(l)!=="svelte-1oups7d"&&(l.textContent=_),h=y(o),f=x(o,"P",{"data-svelte-h":!0}),N(f)!=="svelte-19wuz58"&&(f.textContent=E),v=y(o),C=x(o,"TABLE",{"data-svelte-h":!0}),N(C)!=="svelte-8rj6gx"&&(C.innerHTML=R),O=y(o),ct(k.$$.fragment,o)},m(o,m){p(o,t,m),p(o,r,m),p(o,a,m),p(o,s,m),p(o,l,m),p(o,h,m),p(o,f,m),p(o,v,m),p(o,C,m),p(o,O,m),dt(k,o,m),$=!0},p:M,i(o){$||(nt(k.$$.fragment,o),$=!0)},o(o){rt(k.$$.fragment,o),$=!1},d(o){o&&(u(t),u(r),u(a),u(s),u(l),u(h),u(f),u(v),u(C),u(O)),ot(k,o)}}}function xt(i){let t,c;const r=[i[0],V];let a={$$slots:{default:[vt]},$$scope:{ctx:i}};for(let e=0;e<r.length;e+=1)a=S(a,r[e]);return t=new mt({props:a}),{c(){st(t.$$.fragment)},l(e){ct(t.$$.fragment,e)},m(e,s){dt(t,e,s),c=!0},p(e,[s]){const l=s&1?ft(r,[s&1&&K(e[0]),s&0&&K(V)]):{};s&2&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){c||(nt(t.$$.fragment,e),c=!0)},o(e){rt(t.$$.fragment,e),c=!1},d(e){ot(t,e)}}}const V={name:"metadata",layout:"page"},{name:Lt,layout:yt}=V;function jt(i,t,c){return i.$$set=r=>{c(0,t=S(S({},t),F(r)))},t=F(t),[t]}class Pt extends at{constructor(t){super(),lt(this,t,jt,xt,et,{})}}export{Pt as component};
