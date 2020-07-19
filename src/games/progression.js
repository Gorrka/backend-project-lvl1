import { gameBasis, gameLimit } from '../index.js';
import { getRandomNumber, randomInRange } from '../utility.js';

const task = "What number is missing in the progression?";

const engineGame = () => {
  // задаем необходимые переменные
  const maxNumber = 50;
  const gameData = [];
  // запускаем цикл
  for (let counter = 0; counter < gameLimit; counter += 1) {
    const progression = [];
    const firstRandomNumber = getRandomNumber(maxNumber);
    const lastRandomNumber = getRandomNumber(maxNumber);
    const progressionSize = 10;
    const hiddenNumberOfProgression = randomInRange(0, progressionSize - 1);// ?????

    for (let j = 0; j < progressionSize; j += 1) {
      progression[j] = firstRandomNumber + lastRandomNumber * j;
    }
    const question = progression.join(' ');
    const rightAnswer = progression[hiddenNumberOfProgression];
    progression[hiddenNumberOfProgression] = '..';
    gameData.push([question, rightAnswer.toString()]);
  }
  return gameData;
};
const runTheProgressionGame = () => gameBasis(task, engineGame);

export default runTheProgressionGame;
