import "./MenuItem.css";

function Specials(props) {
  return (
    <div className="item-container">
      <img className="item-image" src={props.image}></img>
      <div className="item-spec">
        <span className="item-name">{props.name}</span>{" "}
        <span className="item-price">{props.price}</span>
      </div>
      <div className="item-description">{props.description}</div>
      <div className="item-action">
        Order a Delivery
        <img className="order-image" src="./menu/order-icon.svg"></img>
      </div>
    </div>
  );
}

export default Specials;
