import { React, useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function Intro(props) {
  const { handleStart } = useContext(AppContext);
  return (
    <div className="intro">
      <div className="intro-heading">QuizApp</div>
      <div className="intro-description">Quiz app using React</div>
      <Link to="/quiz" style={{textDecoration: 'none'}}>
        <div className="start" onClick={handleStart}>
          Start quiz
        </div>
      </Link>
    </div>
  );
}
