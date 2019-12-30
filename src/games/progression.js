import { cons, cdr, car } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'What number is missing in the progression?';
const sequenceLength = 10;
const startRange = cons(0, 20);
const incrementRange = cons(1, 15);

const makeQuestion = (start, increment, answer) => {
  const iter = (i, result) => {
    if (i === start + sequenceLength * increment) {
      return result;
    }
    const newResult = i === answer ? `${result}.. ` : `${result}${i} `;
    return iter(i + increment, newResult);
  };

  return iter(start, '');
};

const makeGameData = () => {
  const start = randomInt(car(startRange), cdr(startRange));
  const increment = randomInt(car(incrementRange), cdr(incrementRange));
  const answerIndex = randomInt(0, sequenceLength - 1);
  const answer = start + answerIndex * increment;
  return cons(makeQuestion(start, increment, answer), answer.toString());
};

export default play(description, makeGameData);
