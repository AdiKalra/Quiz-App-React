import { useState, useEffect } from "react";
import Intro from "./Intro";
import Test from "./Test";

export default function Main() {
  const [start, setStart] = useState(false);
  function startQuiz() {
    setStart(true);
  }
  return (
    <div className="main flex-col">
      {!start && <Intro startQuiz={startQuiz} />}
      {start && <Test />}
    </div>
  );
}
