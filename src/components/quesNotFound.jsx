import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { AppContext } from "../App";

function Notfound() {
  const navigate = useNavigate();
  const { setLoader, handleResetClick } = useContext(AppContext);

  const style = {
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap:"30px"
  }
  
  return (
    <div style = {style}>
      <h1>Questions not found for your request</h1>
      <ToggleButton
        value={"Go to Home Page"}
        handleClick={() => {
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/");
            handleResetClick();
          }, 500);
        }}
      />
    </div>
  );
}

export default Notfound;
