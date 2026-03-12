import { ArrowIcon } from "../components/icons/ArrowIcon";
import errorShape from "../assets/img/shape/error-1.png";
import errorImg from "../assets/img/shape/error.png";

export function NotFoundPage() {
  return (
    <div className="error-area error-ptb" style={{ backgroundImage: `url(${errorShape})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-xl-7 col-lg-7 col-md-10 col-12 col-sm-11">
            <div className="error-wrap">
              <div className="error-thumb text-center mb-75">
                <img src={errorImg} alt="404 Error" />
              </div>
              <div className="error-content text-center">
                <h3 className="error-title mb-35">Oops sorry! page didn't found</h3>
                <a className="oit-btn-border btn-black-bg d-inline-flex align-items-center justify-content-between" href="/">
                  <span>
                    <span className="text-1">Back to Home</span>
                    <span className="text-2">Back to Home</span>
                  </span>
                  <i><ArrowIcon /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
