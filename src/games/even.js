import { gameBasis, gameLimit } from '../index.js';
import getRandomNumber from '../utility.js';

const task = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const engineGame = () => {
  // задаем необходимые переменные
  const maxNumber = 50;
  const gameData = [];
  // запускаем цикл
  for (let counter = 0; counter < gameLimit; counter += 1) {
    const randomNumber = getRandomNumber(maxNumber);
    const question = `${randomNumber}`;
    const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    gameData.push([question, rightAnswer.toString()]);
  }
  return gameData;
};
const runTheEvenGame = () => gameBasis(task, engineGame);

export default runTheEvenGame;
