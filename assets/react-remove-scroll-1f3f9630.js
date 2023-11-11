import{_ as j,a as B,b as Q}from"./tslib-89fde298.js";import{r as a}from"./react-ce22c937.js";import{f as _,z as $,R as p}from"./react-remove-scroll-bar-59568cf2.js";import{a as q,e as G}from"./use-sidecar-6c3079da.js";import{u as J}from"./use-callback-ref-777fcfee.js";import{s as K}from"./react-style-singleton-7c887bcd.js";var V=q(),Y=function(){},X=a.forwardRef(function(e,r){var c=a.useRef(null),l=a.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),u=l[0],s=l[1],f=e.forwardProps,o=e.children,m=e.className,g=e.removeScrollBar,C=e.enabled,w=e.shards,b=e.sideCar,R=e.noIsolation,y=e.inert,t=e.allowPinchZoom,n=e.as,d=n===void 0?"div":n,h=e.gapMode,v=j(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=b,i=J([c,r]),E=B(B({},v),u);return a.createElement(a.Fragment,null,C&&a.createElement(S,{sideCar:V,removeScrollBar:g,shards:w,noIsolation:R,inert:y,setCallbacks:s,allowPinchZoom:!!t,lockRef:c,gapMode:h}),f?a.cloneElement(a.Children.only(o),B(B({},E),{ref:i})):a.createElement(d,B({},E,{className:m,ref:i}),o))});X.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};X.classNames={fullWidth:_,zeroRight:$};var D=!1;if(typeof window<"u")try{var N=Object.defineProperty({},"passive",{get:function(){return D=!0,!0}});window.addEventListener("test",N,N),window.removeEventListener("test",N,N)}catch{D=!1}var k=D?{passive:!1}:!1,U=function(e){return e.tagName==="TEXTAREA"},Z=function(e,r){var c=window.getComputedStyle(e);return c[r]!=="hidden"&&!(c.overflowY===c.overflowX&&!U(e)&&c[r]==="visible")},O=function(e){return Z(e,"overflowY")},ee=function(e){return Z(e,"overflowX")},I=function(e,r){var c=r.ownerDocument,l=r;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var u=F(e,l);if(u){var s=x(e,l),f=s[1],o=s[2];if(f>o)return!0}l=l.parentNode}while(l&&l!==c.body);return!1},re=function(e){var r=e.scrollTop,c=e.scrollHeight,l=e.clientHeight;return[r,c,l]},te=function(e){var r=e.scrollLeft,c=e.scrollWidth,l=e.clientWidth;return[r,c,l]},F=function(e,r){return e==="v"?O(r):ee(r)},x=function(e,r){return e==="v"?re(r):te(r)},ae=function(e,r){return e==="h"&&r==="rtl"?-1:1},ne=function(e,r,c,l,u){var s=ae(e,window.getComputedStyle(r).direction),f=s*l,o=c.target,m=r.contains(o),g=!1,C=f>0,w=0,b=0;do{var R=x(e,o),y=R[0],t=R[1],n=R[2],d=t-n-s*y;(y||d)&&F(e,o)&&(w+=d,b+=y),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!m&&o!==document.body||m&&(r.contains(o)||r===o));return(C&&(u&&Math.abs(w)<1||!u&&f>w)||!C&&(u&&Math.abs(b)<1||!u&&-f>b))&&(g=!0),g},T=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},A=function(e){return[e.deltaX,e.deltaY]},H=function(e){return e&&"current"in e?e.current:e},le=function(e,r){return e[0]===r[0]&&e[1]===r[1]},oe=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ce=0,P=[];function ie(e){var r=a.useRef([]),c=a.useRef([0,0]),l=a.useRef(),u=a.useState(ce++)[0],s=a.useState(K)[0],f=a.useRef(e);a.useEffect(function(){f.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(u));var t=Q([e.lockRef.current],(e.shards||[]).map(H),!0).filter(Boolean);return t.forEach(function(n){return n.classList.add("allow-interactivity-".concat(u))}),function(){document.body.classList.remove("block-interactivity-".concat(u)),t.forEach(function(n){return n.classList.remove("allow-interactivity-".concat(u))})}}},[e.inert,e.lockRef.current,e.shards]);var o=a.useCallback(function(t,n){if("touches"in t&&t.touches.length===2)return!f.current.allowPinchZoom;var d=T(t),h=c.current,v="deltaX"in t?t.deltaX:h[0]-d[0],S="deltaY"in t?t.deltaY:h[1]-d[1],i,E=t.target,M=Math.abs(v)>Math.abs(S)?"h":"v";if("touches"in t&&M==="h"&&E.type==="range")return!1;var L=I(M,E);if(!L)return!0;if(L?i=M:(i=M==="v"?"h":"v",L=I(M,E)),!L)return!1;if(!l.current&&"changedTouches"in t&&(v||S)&&(l.current=i),!i)return!0;var W=l.current||i;return ne(W,n,t,W==="h"?v:S,!0)},[]),m=a.useCallback(function(t){var n=t;if(!(!P.length||P[P.length-1]!==s)){var d="deltaY"in n?A(n):T(n),h=r.current.filter(function(i){return i.name===n.type&&(i.target===n.target||n.target===i.shadowParent)&&le(i.delta,d)})[0];if(h&&h.should){n.cancelable&&n.preventDefault();return}if(!h){var v=(f.current.shards||[]).map(H).filter(Boolean).filter(function(i){return i.contains(n.target)}),S=v.length>0?o(n,v[0]):!f.current.noIsolation;S&&n.cancelable&&n.preventDefault()}}},[]),g=a.useCallback(function(t,n,d,h){var v={name:t,delta:n,target:d,should:h,shadowParent:ue(d)};r.current.push(v),setTimeout(function(){r.current=r.current.filter(function(S){return S!==v})},1)},[]),C=a.useCallback(function(t){c.current=T(t),l.current=void 0},[]),w=a.useCallback(function(t){g(t.type,A(t),t.target,o(t,e.lockRef.current))},[]),b=a.useCallback(function(t){g(t.type,T(t),t.target,o(t,e.lockRef.current))},[]);a.useEffect(function(){return P.push(s),e.setCallbacks({onScrollCapture:w,onWheelCapture:w,onTouchMoveCapture:b}),document.addEventListener("wheel",m,k),document.addEventListener("touchmove",m,k),document.addEventListener("touchstart",C,k),function(){P=P.filter(function(t){return t!==s}),document.removeEventListener("wheel",m,k),document.removeEventListener("touchmove",m,k),document.removeEventListener("touchstart",C,k)}},[]);var R=e.removeScrollBar,y=e.inert;return a.createElement(a.Fragment,null,y?a.createElement(s,{styles:oe(u)}):null,R?a.createElement(p,{gapMode:e.gapMode}):null)}function ue(e){for(var r=null;e!==null;)e instanceof ShadowRoot&&(r=e.host,e=e.host),e=e.parentNode;return r}const se=G(V,ie);var z=a.forwardRef(function(e,r){return a.createElement(X,B({},e,{ref:r,sideCar:se}))});z.classNames=X.classNames;const ge=z;export{ge as R};
