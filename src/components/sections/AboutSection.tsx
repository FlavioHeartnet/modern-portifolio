import { ArrowIcon, ArrowIconLarge } from "../icons/ArrowIcon";
import abShape1 from "../../assets/img/about/ab-shape-1.jpg";
import ab1 from "../../assets/img/about/ab-1.jpg";


export function AboutSection({ animation = "fade-anim" }: { animation?: string }) {

  return (
    <div className="oit-about-area p-relative pt-150 pb-150" data-bg-color="#F5F5F5" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="oit-about-shape d-none d-lg-block">
        <img data-speed=".8" src={abShape1} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="offset-xl-2 col-xl-3">
            <div className={"oit-about-btn pb-140 " + animation} data-delay=".3" data-ease="bounce" data-fade-from="top">
              <a className="oit-btn-line fsz-30" href="#about">
                <span>Let's Chat</span>
                <i><ArrowIconLarge /></i>
              </a>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="oit-about-text mb-70">
              <p className={"oit-dropcap oit-text-revel"}>
                Design <span>solutions</span> for startups <br />
                and growing brands. Turning <span>ideas</span> into <br />
                clean, <span>smart</span>, and useful <span>designs</span>. Helping <br /> you build brands
              </p>
            </div>
            <div className={"oit-about-content-wrap d-flex align-items-center " + animation} data-delay=".7">
              <div className="oit-about-thumb image-gsl">
                <div className="image-gsl-canvas"></div>
                <img src={ab1} alt="About us" />
              </div>
              <div className="oit-about-content d-flex flex-column justify-content-between">
                <p>
                  We are a creative web agency specializing in innovative design <br /> and cutting-edge development. We help businesses stand out <br /> and every aspect of our projects is crafted with the highest standards of quality.
                </p>
                <div>
                  <a className="oit-btn-line" href="#about">
                    <span>More About Us</span>
                    <i><ArrowIcon /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
