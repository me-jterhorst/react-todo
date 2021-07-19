import "./Header.css";
// ==== FORM
export default function Header({ className, onSubmit, onClick, state }) {
  return (
    <header>
      <form className={className} onSubmit={onSubmit}>
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
      <Checkbox onClick={onClick} state={state} />
    </header>
  );
}

function Checkbox({ onClick, state }) {
  return (
    <div className="checkToggle">
      <input type="checkbox" name="check" id="check" onClick={onClick} />
      <label htmlFor="check">{state ? "Show Pending" : "Show Done"}</label>
    </div>
  );
}
