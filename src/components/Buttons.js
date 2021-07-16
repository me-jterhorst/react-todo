import "./Buttons.css";

export function ListText({ content, pendingState }) {
  return <p className={pendingState ? "complete" : ""}>{content}</p>;
}

export function ListBtn({ className, purpose, onClick, status, data }) {
  return (
    <button
      aria-label={data}
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
