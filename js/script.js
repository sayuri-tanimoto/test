/* header */
const button = document.querySelector(".hmb");
const menu = document.querySelector(".js-menu");
const overlay = document.querySelector(".js-overlay");
const list = document.querySelector(".js-list");

let isMenuOpen = false; // メニューの状態を表す変数

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen; // メニューの状態を反転

  // メニューがオープンの場合
    if (isMenuOpen) {
        button.classList.add("-active");
        menu.classList.add("-active");
        overlay.classList.add("-active");
        list.classList.add("-active");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "メニューを閉じる");
        list.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }
    // メニューがクローズの場合
    else {
        button.classList.remove("-active");
        menu.classList.remove("-active");
        overlay.classList.remove("-active");
        list.classList.remove("-active");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "メニューを開く");
        list.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
};

button.addEventListener("click", toggleMenu);

// エスケープキーでメニューが閉じるようにする
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
        toggleMenu();
    }
});


/* voice */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        start: "left-=120px left",
        end: "bottom top",
        scrub: 1,
        markers: true,
    }
});

timeln.addLabel('card1');
timeln.to('.cards-item1', {
    xPercent: 0,
    opacity: 1
});

timeln.from('.cards-item2', {
    xPercent: 75,
    opacity: 0
});
timeln.addLabel("card2");

timeln.to(".cards-item1", {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5
}, "-=0.3");

timeln.to('.cards-item2', {
    xPercent: 0,
    opacity: 1
});

timeln.from('.cards-item3', {
    xPercent: 75,
    opacity: 0
});
timeln.addLabel('card3');

timeln.to(".cards-item2", {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6
}, "-=0.3");

timeln.to(".cards-item3", {
    xPercent: 0,
    opacity: 1,
});