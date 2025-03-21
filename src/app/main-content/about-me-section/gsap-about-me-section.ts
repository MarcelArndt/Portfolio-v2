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
    
    tl.to([".headlineOne"], {opacity:1, y:0, duration: 0.5})
    .to([".textBoxOne", ".profilPicture"],{ 
        opacity:1, 
        y:0, 
        x:0, 
        duration: 1,
        snap: {x:1, y:1}
    })
    .to({}, {duration: 1})
    .to(".textBoxOne", {
        opacity: 0,
        duration: 0.5,
        display: "none"
    })
    .to({}, {duration: 1})
    .to(".textBoxTwo",{  
        opacity:1, 
        y:0, 
        x:0, 
    })
    .to(".textBoxTwo",{  
        opacity:1, 
        y:0, 
        x:0, 
        duration: 0.8
    })

}