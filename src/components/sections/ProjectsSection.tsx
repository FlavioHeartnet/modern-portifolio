import project1 from "../../assets/img/project/project-1.jpg";
import project2 from "../../assets/img/project/project-2.jpg";
import project3 from "../../assets/img/project/project-3.jpg";
import project4 from "../../assets/img/project/project-4.jpg";
import project5 from "../../assets/img/project/project-5.jpg";
import projectShape1 from "../../assets/img/project/shape-1.png";

const projects = [
  { title: "Cash Send App", img: project1, category: "Design", year: "2025", colClass: "col-xl-6" },
  { title: "Fintech Web", img: project2, category: "Design", year: "2025", colClass: "col-xl-6" },
  { title: "Mobile App", img: project3, category: "Design", year: "2025", colClass: "col-xl-12" },
  { title: "SaaS App", img: project4, category: "Design", year: "2025", colClass: "col-xl-6" },
  { title: "Interaction", img: project5, category: "Design", year: "2025", colClass: "col-xl-6" },
];

export function ProjectsSection() {
  return (
    <div className="oit-project-area p-relative pt-120 pb-60" id="projects">
      <div className="oit-project-shape d-none d-xl-block">
        <img data-speed=".9" src={projectShape1} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className="oit-section-subtitle-box mb-50 text-center text-xl-start">
              <span className="oit-section-subtitle">Project</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xl-1 col-xl-10">
            <div className="oit-section-title-box pl-70 mb-120 text-center text-xl-start">
              <h3 className={`oit-section-title oit-title-revel`}>Selected Works <br /><span className="pl-265">2024—2025©</span></h3>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project.title} className={project.colClass}>
              <div className="oit-project-item mb-30">
                <div className="oit-project-thumb image-gsl">
                  <a href="#">
                    <div className="image-gsl-canvas"></div>
                    <img className="w-100" src={project.img} alt={project.title} />
                  </a>
                </div>
                <div className="oit-project-content d-flex justify-content-between align-items-center">
                  <h4 className="oit-project-title mb-0"><a className="border-line" href="#">{project.title}</a></h4>
                  <div className="oit-project-category">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
