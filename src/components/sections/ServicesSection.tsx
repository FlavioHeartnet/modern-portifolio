import { SparkIcon, ArrowIcon } from "../icons/ArrowIcon";
import service1 from "../../assets/img/service/service-1.jpg";
import service2 from "../../assets/img/service/service-2.jpg";
import service3 from "../../assets/img/service/service-3.jpg";
import service4 from "../../assets/img/service/service-4.jpg";
import abShape1 from "../../assets/img/about/ab-shape-1.jpg";

const services = [
  {
    title: "User Interface & Experience Design",
    img: service1,
    bgColor: "#ABF5FF",
    categories: ["Style guide creation", "Color & typography", "Brand consistency", "Visual storytelling", "Logo design"],
  },
  {
    title: "Web Development",
    img: service2,
    bgColor: "#c6cfff",
    categories: ["Style guide creation", "Color & typography", "Brand consistency", "Visual storytelling", "Logo design"],
  },
  {
    title: "Search Engine Optimization",
    img: service3,
    bgColor: "#ffb8b0",
    categories: ["Style guide creation", "Color & typography", "Brand consistency", "Visual storytelling", "Logo design"],
  },
  {
    title: "Brand identity design",
    img: service4,
    bgColor: "#fbe8a4",
    categories: ["Style guide creation", "Color & typography", "Brand consistency", "Visual storytelling", "Logo design"],
  },
];

export function ServicesSection() {
  return (
    <div className="oit-service-area oit-service-1 p-relative pt-120 pb-120 oit-panel-pin-area" data-bg-color="#000" style={{ backgroundColor: "#000" }}>
      <div className="oit-project-shape d-none d-xl-block">
        <img data-speed=".8" src={abShape1} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className="oit-section-subtitle-box mb-50 text-center text-xl-start">
              <span className="oit-section-subtitle oit-text-white">Services</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xl-1 col-xl-10">
            <div className="oit-section-title-box pl-70 mb-120 text-center text-xl-start">
              <h3 className="oit-section-title oit-text-white oit-title-revel">Solutions that <br /><span className="pl-265">Drive results</span></h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            {services.map((service) => (
              <div key={service.title} className="oit-service-item oit-panel-pin" data-start="top 20%" data-end="bottom 80%" data-bg-color={service.bgColor} style={{ backgroundColor: service.bgColor }}>
                <h4 className="oit-service-title"><a className="border-line" href="#">{service.title}</a></h4>
                <div className="oit-service-content-wrap d-flex align-items-center">
                  <div className="oit-service-thumb">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="oit-service-content">
                    <p>
                      From brand strategy to immersive digital experiences,
                      we <br /> offer end-to-end creative solutions…
                    </p>
                    <div className="row row-cols-xl-2 row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
                      {service.categories.map((cat) => (
                        <div key={cat} className="col">
                          <div className="oit-service-category">
                            <span className=" d-flex align-items-center">
                              <SparkIcon />
                              {cat}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-btn text-center mt-35">
              <a className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between mt-35" href="#contact">
                <span>
                  <span className="text-1">Book A Quick Call</span>
                  <span className="text-2">Book A Quick Call</span>
                </span>
                <i><ArrowIcon /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
