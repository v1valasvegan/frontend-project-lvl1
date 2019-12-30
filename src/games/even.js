import { cons } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const makeGameData = () => {
  const question = randomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => play(description, makeGameData);
