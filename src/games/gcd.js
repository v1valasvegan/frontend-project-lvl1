import { cons, car, cdr } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'Find the greatest common divisor of given numbers';
const rangeX = cons(0, 100);
const rangeY = cons(0, 100);

const findGcd = (a, b) => {
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

const makeGameData = () => {
  const x = randomInt(car(rangeX), cdr(rangeX));
  const y = randomInt(car(rangeY), cdr(rangeY));
  const question = `${x} ${y}`;
  const answer = findGcd(x, y);
  return cons(question, answer.toString());
};

export default () => play(description, makeGameData);
