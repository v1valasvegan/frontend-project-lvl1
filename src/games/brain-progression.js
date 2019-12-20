import { cons } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const greeting = 'What number is missing in the progression?';

const makeQuestionPair = () => {
  const start = randomInt(20);
  const increment = randomInt(10) + 1;
  const missedNumberIndex = randomInt(10);
  const answer = start + missedNumberIndex * increment;

  const makeQuestion = () => {
    const iter = (i, result) => {
      const newResult = i === answer ? `${result}.. ` : `${result}${i} `;
      if (i === start + 9 * increment) {
        return newResult;
      }
      return iter(i + increment, newResult);
    };

    return iter(start, '');
  };

  return cons(makeQuestion(), answer);
};

export default play(greeting, makeQuestionPair);