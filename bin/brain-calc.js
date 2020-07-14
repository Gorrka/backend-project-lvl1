
const maxNumber = 30;
const maxIter = 3;

const getRandomInRangeFirst = Math.floor(Math.random() * Math.floor(maxNumber)); // рандомное число
const getRandomInRangeSecond = Math.floor(Math.random() * Math.floor(maxNumber));
// console.log(getRandomInRange);

const addition = (`${getRandomInRangeFirst} + ${getRandomInRangeSecond}`); // сложение

const subtraction = (`${getRandomInRangeFirst} - ${getRandomInRangeSecond}`); // вычитание

const multiply = (`${getRandomInRangeFirst} * ${getRandomInRangeSecond}`);// умножение

const mathOperation = [
  addition,
  subtraction,
  multiply,
];
// ----------------------это охрененно но что это блять такое РАЗОБРАТЬСЯ!!!----------------------------------
Array.prototype.randomItem = function() {
  return this[Math.floor(Math.random()*this.length)];
}

console.log(mathOperation.randomItem());