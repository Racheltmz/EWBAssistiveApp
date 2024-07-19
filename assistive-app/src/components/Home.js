import React from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgb(240, 224, 214)',
    textAlign: 'center',
  },
  h1: {
    color: 'black',
  },
};

export default function Home() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Memory Game</h1>
      <p>Name</p>
    </div>
  );
}
import React, { useState } from 'react';
import './styles.css';

export default function Home() {
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
      <h1>Memory Game</h1>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
        className="input-box"
      />
      <div className="button-container">
        <button onClick={handleHowToPlayClick}>HOW TO PLAY?</button>
        <button onClick={handleStartGameClick}>START GAME!</button>
        <button onClick={handleLeaderboardClick}>LEADERBOARD</button>
      </div>
    </div>
  );
}

