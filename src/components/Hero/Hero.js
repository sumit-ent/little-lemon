import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Little Lemon</h1>
      <div className="hero-text">
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves a simple
          food and classic cocktails in a lively but casual environment. The
          restaurant features alt
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/restaurantfood.jpg" alt="Restaurant food" />
      </div>
    </div>
  );
}

export default Hero;
