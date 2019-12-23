import { cons } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const desctiption = 'Find the greatest common divisor of given numbers';

const findBcd = (a, b) => {
  const min = a < b ? a : b;
  const max = a < b ? b : a;
  if (max % min === 0) {
    return min;
  }
  if (min === 0) {
    return 1;
  }
  const iter = (divisor) => {
    if (max % divisor === 0 && min % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };

  return iter(Math.floor(min / 2));
};

const makeQuestionPair = () => {
  const x = randomInt(0, 100);
  const y = randomInt(0, 100);
  const question = `${x} ${y}`;
  const answer = findBcd(x, y);
  return cons(question, answer.toString());
};

export default play(desctiption, makeQuestionPair);
