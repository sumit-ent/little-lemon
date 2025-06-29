import "./MenuItem.css";

function Specials() {
  return (
    <div className="item-container">
      <img className="item-image" src="./menu/lemon-dessert.jpg"></img>
      <div>
        <span className="item-name">Lemon Desert</span>{" "}
        <span className="item-price">$ 5.99</span>
      </div>
      <div className="item-description">
        A delightful lemon dessert that is both refreshing and satisfying.
      </div>
      <div className="add-button">Add to Cart</div>
    </div>
  );
}

export default Specials;
