import { cons, car, cdr } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const questionRange = cons(0, 100);

const makeGameData = () => {
  const question = randomInt(car(questionRange), cdr(questionRange));
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => play(description, makeGameData);
