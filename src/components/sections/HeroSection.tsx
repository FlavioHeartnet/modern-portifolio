import { ArrowIcon, HeroStarIcon, DownArrowIcon, ArrowRight } from "../icons/ArrowIcon";
import heroBg from "../../assets/img/hero/hero-bg.jpg";


export function HeroSection({ animation }: { animation: string }) {


  return (
    <div className="oit-hero-area oit-hero-ptb p-relative">
      <div className="oit-hero-img">
        <img src={heroBg} alt="Hero background" />
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="oit-hero-content">
              <div className={"oit-hero-shape " + animation} >
                <span className="oit-hero-shape-1">
                  <HeroStarIcon />
                </span>
              </div>
              <div className={animation}>
                <p>
                  Reak is a full-service Web3 Design Studio creating <br /> beautiful digital experiences and products. We are an <br />
                  award winning desing and art group specializing in <br /> branding, webdesign and engineering.
                </p>
              </div>
              <div className={animation}>
                <a className="oit-btn-border btn-blur-bg d-inline-flex align-items-center justify-content-between" href="#projects">
                  <span>
                    <span className="text-1">View our works</span>
                    <span className="text-2">View our works</span>
                  </span>
                  <i><ArrowIcon /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={"oit-hero-category-wrap d-flex justify-content-md-end " + animation} data-delay=".9">
              <div className="oit-hero-category">
                <h4 className="oit-hero-category-title mb-0">
                  What we do
                  <span><DownArrowIcon /></span>
                </h4>
                {[
                  { name: "Brand Strategy", active: false },
                  { name: "Product design", active: true },
                  { name: "Website Development", active: false },
                  { name: "SEO & Marketing", active: false },
                ].map((cat) => (
                  <div key={cat.name} className={`oit-hero-category-item${cat.active ? " active" : ""}`}>
                    <a className="d-flex justify-content-between align-items-center" href="#">
                      <span>{cat.name}</span>
                      <i><ArrowRight /></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className={"oit-hero-text-wrap text-center mt-100 " + animation} data-on-scroll="2" data-delay=".9" data-ease="bounce">
              <h4 className="oit-hero-bigtext">Creative Studio</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
