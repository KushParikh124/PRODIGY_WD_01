"use strict";

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scroll = window.scrollY;
    var element = document.querySelector(".stick");
    var element2 = document.querySelector(".header-top");

    if (scroll > 200) {
      element.style.background = "#000";
      element2.style.background = "#000";
      element.style.transition = "background-color 0.5s ease";
      element2.style.transition = "background-color 0.5s ease";
    } else {
      element.style.background = "transparent";
      element2.style.background = "transparent";
      element.style.transition = "background-color 0.5s ease";
      element2.style.transition = "background-color 0.5s ease";
    }
  });
});

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);




const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (this.window.scroll > 300) {
    
    header.classList.add("scrolled");
    header.style.background = "#000";
    header.style.transition = "background-color 0.5s ease";
  } else {
    header.classList.add("not-scrolled");
    header.style.background = "transparent";
    header.style.transition = "background-color 0.5s ease";
  }

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
