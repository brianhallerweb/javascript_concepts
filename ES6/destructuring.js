//Destructing Objects and Arrays

//Destructuring Objects
const dog = {
  name: "obie",
  getName() {
    return this.name;
  }
};

const { name, getName } = dog;
//The above is identical to
//const name = dog.name
//const getName = dog.getName

console.log(name); //obie
console.log(breed); //doodle

//Destructering also supports renaming variables and default values.
//Below, name is renamed to dogName and Poppy is set as its default.
const { name: dogName = "Poppy" } = dog;

//Destructuring Arrays
const numbers = ["one", 2, true];
const [firstVariable, secondVariable, thirdVariable] = numbers;
//The above is identical to
// const firstVariable = numbers[0]
// const secondVariable = numbers[1]
// const thirdVariable = numbers[2]

console.log(firstVariable); // One
console.log(secondVariable); // 2
console.log(thirdVariable); // true
