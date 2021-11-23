import { generateCards, shuffle } from './cards/Cards';
import { getCards } from './components/Main';

test('generateCards exports an array of correct size', () => {
  const size = 6;
  const cards = generateCards(size);
  expect(cards.length).toBe(Math.pow(size, 3));
});
