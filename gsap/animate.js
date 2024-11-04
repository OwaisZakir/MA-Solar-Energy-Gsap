let animateTime = 0.8;
let webHeader = document.querySelector("header");
gsap.from(webHeader, {
  top: "-100%",
  duration: animateTime,
  ease: "slow(0.7,0.7,false)",
});

let navTl = gsap.timeline();
let openMenuBtn = document.querySelector("#openMenu");
let closeMenuBtn = document.querySelector("#closeBtn");

navTl.to("nav", {
  right: 0,
  duration: 0.8,
  ease: "sine.in",
});
navTl.from(closeMenuBtn, {
  y: -20,
  opacity: 0,
  duration: .7,
});
navTl.from("#navLink", {
  x: 200,
  opacity: 0,
  duration: 0.6,
  stagger: 0.25,
});

navTl.pause();

openMenuBtn.addEventListener("click", () => {
  gsap.from(openMenuBtn, {
    scale: 0.9,
    duration: 0.5,
  });
  navTl.play();
});

closeMenuBtn.addEventListener("click", () => {
  gsap.from(openMenuBtn, {
    scale: 1,
    rotate: 360,
    duration: 0.5,
  });
  navTl.reverse();
});
