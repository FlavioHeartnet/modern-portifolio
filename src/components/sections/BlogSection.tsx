import { CalendarIcon } from "../icons/ArrowIcon";
import blog1 from "../../assets/img/blog/blog-1.jpg";
import blog2 from "../../assets/img/blog/blog-2.jpg";
import blog3 from "../../assets/img/blog/blog-3.jpg";

const blogs = [
  { title: "Why Mobile-First Design Should Be Your Default", img: blog1, date: "August 15, 2025", delay: ".3" },
  { title: "Why Your Business Needs Strategic", img: blog2, date: "August 15, 2025", delay: ".5" },
  { title: "Design Thinking and Its Role in Digital Product", img: blog3, date: "August 15, 2025", delay: ".7" },
];

export function BlogSection({ animation = "fade-anim" }: { animation: string }) {
  return (
    <div className="oit-blog-area pt-120 pb-90" data-bg-color="#f5f5f5" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className="oit-section-subtitle-box mb-30 text-center text-lg-start">
              <span className="oit-section-subtitle">Insights Blog</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-xl-2 col-xl-10">
            <div className="oit-section-title-box pl-70 mb-100 text-center text-lg-start">
              <h3 className="oit-section-title oit-title-revel">Insights that inspire creativity</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.title} className="col-xl-4 col-lg-6">
              <div className={"oit-blog-item mb-30 " + animation} data-delay={blog.delay}>
                <div className="oit-blog-thumb">
                  <a href="#">
                    <img src={blog.img} alt={blog.title} />
                  </a>
                </div>
                <div className="oit-blog-content">
                  <span>
                    <i><CalendarIcon /></i>
                    {blog.date}
                  </span>
                  <h4 className="oit-blog-title">
                    <a className="border-line" href="#">{blog.title}</a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
