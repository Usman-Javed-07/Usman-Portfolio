import { useState, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : null);

  useEffect(() => {
    if (!priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
    } else {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
      setImageSrc(src);
    }
  }, [src, priority]);

  return (
    <div className={`optimized-image-container ${isLoaded ? 'loaded' : ''}`}>
      {!isLoaded && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      <img
        src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3C/svg%3E'}
        alt={alt}
        className={`${className} optimized-image ${isLoaded ? 'image-loaded' : 'image-loading'}`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;
