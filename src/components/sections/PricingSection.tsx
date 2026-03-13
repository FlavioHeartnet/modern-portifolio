import { useState } from "react";
import { ArrowIcon, SparkIcon } from "../icons/ArrowIcon";
import { useTheme } from "../../contexts/ThemeContext";
import avatar1 from "../../assets/img/avater/avater-1.png";

const monthlyFeatures = [
  "Ongoing design support",
  "Framer or custom development",
  "Clear timelines & milestones",
  "Flexible monthly scope",
  "Weekly updates from the project manager",
  "Fast turnaround on key tasks",
];

const projectFeatures = [
  "Ongoing design support",
  "Framer or custom development",
  "Clear timelines & milestones",
  "Flexible monthly scope",
  "Weekly updates from the project manager",
  "Fast turnaround on key tasks",
];

export function PricingSection({ animation = "fade-anim" }: { animation?: string }) {
  const [activeTab, setActiveTab] = useState<"monthly" | "project">("monthly");
  const { theme } = useTheme();
  const bgColor = theme === "light" ? "#0D0D0D" : "transparent";

  return (
    <div className="oit-price-area pt-120 pb-120" data-bg-color={bgColor} style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-2">
            <div className="oit-section-subtitle-box mb-30 text-center text-xxl-start">
              <span className="oit-section-subtitle oit-text-white">No hidden fees</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xxl-1 col-xxl-9">
            <div className="oit-section-title-box pl-70 mb-100 text-center text-xxl-start">
              <h3 className="oit-section-title oit-text-white oit-title-revel">Flexible Pricing</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-8 order-1 order-xxl-0">
            <div className={"oit-price-item mb-30 " + animation} data-delay=".3">
              <div className="oit-price-head d-flex justify-content-start justify-content-lg-between align-items-center">
                <div className="oit-price-head-content">
                  <h4 className="oit-price-title mb-15">Design & Dev support plan</h4>
                  <p>Ideal for brands needing ongoing design and <br /> dev support.</p>
                </div>
                <div className="oit-price-head-btn">
                  <nav>
                    <div className="nav nav-tab" role="tablist">
                      <button
                        className={`nav-links${activeTab === "monthly" ? " active" : ""}`}
                        type="button"
                        onClick={() => setActiveTab("monthly")}
                      >
                        Monthly
                      </button>
                      <button
                        className={`nav-links${activeTab === "project" ? " active" : ""}`}
                        type="button"
                        onClick={() => setActiveTab("project")}
                      >
                        Project based
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="tab-content">
                <div className={`tab-pane fade${activeTab === "monthly" ? " show active" : ""}`}>
                  <div className="oit-price-list mb-20">
                    <h4 className="oit-price-list-label mb-20">What's included:</h4>
                    <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1">
                      {monthlyFeatures.map((feature) => (
                        <div key={feature} className="col">
                          <div className="oit-price-list-item">
                            <i><SparkIcon /></i>
                            <span>{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="oit-price-btn-box d-flex justify-content-between align-items-center">
                    <span className="oit-price-range">$2000 /<i>month</i></span>
                    <a className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between" href="#">
                      <span>
                        <span className="text-1">View All Projects</span>
                        <span className="text-2">View All Projects</span>
                      </span>
                      <i><ArrowIcon /></i>
                    </a>
                  </div>
                </div>
                <div className={`tab-pane fade${activeTab === "project" ? " show active" : ""}`}>
                  <div className="oit-price-list mb-20">
                    <h4 className="oit-price-list-label mb-20">What's included:</h4>
                    <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-2">
                      {projectFeatures.map((feature) => (
                        <div key={feature} className="col">
                          <div className="oit-price-list-item">
                            <i><SparkIcon /></i>
                            <span>{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="oit-price-btn-box d-flex justify-content-between align-items-center">
                    <span className="oit-price-range">$1500 /<i>month</i></span>
                    <a className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between" href="#">
                      <span>
                        <span className="text-1">View All Projects</span>
                        <span className="text-2">View All Projects</span>
                      </span>
                      <i><ArrowIcon /></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 order-0 order-xxl-1">
            <div className={"oit-price-item mb-30 " + animation} data-delay=".5">
              <div className="oit-price-avater-box mb-30 d-flex justify-content-between align-items-center">
                <img src={avatar1} alt="Avatar" />
                <span>3 Spots Available</span>
              </div>
              <div className="oit-price-head-content">
                <h4 className="oit-price-title mb-10">Schedule a discovery calls</h4>
                <p>Let's connect and see how we can bring your <br /> vision to life.</p>
                <a className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between mt-35 mb-40" href="#contact">
                  <span>
                    <span className="text-1">Book A Call</span>
                    <span className="text-2">Book A Call</span>
                  </span>
                  <i><ArrowIcon /></i>
                </a>
              </div>
              <div className="oit-price-info d-inline-flex align-items-center">
                <i className="oit-price-info-icon fa-regular fa-paper-plane"></i>
                <div className="oit-price-info-desc">
                  <span>Do you prefer Email?</span>
                  <a className="border-line" href="mailto:helloreak@gmail.com">helloreak@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
