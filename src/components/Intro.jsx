import { React, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import { categories, type, difficulty } from "../assets/questionSelectionData";

export default function Intro(props) {
  const { handleStart, requestData, setRequestData } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // useEffect(() => {
  //   console.log(requestData);
  // }, [requestData]);

  return (
    <div className="intro">
      <div className="intro-heading">QuizApp</div>
      <div className="intro-description">Quiz app using React</div>

      <ul className="filter-list">
        <li>
          <label htmlFor="amount">Number of Questions:</label> <br />
          <input
            id="amount"
            name="amount"
            type="number"
            min={1}
            max={50}
            value={requestData.amount}
            onChange={(e) => handleChange(e)}
          />
        </li>

        <li>
          <label htmlFor="category">Select Category</label> <br />
          <select
            id="category"
            name="category"
            value={requestData.category}
            onChange={(e) => handleChange(e)}
          >
            {categories.map((category) => {
              return (
                <option value={category.value} key={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </li>
        <li>
          <label htmlFor="difficulty">Select Difficulty:</label> <br />
          <select
            id="difficulty"
            name="difficulty"
            value={requestData.difficulty}
            onChange={(e) => handleChange(e)}
          >
            {difficulty.map((diff) => {
              return (
                <option value={diff.value} key={diff._id}>
                  {diff.name}
                </option>
              );
            })}
          </select>
        </li>
        <li>
          <label htmlFor="type">Select Type:</label> <br />
          <select
            id="type"
            name="type"
            value={requestData.type}
            onChange={(e) => handleChange(e)}
          >
            {type.map((val) => {
              return (
                <option value={val.value} key={val._id}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
      <Link
        to="/quiz"
        style={{
          textDecoration: "none",
        }}
      >
        <div className="start" onClick={handleStart}>
          Start quiz
        </div>
      </Link>
    </div>
  );
}
