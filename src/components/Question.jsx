import React, { useState, useEffect } from "react";
import {nanoid} from "nanoid"
import Option from "./Option";

export default function Question(props) {

	const optionsArray = props.options.map(option=>{
		return {
			id: nanoid(),
			value: option,
			isSelected: false
		}
	})

	const options = optionsArray.map(option=>{
		return <Option value={option.value}/>
	})
  return (
    <div className="question-container">
      <div className="question">
        <span>Q.</span>
        <div dangerouslySetInnerHTML={{ __html: props.question }}></div>
      </div>
	  
      <div className="options-container">
       {options}
      </div>
    </div>
  );
}
