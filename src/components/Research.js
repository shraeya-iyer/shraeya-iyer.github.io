import React from 'react';
import './AboutMe.css';

const Research = ({ handleClose }) => {
  return (
    <div className="popup-container" style={{ height: '80vh', display: 'block' }}>
      <button onClick={handleClose} className="close-button">
        &times;
      </button>
      <h2>research</h2>
      <p>Here are some of the projects I'm currently involved in:</p>
      <ul style={{ textAlign: 'left', paddingLeft: '20px', listStylePosition: 'outside' }}>
        <li style={{ marginBottom: '1em' }}>
          <strong>SONIC (The Science of Networks in Communities) Lab:</strong> performing data analysis and research under PhD Candidate <a href="https://megan-a-chan.com/" target="_blank" rel="noopener noreferrer">Megan Chan</a> and Professor Noshir Contractor. Designed and executed multiplex network analysis to investigate relationship between leader influence and collective team outcomes in space mission simulations. Constructed binary intersection networks from motivation and idea-sharing data, performed team-specific performance classifications, analyzed how network centralization patterns relate to globally normalized synergy scores across three teams. Results revealed performance-dependent effects: network centralization showed no significant relationship with synergy for high-performing leaders but significant positive relationship for low-performing leaders, indicating centralized network structures may enhance team performance when individual leadership is suboptimal.
        </li>
        <li style={{ marginBottom: '1em' }}>
          <strong>Law & Technology Initiative:</strong> developing framework to improve evaluation of AI methods used in the legal field with <a href="https://www.law.northwestern.edu/faculty/profiles/danielwlinna/" target="_blank" rel="noopener noreferrer">Professor Daniel W. Linna</a>, <a href="https://www.crdp.umontreal.ca/chercheurs/westermann-hannes/" target="_blank" rel="noopener noreferrer">Professor Hannes Westermann</a>, and <a href="https://www.cs.cmu.edu/~jsavelka/" target="_blank" rel="noopener noreferrer">Dr. Jaromir Savelka</a>. Co-authoring survey paper, and Co-authoring chapter discussing "Technical Methods for Evaluating AI Applications for Legal Tasks" in book to be published by Cambridge University Press. Presented to 40+ researchers at <a href="https://www.cslawworkshop.org/past-events" target="_blank" rel="noopener noreferrer">CS+Law monthly reading and research group</a> in evaluation of AI research.
        </li>
        <li style={{ marginBottom: '1em' }}>
          <strong>C3 (Cognition, Creativity, Communication) Lab:</strong> methods to improve legal reasoning in LLMs (independent study), Supervised by <a href="https://www.linkedin.com/in/servantez/" target="_blank" rel="noopener noreferrer">PhD Candidate Sergio Servantez</a> and <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/hammond-kristian.html" target="_blank" rel="noopener noreferrer">Professor Kristian Hammond</a>.
        </li>
      </ul>
    </div>
  );
};

export default Research; 