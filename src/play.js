import { car, cdr } from '@hexlet/pairs';
import ask from './index';

export default (desctiption, makeQuestionPair) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desctiption}\n`);
  const userName = ask('May I have your name? ')();
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionPair = makeQuestionPair();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);
    const answer = ask('Question: ')(`${question} `);
    if (answer.toString() !== correctAnswer.toString()) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
    // eslint-disable-next-line consistent-return
    return iter(counter - 1);
  };

  return iter(3);
};
