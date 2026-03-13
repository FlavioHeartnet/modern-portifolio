import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export function initFadeAnimations() {
  const boxes: Element[] = gsap.utils.toArray('.fade-anim');
  boxes.forEach((box) => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        scrub: true
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });
}

export function initTextRevelAnimations() {
  const texts: Element[] = gsap.utils.toArray('.oit-text-revel');
  texts.forEach((el) => {
    const split = new SplitText(el, { type: "chars" });
    gsap.from(split.chars, {
      opacity: 0.2,
      x: -5,
      stagger: 0.03,
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        scrub: 0.7
      }
    });
  });
}

export function initTitleRevelAnimations() {
  const titles: Element[] = gsap.utils.toArray('.oit-title-revel');
  titles.forEach((el) => {
    const split = new SplitText(el, { type: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.09,
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        scrub: 0.7
      }
    });
  });
}

export function initHeroFadeAnimations() {
  gsap.from(".hero-fade-anim", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });
}

export function initPanelPinAnimations() {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1199px)", () => {
    const panels: Element[] = gsap.utils.toArray('.oit-panel-pin');
    panels.forEach((section) => {
      const startVal = (section as HTMLElement).dataset.start || 'top top';
      const endVal = (section as HTMLElement).dataset.end || 'bottom 100%';
      gsap.fromTo(
        section,
        {
          transformOrigin: '100% 0% 0px',
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        },
        {
          yPercent: 5,
          rotate: 20,
          scale: 0.75,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: startVal,
            end: endVal,
            endTrigger: '.oit-panel-pin-area',
            pinSpacing: false,
            markers: false,
          },
        }
      );
    });
  });
}
