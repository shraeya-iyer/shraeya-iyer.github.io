import React from 'react';
import './ThoughtBubble.css'; 

// Define an array of thought bubbles
const thoughtBubbles = [
    { text: "a picture from yellowstone national park in 2020 - one of the most memorable family vacations and beautiful places i've ever been." },
];

const ThoughtBubble = () => {
    return (
      <div>
        {thoughtBubbles.map((bubble, index) => (
          <div key={index} className="thought-bubble">
            {bubble.text}
          </div>
        ))}
      </div>
    );
};

export default ThoughtBubble;
