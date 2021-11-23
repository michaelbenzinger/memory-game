import React from 'react';
import { deck } from '../components/Main';

function Modal(props) {
  const { size, score, highScore, setScore, setIsFinished, hasWon, setHasWon } =
    props;

  return hasWon ? (
    <div className="modal-container">
      <div className="modal">
        <h2>You win!</h2>
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
        <button
          onClick={() => {
            deck.initialize(size);
            setScore(0);
            setHasWon(false);
            setIsFinished(false);
          }}
        >
          Play again
        </button>
      </div>
    </div>
  ) : (
    <div className="modal-container">
      <div className="modal">
        <h2>Game Over</h2>
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
        <button
          onClick={() => {
            deck.initialize(size);
            setScore(0);
            setIsFinished(false);
          }}
        >
          Play again
        </button>
      </div>
    </div>
  );
}

export default Modal;
