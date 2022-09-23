(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[38],{135:function(e,t,a){"use strict";var r=a(2),n=a(3),o=a(6),i=a.n(o),l=a(1),c=a.n(l),s=(a(83),a(5)),u=a.n(s),d=["as","className","type","tooltip"],f={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},m=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,l=e.className,s=e.type,u=void 0===s?"valid":s,f=e.tooltip,m=void 0!==f&&f,v=Object(n.a)(e,d);return c.a.createElement(o,Object(r.a)({},v,{ref:t,className:i()(l,u+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=f;var v=m,p=c.a.createContext({controlId:void 0}),h=a(7),b=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.type,f=void 0===d?"checkbox":d,m=e.isValid,v=void 0!==m&&m,y=e.isInvalid,g=void 0!==y&&y,x=e.isStatic,N=e.as,w=void 0===N?"input":N,O=Object(n.a)(e,b),E=Object(l.useContext)(p),j=E.controlId,k=E.custom?[s,"custom-control-input"]:[o,"form-check-input"],P=k[0],C=k[1];return o=Object(h.a)(P,C),c.a.createElement(w,Object(r.a)({},O,{ref:t,type:f,id:a||j,className:i()(u,o,v&&"is-valid",g&&"is-invalid",x&&"position-static")}))}));y.displayName="FormCheckInput";var g=y,x=["bsPrefix","bsCustomPrefix","className","htmlFor"],N=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,x),f=Object(l.useContext)(p),m=f.controlId,v=f.custom?[o,"custom-control-label"]:[a,"form-check-label"],b=v[0],y=v[1];return a=Object(h.a)(b,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||m,className:i()(s,a)}))}));N.displayName="FormCheckLabel";var w=N,O=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],E=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,f=e.disabled,m=void 0!==f&&f,b=e.isValid,y=void 0!==b&&b,x=e.isInvalid,N=void 0!==x&&x,E=e.feedbackTooltip,j=void 0!==E&&E,k=e.feedback,P=e.className,C=e.style,I=e.title,F=void 0===I?"":I,L=e.type,S=void 0===L?"checkbox":L,R=e.label,T=e.children,_=e.custom,G=e.as,V=void 0===G?"input":G,z=Object(n.a)(e,O),A="switch"===S||_,J=A?[s,"custom-control"]:[o,"form-check"],M=J[0],D=J[1];o=Object(h.a)(M,D);var Y=Object(l.useContext)(p).controlId,H=Object(l.useMemo)((function(){return{controlId:a||Y,custom:A}}),[Y,A,a]),K=A||null!=R&&!1!==R&&!T,U=c.a.createElement(g,Object(r.a)({},z,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:N,isStatic:!K,disabled:m,as:V}));return c.a.createElement(p.Provider,{value:H},c.a.createElement("div",{style:C,className:i()(P,o,A&&"custom-"+S,d&&o+"-inline")},T||c.a.createElement(c.a.Fragment,null,U,K&&c.a.createElement(w,{title:F},R),(y||N)&&c.a.createElement(v,{type:y?"valid":"invalid",tooltip:j},k))))}));E.displayName="FormCheck",E.Input=g,E.Label=w;var j=E,k=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],P=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,m=e.lang,v=e.as,b=void 0===v?"input":v,y=Object(n.a)(e,k),g=Object(l.useContext)(p),x=g.controlId,N=g.custom?[s,"custom-file-input"]:[o,"form-control-file"],w=N[0],O=N[1];return o=Object(h.a)(w,O),c.a.createElement(b,Object(r.a)({},y,{ref:t,id:a||x,type:"file",lang:m,className:i()(u,o,d&&"is-valid",f&&"is-invalid")}))}));P.displayName="FormFileInput";var C=P,I=["bsPrefix","bsCustomPrefix","className","htmlFor"],F=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,I),f=Object(l.useContext)(p),m=f.controlId,v=f.custom?[o,"custom-file-label"]:[a,"form-file-label"],b=v[0],y=v[1];return a=Object(h.a)(b,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||m,className:i()(s,a),"data-browse":d["data-browse"]}))}));F.displayName="FormFileLabel";var L=F,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],R=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,f=e.isValid,m=void 0!==f&&f,b=e.isInvalid,y=void 0!==b&&b,g=e.feedbackTooltip,x=void 0!==g&&g,N=e.feedback,w=e.className,O=e.style,E=e.label,j=e.children,k=e.custom,P=e.lang,I=e["data-browse"],F=e.as,R=void 0===F?"div":F,T=e.inputAs,_=void 0===T?"input":T,G=Object(n.a)(e,S),V=k?[s,"custom"]:[o,"form-file"],z=V[0],A=V[1];o=Object(h.a)(z,A);var J=Object(l.useContext)(p).controlId,M=Object(l.useMemo)((function(){return{controlId:a||J,custom:k}}),[J,k,a]),D=null!=E&&!1!==E&&!j,Y=c.a.createElement(C,Object(r.a)({},G,{ref:t,isValid:m,isInvalid:y,disabled:d,as:_,lang:P}));return c.a.createElement(p.Provider,{value:M},c.a.createElement(R,{style:O,className:i()(w,o,k&&"custom-file")},j||c.a.createElement(c.a.Fragment,null,k?c.a.createElement(c.a.Fragment,null,Y,D&&c.a.createElement(L,{"data-browse":I},E)):c.a.createElement(c.a.Fragment,null,D&&c.a.createElement(L,null,E),Y),(m||y)&&c.a.createElement(v,{type:m?"valid":"invalid",tooltip:x},N))))}));R.displayName="FormFile",R.Input=C,R.Label=L;var T=R,_=(a(47),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),G=c.a.forwardRef((function(e,t){var a,o,s=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,m=e.htmlSize,v=e.id,b=e.className,y=e.isValid,g=void 0!==y&&y,x=e.isInvalid,N=void 0!==x&&x,w=e.plaintext,O=e.readOnly,E=e.custom,j=e.as,k=void 0===j?"input":j,P=Object(n.a)(e,_),C=Object(l.useContext)(p).controlId,I=E?[u,"custom"]:[s,"form-control"],F=I[0],L=I[1];if(s=Object(h.a)(F,L),w)(o={})[s+"-plaintext"]=!0,a=o;else if("file"===d){var S;(S={})[s+"-file"]=!0,a=S}else if("range"===d){var R;(R={})[s+"-range"]=!0,a=R}else if("select"===k&&E){var T;(T={})[s+"-select"]=!0,T[s+"-select-"+f]=f,a=T}else{var G;(G={})[s]=!0,G[s+"-"+f]=f,a=G}return c.a.createElement(k,Object(r.a)({},P,{type:d,size:m,ref:t,readOnly:O,id:v||C,className:i()(b,a,g&&"is-valid",N&&"is-invalid")}))}));G.displayName="FormControl";var V=Object.assign(G,{Feedback:v}),z=["bsPrefix","className","children","controlId","as"],A=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,m=Object(n.a)(e,z);a=Object(h.a)(a,"form-group");var v=Object(l.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(p.Provider,{value:v},c.a.createElement(f,Object(r.a)({},m,{ref:t,className:i()(o,a)}),s))}));A.displayName="FormGroup";var J=A,M=["bsPrefix","className","as"],D=["xl","lg","md","sm","xs"],Y=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"div":l,u=Object(n.a)(e,M),d=Object(h.a)(a,"col"),f=[],m=[];return D.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=a&&m.push("offset"+i+"-"+a)})),f.length||f.push(d),c.a.createElement(s,Object(r.a)({},u,{ref:t,className:i.a.apply(void 0,[o].concat(f,m))}))}));Y.displayName="Col";var H=Y,K=["as","bsPrefix","column","srOnly","className","htmlFor"],U=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"label":a,s=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,m=e.htmlFor,v=Object(n.a)(e,K),b=Object(l.useContext)(p).controlId;s=Object(h.a)(s,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var g=i()(f,s,d&&"sr-only",u&&y);return m=m||b,u?c.a.createElement(H,Object(r.a)({ref:t,as:"label",className:g,htmlFor:m},v)):c.a.createElement(o,Object(r.a)({ref:t,className:g,htmlFor:m},v))}));U.displayName="FormLabel",U.defaultProps={column:!1,srOnly:!1};var q=U,B=["bsPrefix","className","as","muted"],Q=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"small":l,u=e.muted,d=Object(n.a)(e,B);return a=Object(h.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},d,{ref:t,className:i()(o,a,u&&"text-muted")}))}));Q.displayName="FormText";var W=Q,X=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));X.displayName="Switch",X.Input=j.Input,X.Label=j.Label;var Z=X,$=a(48),ee=["bsPrefix","inline","className","validated","as"],te=Object($.a)("form-row"),ae=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,l=e.className,s=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(n.a)(e,ee);return a=Object(h.a)(a,"form"),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i()(l,s&&"was-validated",o&&a+"-inline")}))}));ae.displayName="Form",ae.defaultProps={inline:!1},ae.Row=te,ae.Group=J,ae.Control=V,ae.Check=j,ae.File=T,ae.Switch=Z,ae.Label=q,ae.Text=W;t.a=ae},550:function(e,t,a){"use strict";a.r(t);var r=a(142),n=a(37),o=a(1),i=a.n(o),l=a(9),c=a(135),s=a(143),u=a.n(s);function d(){d=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),i=new E(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return k()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=N(i,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=c;var u={};function f(){}function m(){}function v(){}var p={};l(p,n,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(j([])));b&&b!==t&&a.call(b,n)&&(p=b);var y=v.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,l(y,"constructor",v),l(v,"constructor",m),m.displayName=l(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(x.prototype),l(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new x(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,i,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){Object(o.useEffect)((function(){localStorage.clear()}),[]);var e=Object(o.useState)(""),t=Object(n.a)(e,2),a=t[0],s=t[1],f=Object(o.useState)(""),m=Object(n.a)(f,2),v=m[0],p=m[1],h=Object(o.useState)(!1),b=Object(n.a)(h,2),y=b[0],g=b[1],x=Object(o.useState)(""),N=Object(n.a)(x,2),w=N[0],O=N[1];function E(){return(E=Object(r.a)(d().mark((function e(t){var r,n,o,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a,v),e.prev=2,e.next=5,u.a.post("https://backend.klivepay.com/api/admin/login",JSON.stringify({email:a,password:v}),{headers:{"Content-Type":"application/json"}});case 5:o=e.sent,console.log(JSON.stringify(null===o||void 0===o?void 0:o.data)),null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.accessToken,localStorage.setItem("token",null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.accessToken),s(""),p(""),g(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),(null===e.t0||void 0===e.t0?void 0:e.t0.response)?400===(null===(i=e.t0.response)||void 0===i?void 0:i.status)?(O("Invalid Credentialials"),g(!1)):O("Login failed"):O("No Server Response"),console.log(e.t0);case 18:console.log(y);case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-6 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"brand-logo"},i.a.createElement("h3",{className:w?"text-danger":"errMsg"},w)),i.a.createElement("h4",null,"Hello! let's get started"),i.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),i.a.createElement(c.a,{className:"pt-3"},i.a.createElement(c.a.Group,{className:"d-flex search-field"},i.a.createElement(c.a.Control,{type:"email",placeholder:"Username",onChange:function(e){return function(e){s(e.target.value)}(e)},value:a,size:"lg",className:"h-auto"})),i.a.createElement(c.a.Group,{className:"d-flex search-field"},i.a.createElement(c.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return function(e){p(e.target.value)}(e)},value:v,size:"lg",className:"h-auto"})),i.a.createElement("div",{className:"mt-3"},y?i.a.createElement(l.a,{to:"/admin/dashboard"}):i.a.createElement("button",{onClick:function(e){return function(e){return E.apply(this,arguments)}(e)},className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"},"SIGN IN")),i.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label text-muted"},i.a.createElement("input",{type:"checkbox",className:"form-check-input"}),i.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-black"},"Forgot password?")),i.a.createElement("div",{className:"mb-2"},i.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},i.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook"))))))))}}}]);
//# sourceMappingURL=38.0c78736d.chunk.js.map