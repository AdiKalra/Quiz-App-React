import React from "react";

export default function Intro(props) {
  return (
    <div className="intro">
      <div className="intro-heading">Quizzical</div>
      <div className="intro-description">Some description if needed</div>
      <button className="start" onClick={props.startQuiz}>
        Start quiz
      </button>
    </div>
  );
}
