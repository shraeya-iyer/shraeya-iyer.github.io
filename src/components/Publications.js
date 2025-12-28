import React from 'react';
import './AboutMe.css';

const Publications = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>
      <div>
        <h2>Publications</h2>
        <div style={{ textAlign: 'left', marginBottom: '2em' }}>

          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>2025</h3>
          <p>
            <strong>A Multiplex Lens on Influencer Performance, Group Synergy, and Network Centralization</strong>
            <br /><i>Megan Chan, Shraeya Iyer, Isabel Su, Jeffrey Tu, Noshir Contractor</i><br />
            NetSciX, Oral Conference Presentation
          </p>
          
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>2026</h3>
          <p>
            <strong>Chapter 16: Technical Methods for Evaluating AI Applications for Legal Tasks, in L. Karl Branting with Mia Bonardi, Equalizing Justice: Harnessing AI for Litigants Without Lawyers</strong>
            <br /><i>Shraeya Iyer*, Daniel W. Linna Jr.*, Jaromir Savelka*</i><br />
            Cambridge University Press, forthcoming July 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publications; 