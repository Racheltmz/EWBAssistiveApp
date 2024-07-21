import React from 'react';
import { useNavigate } from 'react-router-dom';

function Instructions() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="instruction-container">
    <h1>How to Play</h1>
    <p><span className="step">Objective:</span> Form a three-letter word using the letter cards on the screen.</p>
    <p><span className="step">Setup:</span> You will see several letter cards facedown on the screen.</p>
    <p><span className="step">Step 1:</span> Click the "Flip all" button to reveal all the letters on the cards.</p>
    <p><span className="step">Step 2:</span> Try to remember the position of each letter within the time limit.</p>
    <p><span className="step">Time Limit:</span> You have a limited amount of time to memorize the positions of the letters.</p>
    <p><span className="step">After the Timer Ends:</span> All the cards will be flipped back to their facedown positions, and the letters will not be visible anymore.</p>
    <p><span className="step">Forming the Word:</span> Rely on your memory to recall the positions of the letters. Click on the cards to reveal the letters and form a three-letter word.</p>
    <p><span className="step">Winning the Game:</span> Successfully form the correct three-letter word to win the game.</p>
    <p><span className="step">Tips:</span> Focus on remembering the positions of the letters during the time limit. Try forming the word in your mind while the cards are still visible.</p>
    <button className="back-button" onClick={handleBackClick}>Back</button>
  </div>
);
}

export default Instructions;
