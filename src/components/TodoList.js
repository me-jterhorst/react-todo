import "./TodoList.css";
import { ListText, ListBtn, EditBtn } from "./Buttons";

export default function TodoList({ className, dataArr }) {
  console.group("TodoList");
  console.log(dataArr);
  console.groupEnd();
  // Weiche stellen der Status varriiert
  let status = true;
  // ============================
  return <List className={className} object={dataArr} status={status} />;
}

function List({ className, object, status }) {
  return (
    <ul className={status ? "doneItems" : "pendingItems"}>
      {object.map((item, index) => {
        return (
          <ListItem
            key={index}
            className={className}
            text={item}
            status={status}
          />
        );
      })}
    </ul>
  );
}

function ListItem({ className, text, status }) {
  const btnClass = "btn";
  return (
    <li className={className}>
      <ListText pendingState={status} content={text.txtContent} />
      <ListBtn
        className={btnClass}
        purpose="btn--delete"
        onClick={() => {
          console.log("delete");
        }}
        status={status}
      />

      <ListBtn
        className={btnClass}
        purpose="btn--complete"
        onClick={() => {
          console.log("complete");
        }}
        status={status}
      />

      <EditBtn
        className={btnClass}
        purpose="btn--edit"
        onClick={() => {
          console.log("edit");
        }}
      />
    </li>
  );
}
