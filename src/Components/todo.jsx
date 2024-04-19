import React, { useState } from "react";

const Todo = () => {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);

  const addItem = () => {
    setitem([...item, input]);
    setinput("");
  };
  const deleteItem = (id) => {
    const updatedTodo = item.filter((elem, ind) => {
      return ind !== id;
    });
    setitem(updatedTodo);
  };
  const clearAll = () => {
    setitem([]);
  };
  return (
    <div className="about-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          id="input"
          placeholder="type your todo.."
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="btn" onClick={addItem}>
          Add
        </button>
        <button onClick={clearAll} className="btn">
          clear All
        </button>
      </div>
      <div>
        <ul>
          {item.map((elem, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5 className="todo">{elem}</h5>
              <button className="btn" onClick={() => deleteItem(index)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
