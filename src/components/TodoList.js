import "./TodoList.css";
import { ListText, ListBtn, EditBtn } from "./Buttons";

export default function TodoList(props) {
  console.group("TodoList");
  console.log(props.dataArr);
  console.groupEnd();

  const buttonFunction = {
    delete: props.removal,
    complete: props.complete,
    edit: props.edit,
  };

  // Weiche stellen der Status varriiert
  let status = true;
  // ============================
  return (
    <List
      className={props.className}
      object={props.dataArr}
      status={status}
      btnFunction={buttonFunction}
    />
  );
}

// ========================= UL ELEMENT
function List({ className, object, status, btnFunction }) {
  return (
    <ul className={status ? "doneItems" : "pendingItems"}>
      {object.map((item, index) => {
        return (
          <ListItem
            id={item.id}
            key={index}
            className={className}
            text={item}
            status={status}
            btnFunction={btnFunction}
          />
        );
      })}
    </ul>
  );
}

// ========================= LI ELEMENT
function ListItem({ id, className, text, status, btnFunction }) {
  const btnClass = "btn";
  return (
    <li id={id} className={className}>
      <ListText pendingState={status} content={text.txtContent} />
      <ListBtn
        className={btnClass}
        purpose="btn--delete"
        status={status}
        onClick={btnFunction.delete}
      />

      <ListBtn
        className={btnClass}
        purpose="btn--complete"
        onClick={btnFunction.complete}
        status={status}
      />

      <EditBtn
        className={btnClass}
        purpose="btn--edit"
        onClick={btnFunction.edit}
      />
    </li>
  );
}
