!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var i,r,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function w(e){return l=e,f=setTimeout(S,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function S(){var e=b();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=r=void 0,u)}function T(){var e=b(),n=O(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return w(c);if(s)return f=setTimeout(S,t),y(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},T.flush=function(){return void 0===f?u:h(b())},T}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var w=document.querySelector(".feedback-form"),O=document.querySelector('input[name="email"]'),S=document.querySelector("textarea[name=message]");w.addEventListener("input",e(t)((function(){var e={email:O.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),1e3)),w.addEventListener("submit",e(t)((function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),O.value="",S.value=""}),1e3)),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);O.value=t.email,S.value=t.message}))}();
//# sourceMappingURL=03-feedback.80a97725.js.map
