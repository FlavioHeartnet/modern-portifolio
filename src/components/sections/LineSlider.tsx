import lineShape1 from "../../assets/img/shape/line-shape-1.png";

export function LineSlider() {
  return (
    <div className="fix">
      <div className="oit-text-slider-item d-flex align-items-center slide-ltr">
        {Array.from({ length: 9 }).map((_, i) => (
          <img key={i} src={lineShape1} alt="" />
        ))}
      </div>
    </div>
  );
}
