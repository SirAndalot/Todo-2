import React, { useState } from "react";

import Input from "./Input";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  // nice

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
              ...todo,
              complete: !todo.complete
            }
            : todo
      )
    );

  function editTodo (i) {
  
  }

  return (
    <div className="App">
      <Input
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <table border="1">
              <tr>
                <td>
                  id
                </td>
                <td>
                  todo
                </td>
                <td>
                  status
                </td>
                <td>
                  Toggle Satus
                </td>
              </tr>
              <tr>
                <td>
                  {i}

                </td>
                <td onDoubleClick={() => editTodo(i)} >
                  {text}
                </td>
                <td>
                  {complete ? "Completed" : "Inprogress"}
                </td>
                <td >
                  <button onClick={() => toggleComplete(i)}>
                    {complete ? "Incomplete" : "Completed"}
                  </button>
                </td>
              </tr>

            </table>

          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};
export default App;
