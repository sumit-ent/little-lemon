import "./About.css";
import { useState } from "react";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <div className="about-header">Little Lemon</div>
        <div className="secondary-header">Chicago</div>
        <p className="about-description">
          Escape to Little Lemon, where the vibrant flavors of the Mediterranean
          seashore come to life! Savor fresh, sun-kissed ingredients in every
          dish, from zesty seafood to aromatic herbs. Immerse yourself in a
          warm, inviting atmosphere that evokes the charm of a coastal retreat.
          Join us for an unforgettable dining experience that will transport you
          straight to the shores of the Mediterranean.
        </p>
      </div>
      <div className="about-image">
        {isLoading && <div className="image-loader"></div>}
        <img
          src="/Mario-and-Adrian.jpg"
          alt="Restaurant food"
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}

export default About;
