const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reviews-swiper-CcnyVWH7.js","assets/vendor-CUnLjt9d.js"])))=>i.map(i=>d[i]);
(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const y="modulepreload",E=function(u){return"/code-crafters-tp-02/"+u},a={},f=function(s,c,d){let e=Promise.resolve();if(c&&c.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(c.map(n=>{if(n=E(n),n in a)return;a[n]=!0;const l=n.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${m}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":y,l||(i.as="script"),i.crossOrigin="",i.href=n,o&&i.setAttribute("nonce",o),document.head.appendChild(i),l)return new Promise((p,h)=>{i.addEventListener("load",p),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(t){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t}return e.then(t=>{for(const o of t||[])o.status==="rejected"&&r(o.reason);return s().catch(r)})};f(()=>import("./assets/reviews-swiper-CcnyVWH7.js"),__vite__mapDeps([0,1]));f(()=>import("./assets/menu-8-D0OLAV.js"),[]);
//# sourceMappingURL=index.js.map
