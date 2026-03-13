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
import React from "react";
const { useRef } = React;
import {
  initFadeAnimations,
  initTextRevelAnimations,
  initTitleRevelAnimations,
  initHeroFadeAnimations,
  initPanelPinAnimations
} from "../lib/animations";

export function HomePage() {
  const container = useRef(null);
  useGSAP(() => {
    initFadeAnimations();
    initTextRevelAnimations();
    initTitleRevelAnimations();
    initHeroFadeAnimations();
    initPanelPinAnimations();
  }, { scope: container });
  return (
    <div ref={container}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <FunfactSection />
      <AwardsSection />
      <TeamSection />
      <PricingSection />
      <FaqSection />
      <LineSlider />
      <BlogSection />
      <TextSliderSection />
    </div>
  );
}
