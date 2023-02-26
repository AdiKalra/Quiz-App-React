import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Question from "./Question";
import Loader from "./Loader";
import Result from "./Result";
import { AppContext } from "../App";

export default function Test() {
  const { questions, submit, fetchData, loader, start } =
    useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, [start]);

  const questionElements = questions.map((ques, index) => {
    return (
      <Question
        key={ques.questionId}
        question={ques.question}
        options={ques.options}
        quesId={ques.questionId}
        correct_option={ques.correct_option}
        selected_option={ques.selected_option}
        num={index + 1}
      />
    );
  });
  return loader ? (
    <Loader />
  ) : (
    <div className="test-page-container">
      {questionElements}
      <Result />
    </div>
  );
}
