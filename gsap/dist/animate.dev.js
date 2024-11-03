"use strict";

var navTl = gsap.timeline();
var openMenuBtn = document.querySelector("#openMenu");
openMenuBtn.addEventListener("click", function () {
  navTl.to("nav", {
    right: 0,
    duration: 0.5,
    ease: "bounce.in"
  });
  navTl.from("#navLink", {
    x: 200,
    opacity: 0,
    duration: .6,
    stagger: 1
  });
}); // navTl.from("#navLink",{
//     x:200,
//     opacity:0,
//     daley:1,
//     duration:2
// })