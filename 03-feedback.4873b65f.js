!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o,i,a,u,f="Expected a function",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,s=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof n&&n&&n.Object===Object&&n,g="object"==typeof self&&self&&self.Object===Object&&self,b=m||g||Function("return this")(),p=Object.prototype.toString,y=Math.max,S=Math.min,j=function(){return b.Date.now()};function O(e,t,n){var r,o,i,a,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(f);function m(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function g(e){return l=e,u=setTimeout(p,t),d?m(e):a}function b(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=i}function p(){var e=j();if(b(e))return O(e);u=setTimeout(p,function(e){var n=t-(e-c);return s?S(n,i-(e-l)):n}(e))}function O(e){return u=void 0,v&&r?m(e):(r=o=void 0,a)}function T(){var e=j(),n=b(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return g(c);if(s)return u=setTimeout(p,t),m(c)}return void 0===u&&(u=setTimeout(p,t)),a}return t=w(t)||0,h(n)&&(d=!!n.leading,i=(s="maxWait"in n)?y(w(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},T.flush=function(){return void 0===u?a:O(j())},T}function h(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var o=d.test(t);return o||s.test(t)?v(t.slice(2),o?2:8):l.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(f);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),O(e,t,{leading:r,maxWait:t,trailing:o})},o=document.querySelector(".feedback-form"),i=document.querySelector("input"),a=document.querySelector("textarea"),u={},o.addEventListener("input",e(t)((function(e){u[e.target.name]=e.target.value,u[e.target.name]=e.target.value,u&&localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500)),o.addEventListener("submit",(function(e){e.preventDefault(),o.reset(),localStorage.removeItem("feedback-form-state"),u={}})),localStorage.getItem("feedback-form-state")&&(u=JSON.parse(localStorage.getItem("feedback-form-state"))),i.value=u.email||"",a.value=u.message||""}();
//# sourceMappingURL=03-feedback.4873b65f.js.map
