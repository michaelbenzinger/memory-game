const generateCards = size => {
  if (!size || size < 2) return 1;
  const cards = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        const r = Math.round((i * 255) / (size - 1));
        const g = Math.round((j * 255) / (size - 1));
        const b = Math.round((k * 255) / (size - 1));
        cards.push(`rgb(${r}, ${g}, ${b})`);
      }
    }
  }
  return cards;
};

const shuffle = array => {
  if (array.length === 0) return array;
  const newArray = JSON.parse(JSON.stringify(array));
  for (let i = newArray.length - 1; i > 0; i--) {
    // Get a random index between 0 and the current
    let j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at current and random indexes
    let temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};

export { generateCards, shuffle };
