import { cons, car, cdr } from '@hexlet/pairs';
import play from '../play';
import randomInt from '../randomint';

const description = 'What is the result of the expression?';
const operations = [
  cons((a, b) => a + b, '+'),
  cons((a, b) => a - b, '-'),
  cons((a, b) => a * b, '*'),
];
const { length } = operations;

const makeGameData = () => {
  const x = randomInt(0, 100);
  const y = randomInt(0, 100);
  const operationPair = operations[randomInt(0, length)];
  const operation = car(operationPair);
  const operator = cdr(operationPair);
  const question = `${x} ${operator} ${y}`;
  const answer = operation(x, y);
  return cons(question, answer.toString());
};

export default play(description, makeGameData);
