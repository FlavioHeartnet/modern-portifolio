import { ArrowIcon } from "../icons/ArrowIcon";
import logoWhite from "../../assets/img/logo/logo-white.png";

export function Header() {
  return (
    <header>
      <div className="oit-header-area oit-header-transparent pt-35">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="oit-header-logo">
                <a href="/"><img data-width="100" src={logoWhite} alt="Reak Logo" /></a>
              </div>
            </div>
            <div className="col-6">
              <div className="oit-header-action d-flex align-items-center justify-content-end">
                <a className="oit-btn-border d-none d-md-inline-flex d-inline-flex align-items-center justify-content-between" href="#contact">
                  <span>
                    <span className="text-1">Book A Call Now</span>
                    <span className="text-2">Book A Call Now</span>
                  </span>
                  <i><ArrowIcon /></i>
                </a>
                <button className="oit-header-bar oit-menu-bar ml-20" id="header-menu-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
