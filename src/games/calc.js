import { gameBasis, gameLimit } from '../engine.js';
import { getRandomNumber } from '../utility.js';

const task = 'What is the result of the expression?';

const getRandomObjectKey = (object) => { // получаем рандомно по ключу операцию
  const keys = Object.keys(object); // получаем массив с символами + - *
  const randomKeyIndex = getRandomNumber(keys.length);// переменная выдает 1.2.3 индекса
  return keys[randomKeyIndex];// возвращаем знак из массива
};

const engineGame = () => {
  const maxNumber = 15; // убрать?
  const gameData = [];// создаем массив в котором будем хранить необходимые для логики переменные

  for (let counter = 0; counter < gameLimit; counter += 1) {
    const valueFirst = getRandomNumber(maxNumber);
    const valueSecond = getRandomNumber(maxNumber);

    const addition = (arr1, arr2) => arr1 + arr2;// УБРАТЬ ОТДЕЛЬНО
    const subtraction = (arr1, arr2) => arr1 - arr2;
    const multiply = (arr1, arr2) => arr1 * arr2;

    const operations = { // объект в котором храним наши функции
      '+': addition(valueFirst, valueSecond),
      '-': subtraction(valueFirst, valueSecond),
      '*': multiply(valueFirst, valueSecond),
    };

    const randomOperationSign = getRandomObjectKey(operations);// получили знак
    const randomOperationMethod = operations[randomOperationSign];// вызвали по знаку фн

    const question = `${valueFirst} ${randomOperationSign} ${valueSecond}`;
    const rightAnswer = randomOperationMethod;
    gameData.push([question, rightAnswer.toString()]);// пушим необходимые переменные
  }
  return gameData;
};
const runTheCalcGame = () => gameBasis(task, engineGame);

export default runTheCalcGame;
