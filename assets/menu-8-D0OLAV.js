const o=document.querySelector(".burger-button"),e=document.querySelector(".mobile-menu"),t=document.querySelector(".backdrop"),n=document.querySelector(".mobile-menu-close");o.addEventListener("click",()=>{t.style.display="block",e.classList.add("is-active")});n.addEventListener("click",()=>{t.style.display="none",e.classList.remove("is-active")});document.addEventListener("click",c=>{!t.contains(c.target)&&!burgerBtn.contains(c.target)&&e.classList.remove("is-active")});
//# sourceMappingURL=menu-8-D0OLAV.js.map