import "./Header.css";
// ==== FORM
export default function Header({ className, onSubmit }) {
  return (
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
  );
}
