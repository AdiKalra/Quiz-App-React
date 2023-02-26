import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import App, { AppContext } from "../App";
import ToggleButton from "./ToggleButton";

export default function Result() {
  const { handleSubmitClick, handleResetClick, submit, score } =
    useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="result">
      {submit ? (
        <div className="result-description">
          You scored {score}/5 correct answers
        </div>
      ) : (
        ""
      )}
      {/*<ToggleButton value="Start Again" handleClick={handleResetClick} />*/}
      <ToggleButton
        value={!submit ? "Check Answers" : "Play Again"}
        handleClick={
          !submit
            ? handleSubmitClick
            : () => {
                navigate("/quiz");
                handleResetClick();
              }
        }
      />
    </div>
  );
}
