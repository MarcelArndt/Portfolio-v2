import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function aboutMeSectionAnimation(){

   let tl = gsap.timeline()


   tl.from('.profilPicture', {
    scrollTrigger:{
        trigger:[".wrapper-about-me"],
        start: '10% bottom',
        end: 'top 30%',
        scrub: 3,

    },
    opacity:0,
    y:600,
    duration: 1
   });




    tl.to('.headlineOne',{
        scrollTrigger:{
            trigger:[".wrapper-about-me"],
            start: '10% 90%',
            end: '60% 40%',
            scrub: true,

        },
        opacity:1,
        height:"100%",
        duration: 1
    });

    tl.to('.to-hide',{
        scrollTrigger:{
            trigger:[".wrapper-about-me"],
            start: '20% center',
            end: '50% 40%',
            scrub: 2,
        },
        opacity:1,
        height:"100%",
        duration: 1
    });

    tl.to('.content-text-delimiter',{
        scrollTrigger:{
            trigger:[".wrapper-about-me"],
            start: '20% center',
            end: '50% 40%',
            scrub: 2,
        },
        stagger: 0.15,
        opacity:1,
        y:0
    });

    tl.to('.hr-animtion',{
        scrollTrigger:{
            trigger:[".wrapper-about-me"],
            start: '20% center',
            end: '50% 40%',
            scrub: 2,
        },
        opacity:1,
        width:"100%"
    });

    tl.to('.wrapper-delimite',{
        scrollTrigger:{
            trigger:[".wrapper-about-me"],
            start: '50% center',
            end: 'bottom 50%',
            scrub: 2,
            pin:true,
        },
        opacity:1,
        width:"100%"
    });


}
