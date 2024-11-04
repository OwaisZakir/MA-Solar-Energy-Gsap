"use strict";

var animateTime = 0.8;
var webHeader = document.querySelector("header");
gsap.from(webHeader, {
  top: "-100%",
  duration: animateTime,
  ease: "slow(0.7,0.7,false)"
});
var navTl = gsap.timeline();
var openMenuBtn = document.querySelector("#openMenu");
var closeMenuBtn = document.querySelector("#closeBtn");
navTl.to("nav", {
  right: 0,
  duration: 0.8,
  ease: "sine.in"
});
navTl.from(closeMenuBtn, {
  y: -20,
  opacity: 0,
  duration: .7
});
navTl.from("#navLink", {
  x: 200,
  opacity: 0,
  duration: 0.6,
  stagger: 0.25
});
navTl.pause();
openMenuBtn.addEventListener("click", function () {
  gsap.from(openMenuBtn, {
    scale: 0.9,
    duration: 0.5
  });
  navTl.play();
});
closeMenuBtn.addEventListener("click", function () {
  gsap.from(openMenuBtn, {
    scale: 1,
    rotate: 360,
    duration: 0.5
  });
  navTl.reverse();
});