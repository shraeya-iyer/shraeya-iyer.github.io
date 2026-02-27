import React from 'react';
import './AboutMe.css';

const Awards = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>
      <div>
        <h2>Awards</h2>
        <div style={{ textAlign: 'left', marginBottom: '2em' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>Computing Research Association Outstanding Undergraduate Researcher Award</h3>
          <p>
            <strong>Honorable Mention</strong>
            <br />Received an honorable mention for the 2025-2026 CRA Outstanding Undergraduate Researcher Award for my work on technical methods for evaluating AI applications for legal tasks. Nominated by my mentor, <a href="https://www.law.northwestern.edu/faculty/profiles/danielwlinna/" target="_blank" rel="noopener noreferrer">Professor Daniel W. Linna</a>, and the Northwestern Computer Science Department.
            <br /><i>Media Mentions:</i>
            <br />CRA official announcement of award recipients: <a href="https://cra.org/crn/2026/01/2025-26-cra-outstanding-undergraduate-researcher-award-recipients-announced/" target="_blank" rel="noopener noreferrer">webpage link</a>, <a href="https://cra.org/crn/wp-content/uploads/sites/7/2026/01/January-CRN-2026.pdf" target="_blank" rel="noopener noreferrer">PDF newsletter link</a>.
            <br />Northwestern announcement of award recepients: <a href="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2026/three-students-receive-honorable-mention-in-cra-undergraduate-research-awards.html" target="_blank" rel="noopener noreferrer">article link</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards; 