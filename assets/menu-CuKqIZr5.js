const s=document.querySelector(".js-burger-button"),n=document.querySelector(".mobile-menu-js"),e=document.querySelector(".backdrop-js"),l=document.querySelector(".mobile-menu-close-js"),c=document.querySelectorAll(".mobile-menu-nav-list a"),r=()=>{document.body.style.overflow="hidden"},i=()=>{document.body.style.overflow=""},o=()=>{n.style.transform="translateX(100%)",setTimeout(()=>{e.style.opacity=0,e.style.visibility="hidden",i()},300)};s.addEventListener("click",()=>{e.style.visibility="visible",e.style.opacity=1,n.style.transform="translateX(0%)",r()});l.addEventListener("click",o);e.addEventListener("click",t=>{t.target===e&&o()});document.addEventListener("keydown",t=>{t.key==="Escape"&&n.style.transform==="translateX(0%)"&&o()});c.forEach(t=>{t.addEventListener("click",d=>{o()})});
//# sourceMappingURL=menu-CuKqIZr5.js.map