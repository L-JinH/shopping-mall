const nav = document.querySelector(".header_nav");
const mainMenuList = document.querySelectorAll(".header_nav-mainmenu>li");
const subMenu = document.querySelectorAll(".header_nav-submenu");
let navHeight = nav.offsetHeight;
let subMenuHeight = 0;

for (let i = 0; i < mainMenuList.length; i++) {
  mainMenuList[i].addEventListener("mouseover", function () {
    subMenuHeight = this.querySelector(".header_nav-submenu").offsetHeight;
    nav.style.height = navHeight + subMenuHeight + "px";
  });

  mainMenuList[i].addEventListener("mouseout", function () {
    nav.style.height = navHeight + "px";
  });
}
