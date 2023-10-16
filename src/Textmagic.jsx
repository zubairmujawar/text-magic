import React from "react";
import { useState } from "react";

const Textmagic = () => {
  const [input, setinput] = useState("");

  const inputHandelar = (e) =>{
    setinput(e.target.value)
  }
  const uppercase = () => {
    setinput(input.toUpperCase())
  }
  const lowercase = () => {
    setinput(input.toLowerCase())
  }

  const eachLetterCapital = () =>{
    const titleCaseText = input.split(' ').map((word)=>{
      return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
    setinput(titleCaseText)
  }
  return (
    <div className="main-container">
      <h1>Text Magic</h1>
      <textarea
        placeholder="text here"
        value={input}
        id="textinput"
        onChange={inputHandelar}
        rows={17}
        cols={70}
        autoFocus
      ></textarea>
      <div>
        <button onClick={uppercase} className="btn">
          Upper
        </button>
        <button className="btn" onClick={lowercase}>
          Lower
        </button>
        <button className="btn" onClick={eachLetterCapital}>
          Upper case each first letter of word
        </button>
      </div>
    </div>
  );
};

export default Textmagic;
