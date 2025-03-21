import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function heroSectionAnimation(){

    let tl = gsap.timeline()
    tl.to(".parallax-background",{
        scrollTrigger:{
            trigger:[".parallax-background"],
            start: 'top top',
            end: 'bottom center',
            scrub: true,
        },
        y:"+20%",
    });

    tl.from(".parallax-shadow",{
        scrollTrigger:{
            trigger:[".parallax-background"],
            start: 'top top',
            end: 'bottom center',
            scrub: true,
        },
        opacity:0,
        scaleY:0,
    });

    tl.to(".scroll-marker-container",{
        scrollTrigger:{
            trigger:".parallax-background",
            start: 'top top',
            end: 'center 60%',
            scrub: true
        },
        opacity:0
    });

    tl.to(".left-container",{
        scrollTrigger:{
            trigger:".parallax-background",
            start: 'top top',
            end: 'bottom center',
            scrub: true,
        },
        opacity:0,
        y:"+20%",
    })

    tl.to(".profil-picture",{
        scrollTrigger:{
            trigger:".parallax-background",
            start: 'top top',
            end: 'bottom center',
            scrub: true,
        },
        opacity:0,
        y:"+30%",
    })

}