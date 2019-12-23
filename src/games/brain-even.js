import { cons } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestionPair = () => {
  const question = randomInt(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

export default play(description, makeQuestionPair);
