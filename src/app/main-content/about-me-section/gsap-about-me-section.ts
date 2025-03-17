import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function aboutMeSectionAnimation(){

    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper-about-me",
          start: "top top",
          end: "+=4000", 
          scrub: 3,
          pin: true, 
        }
      });
      

      tl.to(".headlineOne", { opacity: 1, y: 0, duration: 1 })
        .to(".textBoxOne", { opacity: 1, x: 0, duration: 1 })
        .to(".textBoxOne", { opacity: 0, x: 300, duration: 1 }, "+=2") 
        .to(".textBoxTwo", { opacity: 1, x: 0, duration: 1 })
        .to(".textBoxTwo", { opacity: 0, x: -300, duration: 1 }, "+=2")
        .to(".textBoxThree", { opacity: 1, x: 0, duration: 1 })
        .to(".textBoxThree", { opacity: 0, x: 300, duration: 1 }, "+=2")
        .to(".textBoxFour", { opacity: 1, x: 0, duration: 1 })
        .to(".textBoxFour", { opacity: 0, x: -300, duration: 1 }, "+=2")

}