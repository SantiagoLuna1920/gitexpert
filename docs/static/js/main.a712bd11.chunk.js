(this.webpackJsonpgifexpert2=this.webpackJsonpgifexpert2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),u=function(e){var t=e.setCategory,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t([c]),u(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)},required:!0})})},o=n(7),j=n(4),d=n.n(j),l=n(6),b=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=1CrnyKB7zhLVnoyiiWu7a6biqxBWHBUe"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,url:e.images.downsized.url,title:e.title}})),e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),console.log("No se pudo conectar al api");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(s.jsx)("img",{src:n,alt:t}),Object(s.jsxs)("p",{children:[" ",t," "]})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{className:"animate__animated animate__bounce",children:[" ",t," "]}),c&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(s.jsx)(p,Object(o.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["One punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{setCategory:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(f,{category:e},e)}))})]})};n(14);c.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a712bd11.chunk.js.map