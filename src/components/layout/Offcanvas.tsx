import { useState } from "react";
import logoBlack from "../../assets/img/logo/logo-black.png";

export function Offcanvas() {
  const [isOpen, setIsOpen] = useState(false);

  // Expose open/close via a global event listener for the hamburger menu
  if (typeof window !== "undefined") {
    (window as any).__openOffcanvas = () => setIsOpen(true);
  }

  return (
    <>
      <div className={`oit-offcanvas-area${isOpen ? " offcanvas-opened" : ""}`}>
        <div className={`oitoffcanvas${isOpen ? " opened" : ""}`}>
          <div className="oitoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="oitoffcanvas__logo">
            <a href="/">
              <img width={100} src={logoBlack} alt="Reak Logo" />
            </a>
          </div>
          <div className="oitoffcanvas__text">
            <p>Suspendisse interdum consectetur libero id. Fermentum leo vel orci porta non. Euismod viverra nibh cras pulvinar suspen.</p>
          </div>
          <div className="oitoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="oit-info-wrapper mb-20 d-flex align-items-center">
              <div className="oitoffcanvas__info-icon">
                <a href="#"><i className="fal fa-envelope"></i></a>
              </div>
              <div className="oitoffcanvas__info-address">
                <span>Email</span>
                <a href="mailto:hello@yourmail.com">hello@yourmail.com</a>
              </div>
            </div>
            <div className="oit-info-wrapper mb-20 d-flex align-items-center">
              <div className="oitoffcanvas__info-icon">
                <a href="#"><i className="fal fa-phone-alt"></i></a>
              </div>
              <div className="oitoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
              </div>
            </div>
            <div className="oit-info-wrapper mb-20 d-flex align-items-center">
              <div className="oitoffcanvas__info-icon">
                <a href="#"><i className="fas fa-map-marker-alt"></i></a>
              </div>
              <div className="oitoffcanvas__info-address">
                <span>Location</span>
                <a href="https://www.google.com/maps/@37.4801311,22.8928877,3z" target="_blank" rel="noopener noreferrer">
                  Riverside 255, San Francisco, USA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay${isOpen ? " apply" : ""}`} onClick={() => setIsOpen(false)}></div>
    </>
  );
}
