import "./Buttons.css";

export function ListText({ content, pendingState }) {
  return <p className={pendingState ? "complete" : ""}>{content}</p>;
}

export function ListBtn({ className, purpose, onClick, status }) {
  return (
    <button
      className={`${className} ${
        purpose === "btn--delete"
          ? "btn--delete"
          : status
          ? ""
          : "btn--complete"
      }`}
      onClick={onClick}
    >
      {purpose === "btn--delete" ? "X" : status ? "Undo" : "Done"}
    </button>
  );
}

export function EditBtn({ className, purpose, onClick }) {
  return (
    <button className={`${className} ${purpose}`} onClick={onClick}>
      Edit
    </button>
  );
}
