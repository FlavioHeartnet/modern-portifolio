import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Offcanvas } from "./components/layout/Offcanvas";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import "./index.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import { ThemeProvider } from "./contexts/ThemeContext";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrollSmoother);

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  useGSAP(() => {
    if (document.querySelectorAll<HTMLElement>('#smooth-wrapper, #smooth-content').length === 2) {
      gsap.config({ nullTargetWarn: false });

      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: 1,
        normalizeScroll: true
      });
    }
    return () => {
    };
  }, []);

  return (
    <>
      <Offcanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HomePage />
          </main>
          <Footer animation={"fade-anim"} />
        </div>
      </div>
    </>
  );
}

export default App;
