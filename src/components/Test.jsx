import React, { useState, useEffect } from "react";
import Question from "./Question";
import axios from "axios";
export default function Test() {
  let data = [];

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const resData = await res.json();
      data = await resData.results;
      console.log(data);
      setQuestions(() => {
        return data.map((item) => {
          return {
            question: item.question,
            options: [...item.incorrect_answers, item.correct_answer],
            correct_option: item.correct_answer,
            selected_option: "asdf",
          };
        });
      });
    }
    fetchData();
  }, []);
  // console.log(data)
  //   console.log(questions);
  //   console.log(options);
  const questionElements = questions.map((ques) => {
    return (
      <Question
        question={ques.question}
        options={ques.options}
        correct_option={ques.correct_option}
        selected_option={ques.selected_option}
      />
    );
  });
  return <div className="test-page-container">{questionElements}</div>;
}
