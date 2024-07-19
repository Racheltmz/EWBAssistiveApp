import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleHowToPlayClick = () => {
    alert('HOW TO PLAY button clicked');
    // Implement navigation or modal for how to play instructions
  };

  const handleStartGameClick = () => {
    alert('START GAME button clicked');
    // Implement navigation to the game page
  };

  const handleLeaderboardClick = () => {
    alert('LEADERBOARD button clicked');
    // Implement navigation to the leaderboard page
  };

  return (
    <div className="container">
      <h1>(GAME NAME)</h1>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="button-container">
        <button className="button how-to-play" onClick={handleHowToPlayClick}>HOW TO PLAY?</button>
        <button className="button start-game" onClick={handleStartGameClick}>START GAME!</button>
        <button className="button leaderboard" onClick={handleLeaderboardClick}>LEADERBOARD</button>
      </div>
    </div>
  );
}

