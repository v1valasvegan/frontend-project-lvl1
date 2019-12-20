import { cons } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestionPair = () => {
  const question = randomInt(1000) + 1;

  const isPrime = (number) => {
    if (number <= 2) {
      return true;
    }
    if (number % 2 === 0) {
      return false;
    }

    const iter = (divisor) => {
      if (divisor === 1) {
        return true;
      }
      if (number % divisor === 0) {
        return false;
      }
      return iter(divisor - 1);
    };

    return iter(Math.floor(number / 3));
  };

  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default play(greeting, makeQuestionPair);
