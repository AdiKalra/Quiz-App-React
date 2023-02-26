import { useContext } from "react";
import { AppContext } from "../App";

export default function Option({
  selected,
  correct_option,
  value,
  selected_option,
  handleOptionClick,
}) {
  // const [buttonStyle, setButtonStyle];

  const { submit } = useContext(AppContext);
  return (
    <div>
      <button
        className={`option ${selected && !submit ? "selectedButton" : ""} 
        ${
          submit && value === correct_option
            ? "correct_option"
            : selected_option !== correct_option &&
              selected_option === value &&
              selected && submit
            ? "incorrect_option"
            : ""
        }
        ${selected && submit ? "incorrect_option" : ""} 
       `}
        dangerouslySetInnerHTML={{ __html: value }}
        onClick={!submit ? handleOptionClick : undefined}
      ></button>
    </div>
  ); 
}

// {}
