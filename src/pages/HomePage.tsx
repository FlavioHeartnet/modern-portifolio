import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { FunfactSection } from "../components/sections/FunfactSection";
import { AwardsSection } from "../components/sections/AwardsSection";
import { TeamSection } from "../components/sections/TeamSection";
import { PricingSection } from "../components/sections/PricingSection";
import { FaqSection } from "../components/sections/FaqSection";
import { LineSlider } from "../components/sections/LineSlider";
import { BlogSection } from "../components/sections/BlogSection";
import { TextSliderSection } from "../components/sections/TextSliderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
const { useRef } = React;
import { SplitText } from 'gsap/SplitText';

export function HomePage() {
  const container = useRef(null);
  useGSAP(() => {
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
    const texts: Element[] = gsap.utils.toArray('.oit-text-revel');
    texts.forEach(el => {
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

    const titles: Element[] = gsap.utils.toArray('.oit-title-revel');
    titles.forEach(el => {
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

    gsap.from(".hero-fade-anim", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1199px)", () => {
      let panels: Element[] = gsap.utils.toArray('.oit-panel-pin')
      panels.forEach((section) => {
        let startVal = (section as HTMLElement).dataset.start || 'top top'
        let endVal = (section as HTMLElement).dataset.end || 'bottom 100%'
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
        )
      })
    });


  }, { scope: container });
  return (
    <div ref={container}>
      <HeroSection animation={"hero-fade-anim"} />
      <AboutSection animation={"fade-anim"} />
      <ProjectsSection />
      <ServicesSection />
      <FunfactSection />
      <AwardsSection animation={"fade-anim"} />
      <TeamSection animation={"fade-anim"} />
      <PricingSection animation={"fade-anim"} />
      <FaqSection animation={"fade-anim"} />
      <LineSlider />
      <BlogSection animation={"fade-anim"} />
      <TextSliderSection />
    </div>
  );
}
