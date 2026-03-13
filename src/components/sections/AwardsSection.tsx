import { ArrowIcon } from "../icons/ArrowIcon";
import { useTheme } from "../../contexts/ThemeContext";
import award1 from "../../assets/img/award/award-1.png";
import award2 from "../../assets/img/award/award-2.png";
import award3 from "../../assets/img/award/award-3.png";
import award4 from "../../assets/img/award/award-4.png";
import award5 from "../../assets/img/award/award-5.png";
import award6 from "../../assets/img/award/award-6.png";

const awards = [
  { icon: award1, title: "Site of the day / No-Code honor", year: "2026" },
  { icon: award2, title: "Red dot design awards", year: "2016" },
  { icon: award3, title: "Site of the month / Honorable mention", year: "2021" },
  { icon: award4, title: "Site of the year / No-Code honor", year: "2023" },
  { icon: award5, title: "Site of the month", year: "2025" },
  { icon: award6, title: "Honorable mention", year: "2020" },
];

export function AwardsSection({ animation = "fade-anim" }: { animation?: string }) {
  const { theme } = useTheme();
  const bgColor = theme === "light" ? "#F5F5F5" : "transparent";

  return (
    <div className="oit-award-area pt-140 pb-120" data-bg-color={bgColor} style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="oit-section-title-box text-center text-md-start">
              <span className={"oit-section-subtitle mb-10 " + animation} data-delay=".3">Celebrating Milestones</span>
              <h3 className="oit-section-title fsz-60 mb-25 oit-title-revel">Awards And Honors</h3>
              <div className={animation} data-delay=".5">
                <p className="mb-30">Discover how our creativity transforms ideas into <br /> impactful digital experiences — explore more <br /> of our projects.</p>
              </div>
              <div className={animation} data-delay=".7">
                <a className="oit-btn-border btn-black-bg d-inline-flex align-items-center justify-content-between" href="#projects">
                  <span>
                    <span className="text-1">View All Projects</span>
                    <span className="text-2">View All Projects</span>
                  </span>
                  <i><ArrowIcon /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="oit-award-item-wrap">
              {awards.map((award) => (
                <div key={award.title} className={"oit-award-item " + animation}>
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-3 col-md-4">
                      <div className="oit-award-icon">
                        <img src={award.icon} alt={award.title} />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8">
                      <div className="oit-award-content d-flex justify-content-between align-items-center">
                        <p>{award.title}</p>
                        <span>{award.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
