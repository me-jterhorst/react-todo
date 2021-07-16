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
    event.preventDefault();

    const inputValue = event.target.inputfield.value;

    let newData = {
      id: Date.now(),
      txtContent: inputValue,
      isCompleted: false,
    };

    const newTodos = [...entries, newData];

    inputValue ? setEntries(newTodos) : alert("No User Input");

    event.target.reset();
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

/*DELETE LINE */
function deleteItem(event, storedData, setEntries) {
  const clickedItem = Number(event.target.ariaLabel);
  console.group("delete Button");
  console.log(clickedItem);
  console.log(storedData);
  console.groupEnd();

  let cleanedUpArr = storedData.filter((item) => {
    return item.id !== clickedItem;
  });

  setEntries([...cleanedUpArr]);
}
export default App;
