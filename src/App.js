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

  function handleDelete(event) {
    deleteItem(event, entries, setEntries);
  }
  function handleComplete(event) {
    console.log("complete from App");
  }
  function handleEdit(event) {
    console.log("edit from App");
  }
  // ======================================================= ASSEMBLY
  return (
    <div className="App">
      <Header className="top" onSubmit={handleSubmit} />
      <TodoList
        className="item"
        dataArr={entries}
        removal={handleDelete}
        complete={handleComplete}
        edit={handleEdit}
      />
    </div>
  );
}

// ========================================================= OUTSIDE

/*GET DATA FROM INPUT */
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

/*DELETE LINE */
function deleteItem(event, storedData, setEntries) {
  console.group("delete Button");
  console.log(event.target);
  console.log(storedData);
  console.groupEnd();

  let cleanedUpArr = storedData.filter((item) => {
    return item.id !== 1626430480207;
  });

  setEntries([...cleanedUpArr]);
}
export default App;
