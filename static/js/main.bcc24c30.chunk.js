(this.webpackJsonpnote_app=this.webpackJsonpnote_app||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),i=a.n(c),s=a(3),u=a.n(s),o=a(4),l=a(2),p=(a(12),a.p+"static/media/plus_button.35949e92.svg"),b=a.p+"static/media/lixeira_icon.e773633d.svg",d=a(0);var j=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],j=i[1],O=Object(n.useState)([]),f=Object(l.a)(O,2),h=f[0],g=f[1],x=Object(n.useState)("Notes App"),m=Object(l.a)(x,2),v=m[0],S=m[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),k=y[0],w=y[1],C=Object(n.useState)("Selecione uma Nota para utilizar o app..."),J=Object(l.a)(C,2),I=J[0],D=J[1],M=Object(n.useState)(!0),A=Object(l.a)(M,2),_=A[0],E=A[1],z=Object(n.useState)(""),B=Object(l.a)(z,2),K=B[0],P=B[1],V=Object(n.useState)(""),q=Object(l.a)(V,2),F=q[0],G=q[1],H=Object(n.useState)(""),L=Object(l.a)(H,2),Q=L[0],R=L[1],T=Object(n.useState)(""),U=Object(l.a)(T,2),W=U[0],X=U[1],Y=Object(n.useState)(8),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1];function te(){K?(P(K=""),G(F=""),R(Q=""),X(W="")):(P(K="active-burger-1"),G(F="active-burger-2"),R(Q="active-burger-3"),X(W="show-aside-mobile"))}function ae(){return g(h=JSON.parse(localStorage.getItem("notes-app-storage")||"[]")),r(a=h),j(s=a.map((function(e,t){return Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("span",{id:e.id,onClick:function(e){ne(e),te()},children:e.title})," ",Object(d.jsx)("span",{className:"icon-lixeira-span-list-aside",children:Object(d.jsx)("img",{onClick:function(e){ue(e)},id:e.id,className:"lixeira-icon",src:b,alt:"plus button"})})]},e.id)})).reverse()),h.sort((function(e,t){return new Date(e.updated)>new Date(t.updated)?-1:1}))}Object(n.useEffect)((function(){ae()}),[]);var ne=function(e){var t=a.find((function(t,a){return t.id==e.target.id}));S(v=t.title),ee($=t.title.length),D(I=t.body),w(k=e.target.id)};function re(){return(re=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.push({id:Math.floor(1e6*Math.random()),title:"new title",body:"",update:new Date}),S(v=h[h.length-1].title),ee($=h[h.length-1].title.length),D(I=h[h.length-1].body),w(k=h[h.length-1].id),localStorage.setItem("notes-app-storage",JSON.stringify(h)),ae();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=15;break}if("Notes App"!==v){e.next=4;break}return alert("Selecione uma nota para poder editar"),e.abrupt("return");case 4:if(!(t.target.value.length>29)){e.next=7;break}return alert("N\xfamero m\xe1ximo de caracteres atingido!"),e.abrupt("return");case 7:return ee($=t.target.value.length),S(v=t.target.value),e.next=11,se(k);case 11:(a=e.sent).push({id:k,title:v,body:I,update:new Date}),localStorage.setItem("notes-app-storage",JSON.stringify(a)),ae();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Notes App"!==v){e.next=3;break}return alert("Selecione uma nota para poder editar"),e.abrupt("return");case 3:return D(I=t.target.value),e.next=6,se(k);case 6:(a=e.sent).push({id:k,title:v,body:I,update:new Date}),localStorage.setItem("notes-app-storage",JSON.stringify(a)),ae();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(e){return a.filter((function(t){return Number(t.id)!=Number(e)}))},ue=function(e){w(k=e.target.id);var t=a.filter((function(e){return Number(e.id)!=Number(k)}));localStorage.setItem("notes-app-storage",JSON.stringify(t)),ae(),S(v="Notes App"),w(k=""),D(I="Selecione uma Nota para utilizar o app...")};function oe(){return(oe=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!=t.key){e.next=4;break}return e.next=3,E(_=!1);case 3:case 6:return e.abrupt("return");case 4:return e.next=6,E(_=!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{id:"menu-hamburge",children:[Object(d.jsx)("div",{className:"burger ".concat(K),onClick:function(){return te()}}),Object(d.jsx)("div",{className:"burger ".concat(F),onClick:function(){return te()}}),Object(d.jsx)("div",{className:"burger ".concat(Q),onClick:function(){return te()}})]}),Object(d.jsx)("div",{id:"characters-title-max-div",children:Object(d.jsxs)("span",{children:[$,"/29"]})}),Object(d.jsxs)("aside",{className:W,children:[Object(d.jsxs)("div",{id:"cabecalho-aside-div",children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsx)("img",{onClick:function(){!function(){re.apply(this,arguments)}(),te()},src:p,alt:"plus button"})]}),Object(d.jsx)("div",{id:"notes-list-div-aside",children:Object(d.jsx)("ul",{children:s})})]}),Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{id:"title-note-div",children:Object(d.jsx)("textarea",{onKeyPress:function(e){return oe.apply(this,arguments)},onChange:function(e){return ce.apply(this,arguments)},value:v})}),Object(d.jsx)("textarea",{onChange:function(e){return ie.apply(this,arguments)},value:I})]}),Object(d.jsx)("footer",{children:Object(d.jsx)("span",{children:" Make By Vitor M. "})})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bcc24c30.chunk.js.map