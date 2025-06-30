import "./Specials.css";
import MenuItem from "../MenuItem/MenuItem.js";

function Specials() {
  return (
    <>
      <div className="specials-container">
        <h2>Specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="menu-items">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </>
  );
}

export default Specials;
