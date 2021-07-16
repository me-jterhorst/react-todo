import "./Buttons.css";

export function ListText({ content, pendingState }) {
  return <p className={pendingState ? "complete" : ""}>{content}</p>;
}

export function ListBtn({
  className,
  purpose,
  status,
  data,
  removal,
  completion,
  editorial,
}) {
  function assignAction(event) {
    switch (purpose) {
      case "btn--delete":
        removal(event, data);
        break;
      case "btn--edit":
        editorial(event, data);
        break;
      default:
        completion(event, data);
        break;
    }
  }

  return (
    <button
      className={`${className} ${
        purpose === "btn--delete"
          ? "btn--delete"
          : purpose === "btn--edit"
          ? "btn--edit"
          : status
          ? ""
          : "btn--complete"
      }`}
      onClick={assignAction}
    >
      {purpose === "btn--delete"
        ? "X"
        : purpose === "btn--edit"
        ? "Edit"
        : status
        ? "Undo"
        : "Done"}
    </button>
  );
}
