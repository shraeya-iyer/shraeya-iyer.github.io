import React from 'react';
import './AboutMe.css';

const Research = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>
      <div>
        <h2>Research</h2>
        <p>Some projects I'm excited about at the moment:</p>
        
        <div style={{ textAlign: 'left', marginBottom: '2em' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>SONIC (The Science of Networks in Communities) Lab</h3>
          <ul style={{ paddingLeft: '20px', listStylePosition: 'outside', marginTop: '0' }}>
            <li style={{ marginBottom: '0.5em' }}>
              Performing data analysis and research under PhD Candidate <a href="https://megan-a-chan.com/" target="_blank" rel="noopener noreferrer">Megan Chan</a> and <a href="https://nosh.northwestern.edu/" target="_blank" rel="noopener noreferrer">Professor Noshir Contractor</a>. Designed and executed multiplex network analysis to investigate relationship between leader influence and collective team outcomes in space mission simulations. Constructed binary intersection networks from motivation and idea-sharing data, performed team-specific performance classifications, analyzed how network centralization patterns relate to globally normalized synergy scores across three teams. Results revealed performance-dependent effects: network centralization showed no significant relationship with synergy for high-performing leaders but significant positive relationship for low-performing leaders, indicating centralized network structures may enhance team performance when individual leadership is suboptimal.
            </li>
            <li style={{ marginBottom: '0.5em' }}>
              Extended abstract accepted to <a href="https://netscix2026.github.io/#portfolio" target="_blank" rel="noopener noreferrer">NetSciX 2026</a> for an Oral Presentation with co-authors Megan Chan, Isabel Su, Jeffrey Tu, and Professor Noshir Contractor, and continuing to work on full paper through Fall 2025/Winter 2026.
            </li>
          </ul>
        </div>

        <div style={{ textAlign: 'left', marginBottom: '2em' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>Law & Technology Initiative</h3>
          <ul style={{ paddingLeft: '20px', listStylePosition: 'outside', marginTop: '0' }}>
            <li style={{ marginBottom: '0.5em' }}>
              Developing frameworks to improve evaluation of AI methods used in the legal field with <a href="https://www.law.northwestern.edu/faculty/profiles/danielwlinna/" target="_blank" rel="noopener noreferrer">Professor Daniel W. Linna</a>, <a href="https://www.crdp.umontreal.ca/chercheurs/westermann-hannes/" target="_blank" rel="noopener noreferrer">Professor Hannes Westermann</a>, and <a href="https://www.cs.cmu.edu/~jsavelka/" target="_blank" rel="noopener noreferrer">Dr. Jaromir Savelka</a>. Co-authoring a survey paper on evaluation methodologies for AI in law and contributing a book chapter, “Technical Methods for Evaluating AI Applications for Legal Tasks” (forthcoming, Cambridge University Press). Designed and implemented structured evaluation pipelines for large language models, including categorical, numerical, and open-texture outputs, with integration into Google Sheets for layered human–AI review. Conducted literature review and benchmarking of AI tools across dimensions such as accuracy, calibration, robustness, and fairness, aimed at establishing replicable evaluation protocols for legal tasks. Presented preliminary findings to 40+ researchers at the <a href="http://cslawworkshop.org/" target="_blank" rel="noopener noreferrer">CS+Law monthly reading and research group</a>.            </li>
            <li style={{ marginBottom: '0.5em' }}>
              Researching the use of deepfakes in courts and how to address them: investigating admissibility standards for expert testimony under Illinois Rules of Evidence. Analyzed authentication requirements under IRE 901, gatekeeping under IRE 104/403, and challenges posed by the Frye “general acceptance” standard for deepfake detection tools. Synthesized forensic science precedent (e.g., fingerprint and voiceprint benchmarking) to highlight risks of admitting unreliable detection algorithms. Assisted in drafting a high-level outline and recommendations emphasizing the need for cautious judicial gatekeeping, heightened authentication requirements, and rigorous vetting of deepfake authenticity experts. Continuing to expand this work into a full paper on the intersection of generative AI, evidentiary reliability, and juror bias. Collaborating with the <a href="https://www.mccormick.northwestern.edu/news/articles/2024/11/northwestern-security-and-ai-lab-releases-new-terrorism-early-warning-system-forecasts/" target="_blank" rel="noopener noreferrer">Northwestern Security and AI Lab</a> and several judges.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Research; 