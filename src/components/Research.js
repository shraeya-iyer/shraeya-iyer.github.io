import React from 'react';
import './AboutMe.css';

const Research = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>
      <div>
        <h2>research</h2>
        <p>Here are some of the projects I'm currently involved in:</p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px', listStylePosition: 'outside' }}>
        <li style={{ marginBottom: '1em' }}>
          <strong>SONIC (The Science of Networks in Communities) Lab:</strong> performing data analysis and research under PhD Candidate <a href="https://megan-a-chan.com/" target="_blank" rel="noopener noreferrer">Megan Chan</a> and <a href="https://nosh.northwestern.edu/" target="_blank" rel="noopener noreferrer">Professor Noshir Contractor</a>. Designed and executed multiplex network analysis to investigate relationship between leader influence and collective team outcomes in space mission simulations. Constructed binary intersection networks from motivation and idea-sharing data, performed team-specific performance classifications, analyzed how network centralization patterns relate to globally normalized synergy scores across three teams. Results revealed performance-dependent effects: network centralization showed no significant relationship with synergy for high-performing leaders but significant positive relationship for low-performing leaders, indicating centralized network structures may enhance team performance when individual leadership is suboptimal. Submitted extended abstract to <a href="https://netscix2026.github.io/#portfolio" target="_blank" rel="noopener noreferrer">NetSciX 2026</a> with co-authors Megan Chan, Isabel Su, Jeffrey Tu, and Noshir Contractor (awaiting review), and continuing to work on full paper through Fall 2025.
        </li>
        <li style={{ marginBottom: '1em' }}>
          <strong>Law & Technology Initiative:</strong> developing framework to improve evaluation of AI methods used in the legal field with <a href="https://www.law.northwestern.edu/faculty/profiles/danielwlinna/" target="_blank" rel="noopener noreferrer">Professor Daniel W. Linna</a>, <a href="https://www.crdp.umontreal.ca/chercheurs/westermann-hannes/" target="_blank" rel="noopener noreferrer">Professor Hannes Westermann</a>, and <a href="https://www.cs.cmu.edu/~jsavelka/" target="_blank" rel="noopener noreferrer">Dr. Jaromir Savelka</a>. Co-authoring survey paper, and Co-authoring chapter discussing "Technical Methods for Evaluating AI Applications for Legal Tasks" in book to be published by Cambridge University Press. Presented to 40+ researchers at <a href="https://www.cslawworkshop.org/past-events" target="_blank" rel="noopener noreferrer">CS+Law monthly reading and research group</a> in evaluation of AI research.
        </li>
        <li style={{ marginBottom: '1em' }}>
          <strong>Personal Projects:</strong> analyzing structural differences in phenomenas of online polarization and communication. Developing an interface to reduce online polarization.
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Research; 