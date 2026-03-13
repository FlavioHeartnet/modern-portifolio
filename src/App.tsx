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

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrollSmoother);

export function App() {
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
    // Wire hamburger menu button to offcanvas
    const menuBar = document.getElementById("header-menu-bar");
    if (menuBar) {
      menuBar.addEventListener("click", () => {
        (window as any).__openOffcanvas?.();
      });
    }

    // Apply data-bg-color styles (like the original script.js)
    document.querySelectorAll<HTMLElement>("[data-bg-color]").forEach((el) => {
      const color = el.getAttribute("data-bg-color");
      if (color) el.style.backgroundColor = color;
    });

    // Apply data-width styles
    document.querySelectorAll<HTMLElement>("[data-width]").forEach((el) => {
      const width = el.getAttribute("data-width");
      if (width) el.style.width = width;
    });

    return () => {
      if (menuBar) {
        menuBar.replaceWith(menuBar.cloneNode(true));
      }
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
