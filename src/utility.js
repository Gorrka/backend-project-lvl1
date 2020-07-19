const getRandomNumber = (num) => (Math.floor(Math.random() * Math.floor(num)));

export default getRandomNumber;

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default randomInRange;
