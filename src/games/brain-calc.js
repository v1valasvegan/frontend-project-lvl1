import { cons, car, cdr } from '@hexlet/pairs';
import play from '../play';

const greeting = 'What is the result of the expression?';

const makeQuestionPair = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const operationCode = Math.floor(Math.random() * 3);

  const makeOperationPair = (opCode) => {
    switch (opCode) {
      case 0: return cons((a, b) => a + b, '+');
      case 1: return cons((a, b) => a - b, '-');
      case 2: return cons((a, b) => a * b, '*');
      default: return () => `Error: no operation with code ${opCode}`;
    }
  };

  const operationPair = makeOperationPair(operationCode);
  const operation = car(operationPair);
  const operationSymbol = cdr(operationPair);
  const question = `${x} ${operationSymbol} ${y}`;
  const answer = operation(x, y);
  return cons(question, answer);
};

export default play(greeting, makeQuestionPair);
