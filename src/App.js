import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  // console.group("App.js");
  // console.log(entries);
  // console.groupEnd();
  // DUMB/ Bridge FUNCTION
  function handleSubmit(event) {
    setInput(event, entries, setEntries);
  }

  // ======================================================= ASSEMBLY
  return (
    <div className="App">
      <Header className="top" onSubmit={handleSubmit} />
      <TodoList className="item" dataArr={entries} />
    </div>
  );
}

// ========================================================= OUTSIDE

function setInput(event, storedData, setEntries) {
  event.preventDefault();

  const inputValue = event.target.inputfield.value;

  let newData = {
    id: Date.now(),
    txtContent: inputValue,
    isCompleted: false,
  };

  const newTodos = [...storedData, newData];

  inputValue ? setEntries(newTodos) : alert("No User Input");

  event.target.reset();
}

export default App;
