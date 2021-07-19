import "./Footer.css";

export default function Footer({ onChange }) {
  return (
    <div>
      <label htmlFor="footer__input">Search here:</label>
      <input
        id="footer__input"
        name="footer__input"
        onChange={onChange}
        className="footer__input"
      />
    </div>
  );
}
