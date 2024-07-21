import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import MemoryGame from './components/MemoryGame';
import Instructions from './components/Instructions';
import './App.css';

export default function App() {
  return (
    <section className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/game' element={<MemoryGame />}></Route>
          <Route exact path='/leaderboard' element={<Leaderboard />}></Route>
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </section>
  )
}