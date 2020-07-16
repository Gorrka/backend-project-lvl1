import { gameBasis, gameLimit } from '../index.js';

const task = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const engineGame = () => {
  // задаем необходимые переменные
  const maxNumber = 50;
  const gameData = [];
  // запускаем цикл
  for (let counter = 0; counter < gameLimit; counter += 1) {
    const getRandomInRange = Math.floor(Math.random() * Math.floor(maxNumber));
    const question = `${getRandomInRange}`;
    const rightAnswer = (getRandomInRange % 2 === 0) ? 'yes' : 'no';
    gameData.push([question, rightAnswer.toString()]);
  }
  return gameData;
};
const runTheEvenGame = () => gameBasis(task, engineGame);

export default runTheEvenGame;
