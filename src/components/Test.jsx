import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Question from "./Question";
import Loader from "./Loader";
import Result from "./Result";
import { AppContext } from "../App";
import Notfound from "./quesNotFound";

export default function Test() {
  const { questions, submit, fetchData, loader, start, setQuestions } =
    useContext(AppContext);

  // useEffect(() => {
  //   fetchData();
  // }, [start]);
  
  useEffect(() => {
    fetchData();
    // Clean up function
    return () => {
      setQuestions([]);
    };
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
  ) : questions.length === 0 ? (
    <div className="test-page-container">
      <Notfound />
    </div>
  ) : (
    <div className="test-page-container">
      {questionElements}
      <Result />
    </div>
  );
}
