import { useGSAP } from "@gsap/react";
import { StarIcon, SocialArrow } from "../icons/ArrowIcon";
import gsap from "gsap";
export function Footer({ animation = "fade-anim" }: { animation: string }) {
  useGSAP(() => {
    gsap.from(animation, {
      scrollTrigger: {
        trigger: animation,
        scrub: true
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <footer>
      <div className="oit-footer-area pt-100 pb-70" data-bg-color="#000000" style={{ backgroundColor: "#000000" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className={"oit-footer-widget mb-30 " + animation} data-delay=".3">
                <div className="oit-footer-widget-menu mb-120">
                  <ul>
                    {["Home", "About Us", "Works", "Services", "Insights", "Contact Us"].map((item) => (
                      <li key={item}>
                        <a href="#">
                          <i><StarIcon /></i>
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="oit-footer-widget-rules d-flex align-items-center justify-content-between">
                  <a className="border-line" href="#">Privacy Policy</a>
                  <a className="border-line" href="#">Terms of Services</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className={"oit-footer-widget d-flex mb-30 " + animation} data-delay=".5">
                <div className="oit-footer-widget-info d-flex flex-column justify-content-between">
                  <a href="mailto:helloreak@gmail.com"><span className="border-line">helloreak@gmail.com</span></a>
                  <a href="tel:1(666)123456789"><span className="border-line">+1 (666) 123-456 789</span></a>
                  <a href="https://www.google.com/maps/@23.8223588,90.3660179,15z" target="_blank" rel="noopener noreferrer">
                    <span className="border-line">2912 Meadowbrook Road, <br /> Los Angeles, CA 90017</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className={"oit-footer-widget mb-30 " + animation} data-delay=".7">
                <div className="oit-footer-widget-social mb-80">
                  {["Twitter/X", "LinkedIn", "Instagram", "Facebook", "Behance"].map((social) => (
                    <a key={social} className="d-flex align-items-center justify-content-between" href="#">
                      <span>{social}</span>
                      <i><SocialArrow /></i>
                    </a>
                  ))}
                </div>
                <div className="oit-footer-widget-copyright">
                  <p>© 2026 Reak. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
