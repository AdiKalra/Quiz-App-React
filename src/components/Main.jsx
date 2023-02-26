import { useContext } from "react";
import { AppContext } from "../App";
import Intro from "./Intro";
import Test from "./Test";

export default function Main() {
  const { start } = useContext(AppContext);
  return (
    <div className="main flex-col">
      {!start && <Intro />}
      {start && <Test />}
    </div>
  );
}
