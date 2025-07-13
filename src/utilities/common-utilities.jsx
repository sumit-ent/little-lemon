import React, { useState, useEffect } from "react";

const LazyImage = ({ imageName, ...restProps }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Dynamically loads an image asset using Vite's recommended pattern.
   * @param {string} assetName - The name of the image file (e.g., 'bruschetta.svg', 'pizza.png').
   * Assumes images are directly inside src/assets/images/.
   * @returns {Promise<string|null>} A promise that resolves to the image URL string,
   * or null if the image fails to load.
   */
  const lazyLoadAsset = (assetName) => {
    try {
      // This is the key for Vite:
      // new URL(relativePath, import.meta.url) resolves the path correctly
      // for both dev and production builds, accounting for hashing.
      const imageUrl = new URL(`../assets/${assetName}`, import.meta.url);

      // You can also use a dynamic import for modules, but for direct image URLs,
      // new URL() is generally what you want.
      // If you were importing a JS module that *then* exports an image,
      // you'd use import() and then module.default
      // For direct image files, the new URL() approach directly gives you the URL.

      return Promise.resolve(imageUrl.href); // Since new URL() directly gives the href, it's not truly async "loading" here,
      // but returning a Promise keeps the API consistent with potential future
      // changes or more complex loading scenarios.
    } catch (error) {
      console.error(`Failed to construct URL for asset: ${assetName}`, error);
      // Return null or a placeholder URL in case of an error
      return Promise.resolve(null);
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component

    const loadImage = async () => {
      setIsLoading(true);
      setError(null);
      setImageSrc(null); // Clear previous image source

      try {
        const src = await lazyLoadAsset(imageName);
        if (isMounted) {
          if (src) {
            setImageSrc(src);
          } else {
            setError(`Image "${imageName}" not found or failed to load.`);
            // You could set a default placeholder image here if `src` is null
            // setImageSrc('/path/to/placeholder.jpg');
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(
            `An unexpected error occurred while loading "${imageName}".`
          );
          console.error(`Error loading image "${imageName}":`, err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false; // Cleanup: Component unmounted
    };
  }, [imageName]); // Re-run effect if imageName changes

  if (isLoading) {
    return <div>Loading image...</div>;
  }

  if (error) {
    return (
      <div
        style={{
          color: "red",
          border: "1px solid red",
          padding: "10px",
          margin: "10px",
        }}
      >
        <p>Error displaying image: {error}</p>
        {/* Optionally display a broken image icon or a fallback image */}
        {/* <img src="/path/to/broken-image-icon.png" alt="Error" /> */}
      </div>
    );
  }

  // Ensure imageSrc is not null before rendering <img>
  if (!imageSrc) {
    return <div>No image available.</div>; // Should ideally be caught by error above, but good for safety.
  }

  return (
    <img
      src={imageSrc}
      alt={`Dynamically loaded: ${imageName}`}
      {...restProps}
    />
  );
};

export default LazyImage;
