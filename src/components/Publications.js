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

          <p>
            For a more detailed view of each of these projects, feel free tojump over to the projects tab.
          </p>

          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>2025</h3>
          <p>
            <strong>A Multiplex Lens on Influencer Performance, Group Synergy, and Network Centralization</strong>
            <br /><i>Megan Chan*, <u>Shraeya Iyer*</u>, Isabel Su*, Jeffrey Tu*, Noshir Contractor</i><br />
            NetSciX, Oral Conference Presentation. February 17-20, 2026.<br /><a href="https://openreview.net/pdf?id=fTdi2HJTxR" target="_blank" rel="noopener noreferrer">Link to extended abstract</a>.
          </p>
          <img src={`${process.env.PUBLIC_URL || ''}/shraeya_netscix_presentation.jpg`} alt="NetSciX presentation: Step 1.3 Construct Multiplex Networks" />
          <div style={{ clear: 'both' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>2026</h3>
          <p>
            <strong>Chapter 16: Technical Methods for Evaluating AI Applications for Legal Tasks, in L. Karl Branting with Mia Bonardi, Equalizing Justice: Harnessing AI for Litigants Without Lawyers</strong>
            <br /><i><u>Shraeya Iyer</u>*, Daniel W. Linna Jr.*, Jaromir Savelka*</i><br />
            Cambridge University Press. Forthcoming July 2026.<br /><a href="https://www.cambridge.org/gu/universitypress/subjects/law/e-commerce-law/equalizing-justice-harnessing-ai-litigants-without-lawyers?format=PB#about-the-authors" target="_blank" rel="noopener noreferrer">Link to Cambridge University Press book details & author information</a>.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 