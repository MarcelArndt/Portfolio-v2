import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let windowWidth:number = window.innerWidth;
let windowHeight:number = window.innerHeight;
let textBoxHeight:number = 0

window.addEventListener('resize', () => {
    gsap.killTweensOf("#pacman-box");
    windowWidth = window.innerWidth;
    windowWidth = window.innerHeight;
    textBoxHeight = document.getElementById('textbox')?.offsetHeight || 0;
  });

export function skillsSectionAnimation(){

    const pacman = document.getElementById('pacman');
    textBoxHeight = document.getElementById('textbox')?.offsetHeight || 0

    console.log(pacman?.offsetHeight)
    console.log(textBoxHeight)

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
            end: "+=6000", 
            scrub: 3,
            pin: true,
        }
      });

      tl.to(pacman,{ duration: 1, x: 0})
      .to(pacman,{ duration: 6, x: windowWidth + pacman!.offsetWidth,})
      .set(pacman,{ duration: 1, y: (pacman!.offsetHeight * 2) + (textBoxHeight * 2), scaleX: -1})
      .to(pacman,{ duration: 6, x: -windowWidth + -pacman!.offsetWidth,})

      .to(".text-box",{ duration: 1, opacity:0})
      .to(".skillsHeadline",{ opacity:1, x:0, y:0, duration:0.25, })
      .to([".artcileLeft", ".artcileRight", ".skillString"], {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            snap: { x: 1, y: 1 },
        })

        .to(".skillIcon",{ opacity: 1, x: 0, y: 0, duration: 1, stagger: 0.25}, "+=2")
    

}
