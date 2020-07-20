import { gameBasis, gameLimit } from '../index.js';
import { getRandomNumber } from '../utility.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1)
    if (num % i === 0) return false;
  return num > 1;
};

const engineGame = () => {
  // задаем необходимые переменные
  const maxNumber = 50;
  const gameData = [];
  // запускаем цикл
  for (let counter = 0; counter < gameLimit; counter += 1) {
    const question = getRandomNumber(maxNumber);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};
const runThePrimeGame = () => gameBasis(task, engineGame);

export default runThePrimeGame;
