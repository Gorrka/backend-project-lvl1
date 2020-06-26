import readlineSync from 'readline-sync';

/*
export const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
*/
//----------------------------------------------------------------//----------------------------------//
export const userName = () =>{
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
};






/*
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
*/