const o=document.querySelector(".js-burger-button"),s=document.querySelector(".mobile-menu-js"),e=document.querySelector(".backdrop-js"),c=document.querySelector(".mobile-menu-close-js"),n=()=>{s.style.transform="translateX(100%)",setTimeout(()=>{e.style.opacity=0,e.style.visibility="hidden"},300)};o.addEventListener("click",()=>{e.style.visibility="visible",e.style.opacity=1,s.style.transform="translateX(0%)"});c.addEventListener("click",n);e.addEventListener("click",t=>{t.target===e&&n()});document.addEventListener("keydown",t=>{t.key==="Escape"&&s.style.transform==="translateX(0%)"&&n()});
//# sourceMappingURL=menu-M5QlgPso.js.map
