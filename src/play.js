import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (desctiption, makeQuestionPair) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desctiption}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionPair = makeQuestionPair();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);
    const answer = readlineSync.question(`Question: ${question} `);
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
    iter(counter - 1);
  };

  return iter(3);
};
