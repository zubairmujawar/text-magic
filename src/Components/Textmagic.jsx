import React, { useCallback, useRef } from "react";
import { useState } from "react";

const Textmagic = () => {
  const [input, setinput] = useState("");

  const handelTransform = (transformFunction) => {
    if (input.trim() === "") {
      alert("Please write something");
    } else {
      return transformFunction(input);
    }
  };

  const inputHandelar = (e) => {
    setinput(e.target.value);
  };
  const uppercase = () => {
    setinput(input.toUpperCase());
  };
  const lowercase = () => {
    setinput(input.toLowerCase());
  };

  const eachLetterCapital = () => {
    const titleCaseText = input
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setinput(titleCaseText);
  };

  const removeSpaces = () => {
    setinput(input.replace(/\s+/g, " "));
  };

  const passRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(input);
  }, [input]);

  return (
    <div className="main-container">
      <div className="sec-container">
        <h1>Text Tool</h1>
        <textarea
          placeholder="text here"
          value={input}
          id="textinput"
          onChange={inputHandelar}
          rows={12}
          cols={50}
          ref={passRef}
          autoFocus
        ></textarea>
        <div>
          <button onClick={() => handelTransform(uppercase)} className="btn">
            Upper
          </button>
          <button className="btn" onClick={() => handelTransform(lowercase)}>
            Lower
          </button>
          <button
            className="btn"
            onClick={() => handelTransform(eachLetterCapital)}
          >
            Title case
          </button>
          <button className="btn" onClick={() => handelTransform(removeSpaces)}>
            Remove Extra Spaces
          </button>
          <button
            className="btn"
            onClick={() => handelTransform(copyToClipboard)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Textmagic;
