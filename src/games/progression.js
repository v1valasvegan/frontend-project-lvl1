import { cons, cdr, car } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'What number is missing in the progression?';
const sequenceLength = 10;
const startRange = cons(0, 20);
const incrementRange = cons(1, 15);

const makeQuestion = (start, increment, answerIndex) => {
  const iter = (index) => {
    const current = index === answerIndex ? '..' : `${start + increment * index}`;
    if (index === 0) {
      return current;
    }
    return `${iter(index - 1)} ${current}`;
  };

  return iter(sequenceLength - 1).trim();
};

const makeGameData = () => {
  const start = randomInt(car(startRange), cdr(startRange));
  const increment = randomInt(car(incrementRange), cdr(incrementRange));
  const answerIndex = randomInt(0, sequenceLength - 1);
  const answer = start + answerIndex * increment;
  return cons(makeQuestion(start, increment, answerIndex), answer.toString());
};

export default () => play(description, makeGameData);
