import { useState } from "react";
import { ArrowIcon, AccordionPlusIcon } from "../icons/ArrowIcon";
import avatar1 from "../../assets/img/avater/avater-1.png";

const faqs = [
  {
    question: "What distinguishes us from other agencies?",
    answer: "We have worked at the largest agencies in the world and we've owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready",
  },
  {
    question: "What happens after the design is ready & I approve it?",
    answer: "We have worked at the largest agencies in the world and we've owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready",
  },
  {
    question: "Do you charge for additional revisions?",
    answer: "We have worked at the largest agencies in the world and we've owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready",
  },
  {
    question: "I have an agency. Can I outsource work to you?",
    answer: "We have worked at the largest agencies in the world and we've owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready",
  },
  {
    question: "What do I need to give you to get started?",
    answer: "We have worked at the largest agencies in the world and we've owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready",
  },
];

import { useTheme } from "../../contexts/ThemeContext";

export function FaqSection({ animation = "fade-anim" }: { animation?: string }) {
  const [openIndex, setOpenIndex] = useState(0);
  const { theme } = useTheme();
  const bgColor = theme === "light" ? "#f5f5f5" : "transparent";

  return (
    <div className="oit-faq-area oit-faq-style pt-120 pb-65" data-bg-color={bgColor} style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="oit-section-subtitle-box mb-30 text-center text-md-start">
              <span className="oit-section-subtitle">Recognitions</span>
            </div>
            <div className="oit-section-title-box mb-70 text-center text-md-start">
              <h3 className="oit-section-title fsz-60 oit-title-revel">Frequently Asked <br /> Questions</h3>
            </div>
            <div className={"oit-price-item mb-30 " + animation} data-delay=".5">
              <div className="oit-price-avater-box mb-30 d-flex justify-content-between align-items-center">
                <img src={avatar1} alt="Avatar" />
                <span>3 Spots Available</span>
              </div>
              <div className="oit-price-head-content">
                <h4 className="oit-price-title mb-5">Find The Right Solution <br /> For You Now</h4>
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
          <div className="offset-xl-1 col-xl-7">
            <div className="oit-faq-accordion-wrap mb-30">
              <div className="accordions" id="accordionExample">
                {faqs.map((faq, i) => (
                  <div key={i} className={"accordion-item " + animation}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${openIndex !== i ? " collapsed" : ""}`}
                        type="button"
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                      >
                        {faq.question}
                        <AccordionPlusIcon />
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse${openIndex === i ? " show" : ""}`}
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
