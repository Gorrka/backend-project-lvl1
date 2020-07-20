import { gameBasis, gameLimit } from '../index.js';
import { getRandomNumber } from '../utility.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const engineGame = () => {
  // задаем необходимые переменные
  const maxNumber = 100;
  const gameData = [];
  // запускаем цикл
  for (let counter = 0; counter < gameLimit; counter += 1) {
    const randomNumber1 = getRandomNumber(maxNumber);
    const randomNumber2 = getRandomNumber(maxNumber);
    const question = `${randomNumber1} ${randomNumber2}`;
    const rightAnswer = getGcd(randomNumber1, randomNumber2);
    gameData.push([question, rightAnswer.toString()]);
  }
  return gameData;
};
const runTheGcdGame = () => gameBasis(task, engineGame);

export default runTheGcdGame;
