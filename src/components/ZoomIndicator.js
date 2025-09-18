import React from 'react';

const ZoomIndicator = ({ currentDistance, minDistance, maxDistance, onZoomIn, onZoomOut }) => {
  const zoomLevel = Math.max(0, Math.min(1, (maxDistance - currentDistance) / (maxDistance - minDistance)));

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      zIndex: 1000,
    }}>
      {/* Zoom Control Buttons */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '8px',
        justifyContent: 'center',
      }}>
        <button
          onClick={onZoomOut}
          disabled={currentDistance >= maxDistance}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)',
            cursor: currentDistance >= maxDistance ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
            opacity: currentDistance >= maxDistance ? 0.3 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentDistance < maxDistance) {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          −
        </button>
        <button
          onClick={onZoomIn}
          disabled={currentDistance <= minDistance}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)',
            cursor: currentDistance <= minDistance ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
            opacity: currentDistance <= minDistance ? 0.3 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentDistance > minDistance) {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          +
        </button>
      </div>
      
      {/* Zoom Level Indicator Bar */}
      <div style={{
        width: '150px',
        height: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '5px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <div style={{
          width: `${zoomLevel * 100}%`,
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          transition: 'width 0.1s ease-out'
        }} />
      </div>
    </div>
  );
};

export default ZoomIndicator; 