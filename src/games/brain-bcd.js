import { cons } from '@hexlet/pairs';
import play from '../play';

const greeting = 'Find the greatest common divisor of given numbers';

const makeQuestionPair = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);

  const findBcd = (a, b) => {
    const min = a < b ? a : b;
    const max = a < b ? b : a;
    if (max % min === 0) {
      return min;
    }
    const iter = (divisor) => {
      if (max % divisor === 0 && min % divisor === 0) {
        return divisor;
      }
      return iter(divisor - 1);
    };

    return iter(Math.floor(min / 2));
  };

  const question = `${x} ${y}`;
  const answer = findBcd(x, y);
  return cons(question, answer);
};

export default play(greeting, makeQuestionPair);
