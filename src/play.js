import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (desctiption, makeGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desctiption}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionPair = makeGameData();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
    iter(counter - 1);
  };

  iter(roundsCount);
};
