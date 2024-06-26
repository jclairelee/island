import React, { useEffect, useState } from "react";
import "./Slide.scss";

const Slide = ({ children }) => {
  console.log({ children });
  const [moveIndex, setMoveIndex] = useState(0);
  const showPrev = () => {
    if (moveIndex === 0) {
      return;
    } else {
      setMoveIndex((prev) => prev + 10);
    }
  };

  const showNext = () => {
    if (moveIndex === -50) {
      return;
    } else {
      setMoveIndex((prev) => prev - 10);
    }
  };
  console.log(moveIndex);
  return (
    <div className="slideList">
      <div className="slideList-content">
        <div
          className="slideList-content__cards"
          style={{ transform: `translateX(${moveIndex}%)` }}
        >
          {children}
        </div>{" "}
        <button className="slideList-content__arrow prevBtn" onClick={showPrev}>
          &lt;
        </button>
        <button className="slideList-content__arrow nextBtn" onClick={showNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slide;
