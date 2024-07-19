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

