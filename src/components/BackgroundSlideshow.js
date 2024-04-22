import React, { useState, useEffect } from 'react';

const images = [
  '/path/to/first/image.jpg',
  '/path/to/second/image.jpg',
  '/path/to/third/image.jpg',
  // Add as many images as you want
];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div style={{
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>
      {/* Rest of your content */}
    </div>
  );
};

export default BackgroundSlideshow;
