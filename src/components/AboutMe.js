import React from 'react';
import './AboutMe.css';

const AboutMe = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>

      <img src="/headshotzoomed.png" alt="Shraeya Iyer" />

      <div>
        <h2>about me</h2>
        <p>
        hi! i'm shraeya, an incoming senior (undergrad) at Northwestern University, studying computer science and philosophy. i grew up in Seattle, WA with my mom, dad, younger brother, grandparents, and two lovely dogs (Marley & Sammy). i now have a foster dog named <a href="https://big-dog-barney.github.io/">Barney</a> (please reach out if you're interested in adopting him and are near the Seattle, WA area!) and love to visit my family and dogs whenever I can (despite my hatred of the rain). in my free time, i love reading (current favorites: <a href="https://www.goodreads.com/book/show/18144590-the-alchemist">the alchemist</a>, by paulo coehlo, <a href="https://www.goodreads.com/book/show/139253.The_House_on_Mango_Street">the house on mango street</a>, by sandra cisneros, and <a href="https://www.goodreads.com/book/show/123942.A_Very_Easy_Death">a very easy death</a>, by simone de beauvoir), creative writing, spending time with my friends and family, crocheting, and recently, learning to sail with <a href="https://www.nusailing.com/">the northwestern university sailing team</a>.
        </p>
        <p>
        academically, i'm interested in research surrounding ethical technology usage, the intersection between cs + law, and predictive modeling with social network analysis. i also love learning more about wearables and perceptual engineering. i'm also interested in data privacy, natural language processing, IP law, human computer interaction and more. most basically, i'm interested in understanding how we connect with each others as humans, and how technology impacts and changes these structures of connection. in the future, i intend on pursuing a joint jd-phd program, or a phd program that combines computer science with philosophy, communications, or sociology. currently, i'm involved in several research projects at the heart of these areas, so jump over to the "research" tab to learn more!
        </p>
        <p>
        i love connecting with people who are interested in similar or otherwise interesting things, so please reach out to me at shraeya[dot]iyer[at]gmail[dot]com!
        </p>
      </div>
    </div>
  );
};

export default AboutMe; 