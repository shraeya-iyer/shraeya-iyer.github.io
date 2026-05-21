import React from 'react';
import './AboutMe.css';

const AboutMe = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>

      <h2>About Me</h2>

      <img src="/headshotzoomed.png" alt="Shraeya Iyer" />

      <div>
        <p>
        Hi! I'm Shraeya, a senior at Northwestern University, studying Computer Science and Philosophy. I’m from Seattle, Washington, and love to visit my family and foster-fail dog, Barney, whenever I can. In my free time, I love reading (current favorites: <a href="https://www.goodreads.com/book/show/204927599-nexus">Nexus: A Brief History of Information Networks from the Stone Age to AI</a>, by Yuval Noah Harari, <a href="https://www.goodreads.com/book/show/18144590-the-alchemist">The Alchemist</a>, by Paulo Coehlo, <a href="https://www.goodreads.com/book/show/35959740-circe">Circe</a>, by Madeline Miller, <a href="https://www.goodreads.com/book/show/123942.A_Very_Easy_Death">A Very Easy Death</a>, by Simone de Beauvoir, and <a href="https://www.goodreads.com/book/show/10125949-you-are-free">Replacement Theory</a>, by Danzy Senna), listening to podcasts (current favorites: <a href="https://open.spotify.com/show/5eEQ5hd4CfpsYkfZZi136a?si=f3312d4337bb4e37">Choicology with Katy Milkman</a>, <a href="https://open.spotify.com/show/7DpL32jgjwBTah8o9HQkBl?si=0278d3953eb94811">Amicus with Dahlia Lithwick</a>, <a href="https://open.spotify.com/show/4aIlXHTDz5vrc78DyjFg66?si=8a0a471d51864cfb">Overthink</a>, and <a href="https://open.spotify.com/show/2Shpxw7dPoxRJCdfFXTWLE?si=79c936420ff14fc7">Philosophize This!</a>), creative writing, waterfall hikes, spending time with my friends and family, and recently, learning to sail with the <a href="https://www.nusailing.com/">Northwestern University Sailing Team</a>.
        </p>
        <p>
        Academically, I'm interested in research on AI Safety (specifically alignment & interpretability), social network analysis, and the ethical implications posed by emerging technologies. At Northwestern, I’m involved in several research projects at the heart of these areas, so jump over to the <a href="https://www.shraeyaiyer.com/#projects">Projects</a> tab to learn more.</p>
        <p>
        Apart from research, I’m currently an Education Board Member for the <a href="https://www.raiso.org/">Northwestern Responsible AI Student Organization</a>, where we host weekly meetings to discuss the societal impacts of emerging technologies. In addition to RAISO, I’ll also be serving as the VP of Technology for the <a href="https://www.nuaiclub.com/">Northwestern AI Club</a> this year, where I’ll be managing the club’s technical infrastructure, as well as leading an AI project team myself.</p>
        <p>
        In the future, I intend to pursue a PhD in Computer Science or Human Computer Interaction. In the meantime, I’m actively looking for full-time roles in Trust and Safety, Tech Policy/Think Tanks, as well as roles under the broader umbrella of AI Safety. I’m graduating in June 2026, and I love connecting with people who are interested in similar or otherwise interesting things. Please reach out to me at shraeya[dot]iyer[at]gmail[dot]com regarding opportunities, interests, or just to chat!
        </p>
      </div>
    </div>
  );
};

export default AboutMe; 