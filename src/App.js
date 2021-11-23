import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Main, { deck } from './components/Main';

const size = 3;
deck.initialize(size);

function App() {
  const [hasWon, setHasWon] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    if (score === Math.pow(size, 3)) {
      setIsFinished(true);
      setHasWon(true);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      {isFinished ? (
        <Modal
          size={size}
          hasWon={hasWon}
          setHasWon={setHasWon}
          score={score}
          highScore={highScore}
          setScore={setScore}
          setIsFinished={setIsFinished}
        />
      ) : (
        <div />
      )}
      <Header
        isFinished={isFinished}
        score={score}
        highScore={highScore}
        title="Don't pick the same color twice!"
      />
      <Main
        size={size}
        isFinished={isFinished}
        setIsFinished={setIsFinished}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
