#!/usr/bin/env node
<<<<<<< HEAD
import runTheCalcGame from '../src/games/calc.js';

runTheCalcGame();
=======
// const readline = require('readline-sync');
import readline from 'readline-sync';

const getRandomNumber = (num) => Math.floor(Math.random() * Math.floor(num));

const getRandomObjectKey = (object) => { // получаем рандомно по ключу операцию
  const keys = Object.keys(object); // получаем массив с символами + - *
  const randomKeyIndex = getRandomNumber(keys.length);// переменная выдает 1.2.3 индекса
  return keys[randomKeyIndex];
};

const сalc = () => {
  // задаем необходимые переменные
  const name = readline.question('May I have your name? '); // УБРАТЬ ВНУТРЬ ФУНКЦИИ ИЛИ ВЫНЕСТИ В МОДУЛЬ
  console.log(`Hello, ${name}! \nWhat is the result of the expression?`);

  const maxIter = 3;
  const maxNumber = 15;

  for (let counter = 0; counter < maxIter; counter += 1) {
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

    const randomOperationSign = getRandomObjectKey(operations);
    const randomOperationMethod = operations[randomOperationSign];
    // выводим вопрос и ждем ответ
    console.log(`Question: ${valueFirst} ${randomOperationSign} ${valueSecond}`);
    const answer = readline.question('Your answer: ');

    if (+(answer) !== randomOperationMethod) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${randomOperationMethod}.\n Lets try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
сalc();
>>>>>>> 7d3c4d37eee052ae468747a48b96eb3deff988a3
