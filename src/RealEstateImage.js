import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function RealEstateImage({ src, alt }) {
  return (
    <div className="image-wrapper">
      <LazyLoadImage
        alt={alt}
        src={src}
        effect="blur" // 👈 shows blur until loaded
        placeholderSrc="/placeholder-color.jpg" // 👈 fallback color/image
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default RealEstateImage;
