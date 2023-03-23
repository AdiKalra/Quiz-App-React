import { useState, createContext, useEffect } from "react";
import "./App.css";
// import Main from "./components/Main";
import Intro from "./components/Intro";
import Test from "./components/Test";
import { nanoid } from "nanoid";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
export const AppContext = createContext();

function App() {

  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [loader, setLoader] = useState(false);
  const [score, setScore] = useState(0);

  function handleStart() {
    setStart((prev) => !prev);
  }

  async function fetchData() {
    setLoader(true);
    const res = await fetch("https://opentdb.com/api.php?amount=5");
    const resData = await res.json();
    const data = await resData.results;
    setQuestions(() => {
      return data.map((item) => {
        return {
          questionId: nanoid(),
          question: item.question,
          options: getOptionsArray([
            ...item.incorrect_answers,
            item.correct_answer,
          ]),
          correct_option: item.correct_answer,
          selected_option: "",
        };
      });
    });
    setLoader(false);
  }

  function getOptionsArray(arr) {
    const options = arr.map((option) => {
      return {
        optionId: nanoid(),
        value: option,
        isSelected: false,
      };
    });
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  function handleOptionClick(quesId, optionId, value) {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        return quesId !== question.questionId
          ? { ...question }
          : {
              ...question,
              selected_option: question.selected_option ? null : value,
              options: question.options.map((option) => {
                return option.optionId === optionId
                  ? { ...option, isSelected: !option.isSelected }
                  : { ...option, isSelected: false };
              }),
            };
      });
    });
  }

  function handleSubmitClick() {
    setSubmit(true);
    setQuestions((prev) => {
      return prev.map((question) => {
        if (question.selected_option === question.correct_option) {
          setScore((prev) => prev + 1);
        }
        return {
          ...question,
          option: question.options.map((option) => ({
            ...question.options,
            isSelected: "false",
          })),
        };
      });
    });
  }

  function handleResetClick() {
    setQuestions([]);
    setSubmit(false);
    setScore(0);
    handleStart();

  }

  const value = {
    start,
    handleStart,
    questions,
    submit,
    fetchData,
    handleOptionClick,
    handleSubmitClick,
    handleResetClick,
    loader,
    score,
  };

  return (
    <div className="App">
      <AppContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="main flex-col">
                  <Intro />
                </div>
              }
            />
            <Route
              path="/quiz"
              element={
                <div className="main flex-col">
                  <Test />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
