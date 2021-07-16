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

  function handleDelete(event, data) {
    deleteItem(event, data, entries, setEntries);
  }
  function handleComplete(event, data) {
    completeItem(event, data, entries, setEntries);
  }
  function handleEdit(event, data) {
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
        completion={handleComplete}
        editorial={handleEdit}
      />
    </div>
  );
}

// ========================================================= OUTSIDE

/*DELETE LINE */
function deleteItem(event, data, storedData, setEntries) {
  const clickedItem = Number(data);
  // console.group("delete Button");
  // console.log(clickedItem);
  // console.log(storedData);
  // console.groupEnd();

  let cleanedUpArr = storedData.filter((item) => {
    return item.id !== clickedItem;
  });

  setEntries([...cleanedUpArr]);
}
/*TOGGLE COMPLETE OR INCOMPLETE */
function completeItem(event, data, storedData, setEntries) {
  const clickedItem = Number(data);
  let statusArr = storedData.map((item) => {
    if (item.id === clickedItem) {
      item.isCompleted = !item.isCompleted;
      return item;
    }
    return item;
  });

  setEntries([...statusArr]);
  // console.group("complete Button");
  // console.log(clickedItem);
  // console.log(storedData);
  // console.groupEnd();
}
export default App;
