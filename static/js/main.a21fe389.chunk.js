(this.webpackJsonplist_on_the_fridge=this.webpackJsonplist_on_the_fridge||[]).push([[0],{137:function(e,a,t){e.exports=t(231)},142:function(e,a,t){},148:function(e,a,t){},231:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(10),l=t.n(r),i=(t(142),t(272)),c=t(275),s=t(277),m=t(90),d=t.n(m),u=Object(i.a)((function(e){return{root:{display:"flex"},toolBar:{justifyContent:"space-between"},bottomToolbar:{background:"#E5E5E5",minHeight:"5px"}}}));function p(){var e=u();return o.a.createElement("div",{className:e.root},o.a.createElement(c.a,{position:"static",style:{background:"transparent",boxShadow:"none"}},o.a.createElement(s.a,{className:e.toolBar},o.a.createElement("img",{src:d.a,alt:"logo"}))))}var f=t(69),g=t(128),h=t(283),E=t(35),b=t(284),v=t(285),w=t(93),y=t.n(w),_=t(282),x=t(291),k=t(281),N=t(280),j=t(292),C=t(278),O=t(279),A=t(91),S=t.n(A),W=t(289),B=o.a.forwardRef((function(e,a){return o.a.createElement(C.a,Object.assign({direction:"up",ref:a},e))}));function T(){var e=o.a.useState(!1),a=Object(f.a)(e,2),t=a[0],n=a[1],r=function(){n(!1)};return o.a.createElement("div",null,o.a.createElement(O.a,{color:"primary","aria-label":"add",size:"large",onClick:function(){n(!0)}},o.a.createElement(S.a,null)),o.a.createElement(x.a,{open:t,TransitionComponent:B,keepMounted:!0,onClose:r,"aria-labelledby":"form-dialog-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement(j.a,{id:"alert-dialog-slide-title"},"Add a new product on your list"),o.a.createElement(N.a,null,o.a.createElement(W.a,{autoFocus:!0,margin:"normal",id:"product",label:"e.g. Beer",fullWidth:!0})),o.a.createElement(k.a,null,o.a.createElement(_.a,{onClick:r,color:"primary"},"Disagree"),o.a.createElement(_.a,{onClick:r,color:"primary"},"Agree"))))}var I=t(94),F=t.n(I),L=Object(g.a)({palette:{primary:{main:"#f3d250"}}}),P=Object(i.a)({root:{width:"100%",overflow:"hidden",position:"fixed",bottom:0,backgroundColor:"#435E77"}});function R(){var e=P(),a=o.a.useState((function(){return Number(localStorage.getItem("TabValue")||0)})),t=Object(f.a)(a,2),n=t[0],r=t[1];return o.a.createElement(h.a,{theme:L},o.a.createElement(b.a,{value:n,onChange:function(e,a){localStorage.setItem("TabValue",a),r(a)},showLabels:!0,className:e.root},o.a.createElement(v.a,{component:E.b,to:"/list_on_the_fridge/",label:"List",icon:o.a.createElement(y.a,null)}),o.a.createElement(T,null),o.a.createElement(v.a,{component:E.b,to:"/list_on_the_fridge/Products",label:"Products",icon:o.a.createElement(F.a,null)})))}t(148);var D=t(95),U=t.n(D),z=t(96),H=t(129),J=t(77),V=t(125),M=t.n(V);function $(){var e={bounce:{animation:"x 1s",animationName:H.a.keyframes(z.bounce,"bounce")}},a=Object(i.a)((function(e){return{root:{margin:"20vh"},extendedIcon:{marginRight:e.spacing(1)}}}))();return o.a.createElement(J.a,{className:a.root},o.a.createElement("div",{className:"test",style:e.bounce},o.a.createElement(O.a,{variant:"extended",color:"secondary","aria-label":"add",component:E.b,to:"/list_on_the_fridge/"},o.a.createElement(M.a,{className:a.extendedIcon}),"Time For Shopping")))}var q=t(232),G=t(293),K=t(287),Q=t(286),X=t(126),Y=t.n(X),Z=t(127),ee=t.n(Z),ae=Object(i.a)((function(e){return{root1:{padding:"2px 4px",display:"flex",alignItems:"center",width:"90%",justifyContent:"space-around",marginTop:"10%"},root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"90%"},input:{marginLeft:e.spacing(1),flex:1},iconButtonDelete:{padding:10,color:e.palette.primary.dark},divider:{height:28,margin:4}}}));function te(){var e=ae();return o.a.createElement("div",{className:e.root1},o.a.createElement(q.a,{component:"form",className:e.root},o.a.createElement(G.a,{className:e.input,placeholder:"Add product on the list",inputProps:{"aria-label":"search google maps"},disabled:!0}),o.a.createElement(Q.a,{type:"submit",color:"primary",className:e.iconButtonDelete,"aria-label":"search"},o.a.createElement(Y.a,null)),o.a.createElement(K.a,{className:e.divider,orientation:"vertical"}),o.a.createElement(Q.a,{color:"primary",className:e.iconButton,"aria-label":"directions"},o.a.createElement(ee.a,null))))}var ne=Object(i.a)({root:{display:"flex",margin:"20px",justifyContent:"center"},button:{marginLeft:"5px"}});function oe(){var e=ne();return o.a.createElement("div",{className:e.root},o.a.createElement(te,null))}var re=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}}}}));function le(){var e=re();return o.a.createElement("div",{className:e.root},o.a.createElement(q.a,{elevation:0}),o.a.createElement(q.a,null),o.a.createElement(q.a,{elevation:3}))}var ie=t(29),ce=t(288),se=Object(g.a)({palette:{primary:{main:"#145d75",dark:"#ce1212"},secondary:{main:"#F3D250"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:15}});var me=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ce.a,null),o.a.createElement(h.a,{theme:se},o.a.createElement(p,null),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:U.a,className:"App-logo",alt:"logo"}),o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement(ie.c,null,o.a.createElement(ie.a,{exact:!0,path:"/list_on_the_fridge/",component:oe}),o.a.createElement(ie.a,{path:"/list_on_the_fridge/Products",component:le}),o.a.createElement(ie.a,{component:$}))),o.a.createElement(R,null)))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(me,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/list_on_the_fridge",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/list_on_the_fridge","/service-worker.js");de?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(a,e)}))}}()},90:function(e,a,t){e.exports=t.p+"static/media/logoFont.4429dcd1.png"},95:function(e,a,t){e.exports=t.p+"static/media/logoOnScreen.db1b4dfe.png"}},[[137,1,2]]]);
//# sourceMappingURL=main.a21fe389.chunk.js.map