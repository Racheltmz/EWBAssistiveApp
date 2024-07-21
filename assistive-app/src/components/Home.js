import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEnterClick = () => {
    if (username.trim()) {
      localStorage.setItem('username', username.trim());
      alert(`Welcome, ${username}!`);
      navigate('/game');
    } else {
      alert('Please enter your name.');
    }
  };

  const handleHowToPlayClick = () => {
    navigate('/instructions');
  };

  return (
    <div className="container">
    
      <h1>Memory Game!</h1>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={handleInputChange} 
          placeholder="Enter your name" 
        />
        <button onClick={handleEnterClick} className="button enter-button">Enter</button>
      </div>
      <div className="button-container">
        <button className="button how-to-play" onClick={handleHowToPlayClick}>HOW TO PLAY?</button>
        <button className="button start-game">START GAME!</button>
        <button className="button leaderboard">LEADERBOARD</button>
      </div>
    </div>
  );
}

export default Home;
