import React from 'react';

const ZoomIndicator = ({ currentDistance, minDistance, maxDistance }) => {
  const zoomLevel = Math.max(0, Math.min(1, (maxDistance - currentDistance) / (maxDistance - minDistance)));

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      width: '150px',
      height: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '5px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      zIndex: 1000,
    }}>
      <div style={{
        width: `${zoomLevel * 100}%`,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: 'width 0.1s ease-out'
      }} />
    </div>
  );
};

export default ZoomIndicator; 