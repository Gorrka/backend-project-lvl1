import readline from 'readline-sync';
// const readline = require('readline-sync');

const name = readline.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

const oddOrEven = () => {
  // задаем необходимые переменные
  const maxIter = 3;
  const maxNumber = 50;
  // запускаем цикл
  for (let counter = 0; counter < maxIter; counter += 1) {
    const getRandomInRange = Math.floor(Math.random() * Math.floor(maxNumber));
    console.log(`Question:  ${getRandomInRange}`);

    const checkEven = (getRandomInRange % 2 === 0) ? 'yes' : 'no';

    const answer = readline.question('Your answer: ');

    const checkAnswer = (answer === checkEven) ? 'Correct!' : `"yes" is wrong answer ;(. Correct answer was "no".\n Lets try again, ${name}!`;

    console.log(checkAnswer);

    if (answer !== checkEven) {
      break;
    } else if (counter === 2) return console.log(`Congratulations, ${name}!`);// подгон некрасиво
  }
  return undefined;
};
oddOrEven();
