import readlineSync from 'readline-sync';

const gameLimit = 3;

const gameBasis = (task, engineGame) => { // engine внутрянка игры
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${task}`); // задача, что надо сделать
  for (let i = 0; i < gameLimit; i += 1) {
    const gameData = engineGame();
    const [question, rightAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export { gameBasis, gameLimit };
