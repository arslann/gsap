// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray('.panel');

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.container',
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: '+=3500',
//   },
// });

// // arrow animations

// let arrow = document.querySelector('.arrow');
// let arrowRight = document.querySelector('.arrow-right');

// if (arrow) {
//   gsap.to(arrow, { y: 12, ease: 'power1.inOut', repeat: -1, yoyo: true });
// }

// if (arrowRight) {
//   gsap.to(arrowRight, { x: -12, ease: 'power1.inOut', repeat: -1, yoyo: true });
// }

// gsap.registerPlugin(ScrollTrigger);

// const scrollTimeline = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.container',
//       start: 'top top',
//       end: () => `+=${horizontalScrollWidth} top`,
//       scrub: true,
//       pin: true,
//     },
//   })
//   .to(
//     '.window',
//     {
//       scale: 2,
//       x: '1000%',
//       ease: 'none',
//       duration: 1,
//     },
//     'anim'
//   );

// gsap.to(".window", {
//   ease: "none",
//   scale: 7,
//   y: "-100",
//   x: "-200%",
//   duration: 10,
// });

gsap.to('.window', {
  xPercent: -300,
  scale: 7,
  x: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.clouds',
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: '+=1500',
  },
});

// gsap.to('.svt-to-scale', {
//   scale: 7,
//   scrollTrigger: {
//     trigger: '.svt-to-scale',
//     scrub: 1,
//     start: 'top top',
//     end: 'bottom center',
//     markers: true,
//     end: '+=1500',
//   },
// });

VANTA.CLOUDS({
  el: '.clouds',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
});
