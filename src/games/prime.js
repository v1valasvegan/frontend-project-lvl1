import { cons, car, cdr } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionRange = cons(1, 1000);

const isPrime = (number) => {
  if (number <= 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  const maxPossibleDivisor = Math.floor(Math.sqrt(number));

  const iter = (divisor) => {
    if (divisor > maxPossibleDivisor) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 2);
  };

  return iter(3);
};

const makeGameData = () => {
  const question = randomInt(car(questionRange), cdr(questionRange));
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => play(description, makeGameData);
