// enhanced object literals
// There are 2 new syntaxes for nice succinct objects

//function definitions in objects
//Functions in objects don't require a key name or the function keyword.
//I believe this is a compromise between the nice syntax of arrow functions
//and the need for "this" binding.
const dog = {
  name: "obie",
  getName() {
    return this.name;
  }
};

//Identical key-value pairs can be shorted such that they key is inferred
//from the value
const myConst = "This is my const";
const myObj = {
  myConst
};
console.log(myObj); // { myConst: "This is my const"}
