import React, { useState, useEffect } from 'react';
import { generateCards, shuffle } from '../cards/Cards';

const deck = (() => {
  let used;
  let unused;

  const initialize = size => {
    used = [];
    unused = shuffle(generateCards(size));
  };

  const shuffleBoth = () => {
    used = shuffle(used);
    unused = shuffle(unused);
  };

  const transfer = color => {
    setUnused(unused.filter(col => col !== color));
    setUsed([...used, color]);
  };

  const getUsed = () => {
    return used;
  };

  const setUsed = array => {
    used = array;
  };

  const getUnused = () => {
    return unused;
  };

  const setUnused = array => {
    unused = array;
  };

  return {
    initialize,
    shuffleBoth,
    transfer,
    getUsed,
    setUsed,
    getUnused,
    setUnused,
  };
})();

function Main(props) {
  const { size, isFinished, setIsFinished, score, setScore } = props;

  useEffect(() => {
    if (!isFinished) {
      setCards(getCards());
    }
  }, [score, isFinished]);

  const processClick = e => {
    if (isFinished) {
      return;
    }

    const used = deck.getUsed();

    const color = e.target.style.backgroundColor;
    if (used.indexOf(color) === -1) {
      deck.transfer(color);
      setScore(score + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getCards = () => {
    deck.shuffleBoth();

    const used = deck.getUsed();
    const unused = deck.getUnused();

    // Determine how many used colors to include between 0 and used.length (max: 8)
    let numUsed = Math.floor(Math.random() * used.length);
    // Cap used cards at 8 so there is always 1 unused
    if (numUsed > 8) numUsed = 8;
    // Never allow more unused cards than remain
    if (9 - numUsed > unused.length) numUsed = 9 - unused.length;

    let result = [];
    for (let i = 0; i < numUsed; i++) {
      result.push(used[i]);
    }
    for (let i = 0; i < 9 - numUsed; i++) {
      result.push(unused[i]);
    }

    result = shuffle(result);

    let key = 0;
    result = result.map(color => {
      key += 1;
      return (
        <div
          key={key}
          onClick={processClick}
          style={{ backgroundColor: color }}
        ></div>
      );
    });

    return result;
  };

  const [cards, setCards] = useState(() => getCards(props));

  return (
    <div>
      <div className="card-container">{cards}</div>
    </div>
  );
}

export default Main;
export { deck };
