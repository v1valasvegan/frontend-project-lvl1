import { cons, cdr, car } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'What number is missing in the progression?';
const sequenceLength = 10;
const startRange = cons(0, 20);
const incrementRange = cons(1, 15);

const makeQuestion = (start, increment, answer) => {
  const iter = (i, result) => {
    const current = i === answer ? '..' : `${i}`;
    if (i === start + (sequenceLength - 1) * increment) {
      return `${result}${current}`;
    }
    return iter(i + increment, `${result}${current} `);
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

export default () => play(description, makeGameData);
