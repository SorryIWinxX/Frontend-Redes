const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider")
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();
tl.fromTo(
    hero,
    3,
    { height: "0%" }, 
    { height: "100%", ease:Power2.easeInOut }
    ).fromTo (
    hero,
    1.5, 
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut}
    ).fromTo(
    slider,
    1.2,
    {x: "-100%"}, 
    {x: "0%", ease: Power2.easeInOut },
    "-=1.2"
    )