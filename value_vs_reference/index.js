// Variables are either value-type or reference-type. Value-type variables store the
//variable name and value in the same location in memory. Primitives such as string,
//number, boolean, null, and undefined are value-type variables. Reference-type
//variables are objects (arrays and functions are technically objects). They store the
//variable name and the address of its value in the same location in memory. The
//actual object is stored in a different location in memory.

// Example of value-type variables
let x = 10;
let y = x;
x = 5;
console.log(x); //5
console.log(y); //10
// x and y are independent. They are stored in different locations in memory and both
//contain the number 10. If x is reassigned to 5, y will still be 10.

// Example of reference-type variables
let reference = [1];
let refCopy = reference;
reference.push(2);
console.log(refCopy); //[1, 2]
// "reference" and "refCopy" are separate variables but they both contain the same
//memory address that points to a single memory location in memory. So, 2 separate
//variables point to a single array. That is why mutating the array using either
//variable will effectively change both variables.

// Comparison operators (=== and ==)
// These operators are only useful for value-type variables, in most cases. That is
//because, which reference-type variables, the comparison is made between memory
//addresses. Comparing 2 objects by their properties requires writing a custom
//function to do so.
let x = 10;
let y = 10;
console.log(x === y); //true
y = "10";
console.log(x === y); //false
console.log(x == y); //true

let reference = [1];
let refCopy = reference;
console.log(reference === refCopy); //true
refCopy = [1];
console.log(reference === refCopy); //false, despite both pointing to identical looking arrays, [1].

// Garbage collection
// A consequence of the way variables are held in memory, it is possible for an object
//in memory to lose all the variables that point to it. At that point, the object is
//made availble for garbage collection to the Javascript engine.

// Pure Functions
// Pure functions are functions that do not mutate variables outside of their scope.
//Ensuring that a function is pure requires understanding the difference between
//value-type variables and reference-type variables. When arguments are passed into
//functions, the arguments are assigned to function parameters. For example:
function myFunction(x) {}
myFunction(100); //100 is assigned to the parameter x
myFunction([1, 2, 3]); //The memory address reference of [1,2,3] is assigned to the
//parameter x.
//When objects are passed to functions as arguments, there is a risk that the object
//will also be used by a variable that is outside of the functions scope. This is a
//common situation and often leads to bugs.

// Why map, filter, reduce,...etc are pure functions
// These function make a copy of the objects (arrays) they use as arguments. That
//prevents the original arrays from being mutated.


//Practice exercises

//////////////////
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: 'John',
    age: 50
  };

  return person;
}

var personObj1 = {
  name: 'Alex',
  age: 30
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> { name: 'Alex', age: 25 }
console.log(personObj2); // -> { name: 'John', age: 50 }
//////////////////
/////////////////
var obj = {
  innerObj: {
      x: 9
  }
};
​
var z = obj.innerObj;
​
z.x = 25;
​
console.log(obj.innerObj.x); // -> 25

