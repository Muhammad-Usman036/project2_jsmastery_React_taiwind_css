import React from "react";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Testimonials = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/*.todo */}

    <div className="absolute z-[0] w-[60%] h-[60%] -righy-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6  relative z-[1] ">
      <h1 className={`${styles.heading2}`}>
        What people are <br className="sm:block hidden" />
        sying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          However, Tailwind CSS does offer a range of flexbox-related utility
          classes that you can use to create flexible and responsive layouts
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
