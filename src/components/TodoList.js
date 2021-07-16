import "./TodoList.css";
import { ListText, ListBtn } from "./Buttons";

export default function TodoList({
  className,
  dataArr,
  removal,
  completion,
  editorial,
}) {
  const finishedItems = dataArr.filter((item) => item.isCompleted);
  const unfinishedItems = dataArr.filter((item) => !item.isCompleted);
  console.group("TodoList");
  console.log(dataArr);
  console.groupEnd();

  return (
    <main>
      <List
        className={className}
        object={unfinishedItems}
        status={false}
        removal={removal}
        completion={completion}
        editorial={editorial}
      />
      <List
        className={className}
        object={finishedItems}
        status={true}
        removal={removal}
        completion={completion}
        editorial={editorial}
      />
    </main>
  );
}

// ========================= UL ELEMENT
function List({ className, object, status, removal, completion, editorial }) {
  return (
    <section>
      <h2> {status ? "Pending" : "Completed"}</h2>
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
    </section>
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
