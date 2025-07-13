import "./ImageLoader.css";
import { useState } from "react";

function ImageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a delay for loading
  };

  return (
    <>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader-image"></div>
        </div>
      )}
      {children}
    </>
  );
}

export default ImageLoader;
