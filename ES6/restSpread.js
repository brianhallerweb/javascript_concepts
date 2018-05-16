// rest and spread operators

//The rest operator
//When ...numbers is used as a parameter, the rest operator will take all
//arguments and put them into an array called numbers.
const numbersList = (...numbers) => {
  numbers.forEach(number => console.log(number));
};
numbersList(1, 2, 3, 4, 5);

//The spread operator
//Although spread looks identical to rest, it is used in different context.
//It flattens an array into
const myArr = [1, 2, 3, 4, 5];
console.log(...myArr);

//A good use case of the spread operator is concatenating arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const fullArr = [...arr1, ...arr2];
