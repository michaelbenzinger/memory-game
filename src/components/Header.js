import React from 'react';

function Header(props) {
  const { title, score, highScore } = props;

  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="scoreboard">
        <div>{`Score: ${score}`}</div>
        <div>{`High score: ${highScore}`}</div>
      </div>
    </div>
  );
}

export default Header;
