import { useContext } from "react";
import { AppContext } from "../App";
import Option from "./Option";

export default function Question(props) {
  const {handleOptionClick, score} = useContext(AppContext)
  const options = props.options.map((option) => {
    return (
      <Option
        value={option.value}
        key={option.optionId}
        selected={option.isSelected}
        correct_option={props.correct_option}
        selected_option={props.selected_option}
        handleOptionClick={()=>handleOptionClick(props.quesId, option.optionId, option.value)}
      />
    );
  });
  return (
    <div className="question-container">
      <div className="question">
        <span>Q{props.num}.</span>
        <div dangerouslySetInnerHTML={{ __html: props.question }}></div>
      </div>

      <div className="options-container">{options}</div>
    </div>
  );
}
