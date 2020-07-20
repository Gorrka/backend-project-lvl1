import { gameBasis, gameLimit } from '../index.js';
import { getRandomNumber, randomInRange } from '../utility.js';

const task = 'What number is missing in the progression?';

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
    const hiddenNumberOfProgression = randomInRange(0, progressionSize - 1);

    for (let j = 0; j < progressionSize; j += 1) {
      progression[j] = firstRandomNumber + lastRandomNumber * j;
    }
    const rightAnswer = progression[hiddenNumberOfProgression];
    progression[hiddenNumberOfProgression] = '..';
    const question = progression.join(' ');
    gameData.push([question, rightAnswer.toString()]);
  }
  return gameData;
};
const runTheProgressionGame = () => gameBasis(task, engineGame);

export default runTheProgressionGame;

/*
const task = 'What number is missing in the progression?';

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const progression = [];
    const firstProgressionNumber = randomInteger();
    const difference = randomInteger();
    const progressionSize = 9;
    const huddenNumberIndex = randomInteger(0, progressionSize - 1);
    for (let j = 0; j < progressionSize; j += 1) {
      progression[j] = firstProgressionNumber + difference * j;
    }
    const answer = progression[huddenNumberIndex];
    progression[huddenNumberIndex] = '..';
    const question = progression.join(' ');
    gameData.push([question, answer.toString()]);
  }
  return gameData;
};

const startProgressionGame = () => game(task, collectGameData);

export default startProgressionGame;
*/
