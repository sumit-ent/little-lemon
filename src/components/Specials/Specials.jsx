import "./Specials.css";
import MenuItem from "../MenuItem/MenuItem";
import SPECIALS from "../../data/mock-specials";

function Specials() {
  return (
    <>
      <div className="specials-container">
        <h2>Specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="menu-items">
        {SPECIALS.map((special) => (
          <MenuItem
            key={special.id}
            name={special.itemName}
            price={special.price}
            description={special.description}
            image={special.image}
          />
        ))}
      </div>
    </>
  );
}

export default Specials;
