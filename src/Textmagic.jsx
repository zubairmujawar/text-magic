import React from "react";
import { useState } from "react";

const Textmagic = () => {
  const [input, setinput] = useState("");

  const inputHandler = (e) => {
    setinput(e.target.value);
  };
  const uppercase = () => {
    setinput(input.toUpperCase());
  };
  return (
    <div className="main-container">
      <h1>Text</h1>
      <textarea
        placeholder="text here"
        value={input}
        onChange={inputHandler}
        rows={8}
        cols={50}
      ></textarea>
      <button onClick={uppercase} className="btn">
        Upper
      </button>
      <button className="btn">Lower</button>
    </div>
  );
};

export default Textmagic;
