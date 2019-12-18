import readlineSync from 'readline-sync';

export const ask = (text) => (param = '') => readlineSync.question(`${text}${param}`);

export const play = () => {
  const greeting = 'Welcome to the Brain Games\nAnswer"yes" if the number is even, otherwise answer "no".\n';
  console.log(greeting);
  const userName = ask('May I have your name? ')();
  console.log(`Hello, ${userName}!\n`);

  const getRandomInt = () => Math.floor(Math.random() * 100);

  const isEven = (num) => num % 2 === 0;

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const num = getRandomInt();
    const answer = ask('Question: ')(`${num} `);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
    console.log('Correct!');
    console.log(`Your answer: ${answer}`);
    // eslint-disable-next-line consistent-return
    return iter(counter - 1);
  };

  return iter(3);
};
