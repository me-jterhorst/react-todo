import "./TodoList.css";
import { ListText, ListBtn } from "./Buttons";

export default function TodoList({
  className,
  dataArr,
  removal,
  completion,
  editorial,
}) {
  let completedItems = dataArr.filter((item) => item.isCompleted);
  let unfinishedItems = dataArr.filter((item) => !item.isCompleted);
  console.group("TodoList");
  console.log(dataArr);
  console.log(completedItems);
  console.log(unfinishedItems);
  console.groupEnd();

  // Weiche stellen der Status varriiert
  let status;
  // ============================

  return (
    <List
      className={className}
      object={dataArr}
      status={status}
      removal={removal}
      completion={completion}
      editorial={editorial}
    />
  );
}

// ========================= UL ELEMENT
function List({ className, object, status, removal, completion, editorial }) {
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
            removal={removal}
            completion={completion}
            editorial={editorial}
          />
        );
      })}
    </ul>
  );
}

// ========================= LI ELEMENT
function ListItem({
  id,
  className,
  text,
  status,
  removal,
  completion,
  editorial,
}) {
  const btnClass = "btn";
  return (
    <li id={id} className={className}>
      <ListText pendingState={status} content={text.txtContent} />
      <ListBtn
        className={btnClass}
        purpose="btn--delete"
        status={status}
        data={id}
        removal={removal}
      />

      <ListBtn
        className={btnClass}
        purpose="btn--complete"
        status={status}
        data={id}
        completion={completion}
      />

      <ListBtn
        className={btnClass}
        purpose="btn--edit"
        data={id}
        editorial={editorial}
      />
    </li>
  );
}
