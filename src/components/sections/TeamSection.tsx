import { useState } from "react";
import team1 from "../../assets/img/team/team-2-1.jpg";
import team2 from "../../assets/img/team/team-2-2.jpg";
import team3 from "../../assets/img/team/team-2-3.jpg";
import team4 from "../../assets/img/team/team-2-4.jpg";

const teamMembers = [
  { name: "Ethan Reyes", role: "UI/UX Designer", img: team1 },
  { name: "Luca Vidal", role: "Co-founder & Art Director", img: team2 },
  { name: "Perfiroa Lopaz", role: "UI/UX Designer", img: team3 },
  { name: "Elon Musk", role: "Investor", img: team4 },
];

export function TeamSection({ animation = "fade-anim" }: { animation?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="oit-team-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className="oit-section-subtitle-box mb-30">
              <span className="oit-section-subtitle">Team Member</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xl-1 col-xl-10">
            <div className="oit-section-title-box pl-70 mb-100">
              <h3 className="oit-section-title oit-title-revel">Meat Our <br /><span className="pl-265">Talented Team</span></h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="oit-team-wrap team-action-wrap p-relative">
              <div className="oit-team-inner-wrap">
                {teamMembers.map((member, i) => (
                  <a
                    key={member.name}
                    href="#"
                    data-index-number={i}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div className={"oit-team-item mb-25 " + animation}>
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="oit-team-content">
                            <h4 className="oit-team-title">{member.name}</h4>
                            <span>{member.role}</span>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="oit-team-social text-start text-md-end">
                            <span>LinkedIn</span>
                            <span>Twitter/X</span>
                            <span>Facebook</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div
                className="oit-img-wrap"
                style={{ opacity: activeIndex !== null ? 1 : 0, transition: "opacity 0.5s" }}
              >
                <div
                  className="oit-img-inner-wrap"
                  style={{
                    transform: activeIndex !== null ? `translateY(-${(100 / teamMembers.length) * activeIndex}%)` : "translateY(0)",
                    transition: "transform 0.6s ease",
                  }}
                >
                  {teamMembers.map((member, i) => (
                    <img key={i} src={member.img} alt={member.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
