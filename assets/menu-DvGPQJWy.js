const s=document.querySelector(".js-burger-button"),o=document.querySelector(".mobile-menu-js"),e=document.querySelector(".backdrop-js"),l=document.querySelector(".mobile-menu-close-js"),c=()=>{document.body.style.overflow="hidden"},r=()=>{document.body.style.overflow=""},n=()=>{o.style.transform="translateX(100%)",setTimeout(()=>{e.style.opacity=0,e.style.visibility="hidden",r()},300)};s.addEventListener("click",()=>{e.style.visibility="visible",e.style.opacity=1,o.style.transform="translateX(0%)",c()});l.addEventListener("click",n);e.addEventListener("click",t=>{t.target===e&&n()});document.addEventListener("keydown",t=>{t.key==="Escape"&&o.style.transform==="translateX(0%)"&&n()});
//# sourceMappingURL=menu-DvGPQJWy.js.map
