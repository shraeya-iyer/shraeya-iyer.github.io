import React from 'react';
import './AboutMe.css';
import Headshot from '../assets/headshotzoomed.png'; 

const AboutMe = () => {
    const listItems = [
        <span key="item1">C3 (Cognition, Creativity, Communication) Lab: methods to improve legal reasoning in LLMs (independent study), Supervised by <a href="https://www.linkedin.com/in/servantez/" target="_blank" rel="noopener noreferrer">PhD Candidate Sergio Servantez</a> and <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/hammond-kristian.html" target="_blank" rel="noopener noreferrer">Professor Kristian Hammond</a></span>,
        <span key="item2">Law & Technology Initiative: evaluation of AI methods used in the legal field, With <a href="https://www.law.northwestern.edu/faculty/profiles/danielwlinna/" target="_blank" rel="noopener noreferrer">Professor Daniel W. Linna</a>, <a href="https://www.crdp.umontreal.ca/chercheurs/westermann-hannes/" target="_blank" rel="noopener noreferrer">Professor Hannes Westermann</a>, and <a href="https://www.cs.cmu.edu/~jsavelka/" target="_blank" rel="noopener noreferrer">Dr. Jaromir Savelka</a></span>
    ];
  return (
    <div className='mycookbook'>
        <h2 className='header2'></h2>
        <div className='card-container'>
            <div className='card'>
                <div className="content-container"> {/* Flex container */}
                    <div className="image-container">
                        <img src={Headshot} alt="Profile" />
                    </div>
                    <div className="text-container"> 
                        <span className='bar'></span>
                        <p className='normal-text'>
                            Hi! I’m Shraeya, a second-year studying Computer Science and Philosophy on the Pre-Law track at Northwestern University’s McCormick School of Engineering. I grew up in Seattle, Washington and love to visit my family and two dogs whenever I can (despite my hatred of the rain). In my free time, I love reading (current favorites: <a href="https://www.goodreads.com/book/show/18144590-the-alchemist" target="_blank" rel="noopener noreferrer">The Alchemist by Paulo Coelho</a>, <a href="https://www.goodreads.com/book/show/93.Heidi" target="_blank" rel="noopener noreferrer">Heidi by Johanna Spyri</a>, and <a href="https://www.goodreads.com/book/show/52578297-the-midnight-library" target="_blank" rel="noopener noreferrer">The Midnight Library by Matt Haig</a>), creative writing, spending time with my family, and recently, learning to sail with <a href="https://www.nusailing.com/ " target="_blank" rel="noopener noreferrer">NUST</a>! 
                        </p>                        
                        <p className='normal-text'>I’m interested in anything AI & Law - from the creation of AI tools for the legal domain, to the regulation of AI. I’m also interested in information ethics, data privacy, natural language processing, tech law, and intellectual property/patent law. Upon graduating, I intend to pursue either a JD or joint JD/PhD program. At the moment, I’m involved in several research projects at the heart of these intersections: </p>
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className='normal-text'>I’m also a Software Engineer for KosiSonic, where we are developing specialized noise canceling and voice amplification algorithms for video conferencing services and hearing aids.</p>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;


