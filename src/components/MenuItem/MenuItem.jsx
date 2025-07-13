import "./MenuItem.css";
import { useState } from "react";
import LazyImage from "../../utilities/common-utilities";

function Specials(props) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="item-container">
      <div className="image-container">
        {isLoading && <div className="item-image-loader"></div>}
        <LazyImage
          className="item-image"
          imageName={props.image}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={handleImageLoad}
        ></LazyImage>
      </div>
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
