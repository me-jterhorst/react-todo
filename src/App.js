import "./App.css";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);

  // ==== FORM
  function Header({ className }) {
    return (
      <form className={className} onSubmit={handleInput}>
        <input
          type="text"
          name="inputfield"
          id="inputfield"
          placeholder="What's your todo?"
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    );
  }

  function handleInput(event) {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.inputfield.value;

    if (inputValue) {
      let newData = {
        name: inputValue,
        isCompleted: false,
      };

      const newTodos = [...entries, newData];
      setEntries(newTodos);
      form.reset();
    } else {
      alert("No User Input");
    }
  }

  // ===== LIST ITEM
  function TodoList({ todos }) {
    let obj = todos.map((todo, index) => (todo = { ...todo, id: index }));

    console.log(obj);
    let doneTodos = obj.filter((todo) => (todo = todo.isCompleted === true));
    console.log("Done");
    console.log(doneTodos);

    let pendingTodos = obj.filter(
      (todo) => (todo = todo.isCompleted === false)
    );
    console.log("Pending");
    console.log(pendingTodos);
    return (
      <main>
        <ul className="pendingItems">
          {pendingTodos.map((item, index) => {
            let listItem = (
              <li key={index} id={index} className="item">
                <button className="btn btn--delete" onClick={inbetweenDelete}>
                  X
                </button>
                <p className={item.isCompleted ? "complete" : ""}>
                  {item.name}
                </p>
                <button
                  className={item.isCompleted ? "btn" : "btn btn--complete"}
                  onClick={inbetweenComplete}
                >
                  {item.isCompleted ? "Undo" : "Done"}
                </button>
              </li>
            );
            return listItem;
          })}
        </ul>

        <ul className="doneItems">
          {doneTodos.map((item, index) => {
            let listItem = (
              <li key={index} id={index} className="item">
                <button className="btn btn--delete" onClick={inbetweenDelete}>
                  X
                </button>
                <p className={item.isCompleted ? "complete" : ""}>
                  {item.name}
                </p>
                <button
                  className={item.isCompleted ? "btn" : "btn btn--complete"}
                  onClick={inbetweenComplete}
                >
                  {item.isCompleted ? "Undo" : "Done"}
                </button>
              </li>
            );
            return listItem;
          })}
        </ul>
      </main>
    );
  }

  // ===== BTN CLICK EVENTS
  //Give
  function addOrder(arr) {
    const arrWithIds = arr.map((obj, index) => (obj = { ...obj, id: index }));
    return arrWithIds;
  }

  // WEIRD PASSING OVER FUNCTION
  function inbetweenDelete(event) {
    let index = Number(event.target.parentNode.id);
    handleDelete(event, index, entries);
  }

  // ACTUAL DELETE
  function handleDelete(event, identifier, data) {
    let correctOrder = addOrder(data);
    const newSelection = correctOrder.filter((item) => item.id !== identifier);

    setEntries([...newSelection]);
  }

  // WEIRD PASSING OVER FUNCTION
  function inbetweenComplete(event) {
    let index = Number(event.target.parentNode.id);
    handleComplete(event, index, entries);
  }

  // ACTUAL Complete
  function handleComplete(event, identifier, data) {
    let correctOrder = addOrder(data);
    let currentItem = correctOrder[identifier];
    currentItem.isCompleted = !currentItem.isCompleted;

    setEntries([...correctOrder]);
  }

  // ===== ASSEMBLY
  return (
    <div className="App">
      <Header className="top" />
      <TodoList todos={entries} />
    </div>
  );
}

export default App;
