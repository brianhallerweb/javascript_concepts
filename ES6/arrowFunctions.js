// Arrow functions
const add = (a, b) => a + b; //implicit return
const add = (a, b) => {
  return a + b;
}; //explicit return
const add = (a, b) => ({ solution: a + b }); //return an object

//This binding and the arguments object
//Arrow functions do not bind "this" or have an arguments object
const dog = {
  name: "obie",
  getName: () => {
    console.log(this.name); //undefined
    console.log(arguments); //undefined
  }
};
const dog = {
  name: "obie",
  getName() {
    console.log(this.name); //Obie
    console.log(arguments); //A defined object
  }
};

//ES6 functions are not a replacement for ES5 functions. Mostly
//because of "this" binding issues, ES5 and ES6 functions should
//be used in a complementary way.
