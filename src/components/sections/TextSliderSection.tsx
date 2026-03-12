import { ArrowIcon, MarqueeStarIcon } from "../icons/ArrowIcon";

export function TextSliderSection() {
  return (
    <div className="oit-text-slider-area pt-135 pb-135 fix p-relative" data-bg-color="#101216" style={{ backgroundColor: "#101216" }}>
      <div className="oit-text-slider-btn">
        <a className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between" href="#contact">
          <span>
            <span className="text-1">Book A Call Now</span>
            <span className="text-2">Book A Call Now</span>
          </span>
          <i><ArrowIcon /></i>
        </a>
      </div>
      <div className="oit-text-slider-wrap">
        {[0, 1].map((row) => (
          <div key={row} className={`oit-text-slider-item d-flex align-items-center${row === 1 ? " slide-ltr" : ""} mb-20`}>
            {[0, 1, 2, 3].map((j) => (
              <span key={`text-${row}-${j}`}>
                {j % 2 === 0 ? "Let's Contact" : <MarqueeStarIcon />}
              </span>
            ))}
            {[0, 1, 2, 3].map((j) => (
              <span key={`text2-${row}-${j}`}>
                {j % 2 === 0 ? "Let's Contact" : <MarqueeStarIcon />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
