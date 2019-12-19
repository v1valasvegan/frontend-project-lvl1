import { cons } from '@hexlet/pairs';
import play from '../play';

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestionPair = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

export default play(greeting, makeQuestionPair);
