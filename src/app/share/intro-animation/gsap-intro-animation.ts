import gsap from 'gsap';

export function loginAnimtion(){
  
    let tl = gsap.timeline();

    tl.to('.logoAnimation',{
      opacity: 1,
      scale: 3,
      duration: 0.75,
      ease: "back",
      onStart: () => document.body.classList.add('no-scroll'),
    });

    tl.to('.logoAnimation',{
      rotate:720,
      duration: 0.5,
    },"-=0.75");

    tl.to('.logoAnimation',{
      x:-125,
      duration: 0.5,
    });

    tl.to('.textAnimation',{
      opacity:1,
      duration: 1,
    }, '-=0.5');

    tl.from('.textAnimation',{
      x:-300,
      duration: 1,
    }, '-=1.0');

    tl.to([".textAnimationMask", ".logoAnimation"], {
      x:"+=65",
      duration: 1,
    }, '-=0.25');

    tl.from('.textAnimation',{
      x:"+=300",
      duration: 1,
    },'+=0.75');

    const targetX = 16;
    const targetY = 0;
    tl.to('.logoAnimation',{
      rotate:360,
      x:(i, el) => targetX - el.getBoundingClientRect().left,
      y:(i, el) => targetY - el.getBoundingClientRect().top,
      scale:(0),
      duration: 0.75,
    }, "-=0.25");

    tl.to('.background',{
      opacity:0,
      duration: 0.75,
      onComplete: () => {
        gsap.set('.background', { display: 'none' });
        document.body.classList.remove('no-scroll')
      }
    }, "=-0.75");

}