import { useContext } from "react";
import { AppContext } from "../App";
import classNames from "classnames";
import sanitizeHtml from "sanitize-html";

export default function Option({
  selected,
  correct_option,
  value,
  selected_option,
  handleOptionClick,
}) {
  const { submit } = useContext(AppContext);
  return (
    <div>
      <button
        className={classNames({
          option: true,
          "option-btn": !submit,
          selectedButton: !submit && selected,
          correct_option: submit && correct_option == value,
          incorrect_option: submit && correct_option != value && selected,
        })}
        onClick={!submit ? handleOptionClick : undefined}
      >
        {sanitizeHtml(value)}
      </button>
    </div>
  );
}

