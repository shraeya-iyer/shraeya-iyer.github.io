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
        Hi! I'm Shraeya, an incoming senior at Northwestern University, studying Computer Science and Philosophy. I grew up in Seattle, Washington, with my mom, dad, younger brother, grandparents, and two lovely dogs (Marley & Sammy). I now have a foster (fail) dog named <a href="https://big-dog-barney.github.io/"> Barney</a> and love to visit my family and dogs whenever I can. In my free time, I love reading (current favorites: <a href="https://www.goodreads.com/book/show/18144590-the-alchemist">The Alchemist</a>, by Paulo Coehlo, <a href="https://www.goodreads.com/book/show/35959740-circe">Circe</a>, by Madeline Miller, and <a href="https://www.goodreads.com/book/show/123942.A_Very_Easy_Death">A Very Easy Death</a>, by Simone de Beauvoir), listening to podcasts (current favorites: <a href="https://open.spotify.com/show/5eEQ5hd4CfpsYkfZZi136a?si=f3312d4337bb4e37">Choicology with Katy Milkman</a>, <a href="https://open.spotify.com/show/7DpL32jgjwBTah8o9HQkBl?si=0278d3953eb94811">Amicus with Dahlia Lithwick</a>, <a href="https://open.spotify.com/show/4aIlXHTDz5vrc78DyjFg66?si=8a0a471d51864cfb">Overthink</a>, and <a href="https://open.spotify.com/show/2Shpxw7dPoxRJCdfFXTWLE?si=79c936420ff14fc7">Philosophize This!</a>), creative writing, waterfall hikes, spending time with my friends and family, and recently, learning to sail with the <a href="https://www.nusailing.com/">Northwestern University Sailing Team</a>.
        </p>
        <p>
        Academically, I'm interested in research surrounding social network analysis (focusing on online polarization, team efficiency, and predictive modeling), ethical implications of emerging technologies, and the intersection between CS and Law. At Northwestern, I’m involved in several research projects at the heart of these areas, so jump over to the “Research” tab to learn more. Apart from research, I’m currently an Education Board Member for the <a href="https://www.raiso.org/">Northwestern Responsible AI Student Organization</a>, where we host weekly meetings to discuss the societal impacts of emerging technologies. If you’re an interested Northwestern community member, we’d love to have you (and we love to include an array of different majors in the conversations – no need to be CS)! In addition to RAISO, I’ll also be serving as the VP of Technology for the <a href="https://www.nuaiclub.com/">Northwestern AI Club</a> this year, where I’ll be managing the club’s technical infrastructure (including AI project teams/TPMs, hackathon teams, etc.) and resource bank, as well as leading an AI project team myself.</p>
        <p>
        In the future, I intend to pursue a PhD in Computational Social Sciences (or a similar program). In the meantime, I’m actively looking for full-time roles in Data Analytics, and am particularly interested in Decision/User Analytics, People Analytics, and Product/Growth Analytics. I’m graduating in June 2026, and I love connecting with people who are interested in similar or otherwise interesting things. Please reach out to me at shraeya[dot]iyer[at]gmail[dot]com regarding opportunities, interests, or just to chat!
        </p>
      </div>
    </div>
  );
};

export default AboutMe; 