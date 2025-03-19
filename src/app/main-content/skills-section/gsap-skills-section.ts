import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let windowWidth:number = window.innerWidth;
let textBoxHeight:number = 0

window.addEventListener('resize', () => {
    gsap.killTweensOf("#pacman-box");
    windowWidth = window.innerWidth;
    windowWidth = window.innerHeight;
    textBoxHeight = document.getElementById('textbox')?.offsetHeight || 0;
  });

  export function skillsSectionAnimation() {
    const pacman = document.getElementById('pacman');
    textBoxHeight = document.getElementById('textbox')?.offsetHeight || 0;

    gsap.set([".artcileLeft", ".artcileRight", ".skillString"], {
        x: (i, target) => target.classList.contains("artcileLeft") ? -30 :
                          target.classList.contains("artcileRight") ? 30 :
                          target.classList.contains("skillString") ? 100 : 0,
        y: (i, target) => target.classList.contains("artcileLeft") ? -100 :
                          target.classList.contains("artcileRight") ? 100 : 0,
        opacity: 0
    });


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".wrapper-skills",
            start: "top top",
            end: "+=8000", 
            scrub: 6, 
            pin: true,
        }
    });

    tl.to(".characterBody", { x: windowWidth + 400,  stagger: 0.25, duration: 4})
    .set(".characterBody", {y: ((textBoxHeight * 2) + 100 + 64), scaleX: -1})
    .to(".characterBody", {x: -windowWidth - 110, stagger: 0.15, duration: 4})
    .to(".text-box", { opacity: 0, duration: 1 })
    .to(".skillsHeadline", { opacity: 1, x: 0, y: 0, duration: 0.5,})
    .to(".box", { opacity: 1, x: 0, y: 0, stagger: 0.5, duration: 0.5,})
    .to([".artcileLeft", ".artcileRight", ".skillString"], {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5, 
        snap: { x: 1, y: 1 },
    })
    .to(".skillIcon", { opacity: 1, x: 0, y: 0, stagger: 0.15,}, "=+2");
}