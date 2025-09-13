import React from 'react';
import './AboutMe.css';

const RecentReads = ({ handleClose }) => {
  return (
    <div className="popup-container">
      <button onClick={handleClose} className="close-button">
        &times;
      </button>

      <div>
        <h2>recent reads</h2>
        <p>
          here are some books i've been reading lately and really enjoyed:
        </p>
        <ul>
          <li>
            <strong><a href="https://www.goodreads.com/book/show/18144590-the-alchemist">the alchemist</a></strong> by paulo coehlo - a beautiful allegorical novel about following your dreams and finding your personal legend
          </li>
          <li>
            <strong><a href="https://www.goodreads.com/book/show/139253.The_House_on_Mango_Street">the house on mango street</a></strong> by sandra cisneros - a coming-of-age story told through vignettes about a young latina girl growing up in chicago
          </li>
          <li>
            <strong><a href="https://www.goodreads.com/book/show/123942.A_Very_Easy_Death">a very easy death</a></strong> by simone de beauvoir - a deeply personal and philosophical reflection on her mother's death
          </li>
          <li>
            <strong><a href="https://www.goodreads.com/book/show/1845.George_Orwell">1984</a></strong> by george orwell - a dystopian classic that feels more relevant than ever in our current political climate
          </li>
          <li>
            <strong><a href="https://www.goodreads.com/book/show/13079982-fahrenheit-451">fahrenheit 451</a></strong> by ray bradbury - another dystopian masterpiece about censorship and the power of books
          </li>
        </ul>
        <p>
          i'm always looking for book recommendations, especially in philosophy, literature, and social justice. feel free to reach out with suggestions!
        </p>
      </div>
    </div>
  );
};

export default RecentReads;
