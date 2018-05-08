//"this" is determined by function execution context. When a function is called, 2
//special keywords are assigned to it: "this" and "arguments". There are 4 rules for
//understanding how "this" will be assigned.

//Rule 1: When called outside of an object, "this" is the global object (window in
//the browser).
function myFunction() {
  return this;
}
console.log(myFunction());

//Rule 2: Implicit Binding.
//When called inside an object, "this" will be the closest parent object.

const person = {
  firstName: "Brian",
  sayHi: function() {
    return `Hi, ${this.firstName}.`;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return `Hello, ${this.firstName}.`;
    },
    determineContext: function() {
      return this === person;
    }
  }
};

//Here, "this" is the person object so it prints "Hi, Brian."
console.log(person.sayHi());

//Here, "this" is the dog object so it prints "Hi, undefined."
console.log(person.dog.sayHello());

//Rule 3: Explicit Binding.
//There are 3 methods on functions that allow for explicit binding of "this"
//They are call, apply, and bind.
// ---------------------------------------------------------------------------
//   Name of Method             Parameters               Invoke Immediately?
// ---------------------------------------------------------------------------
//      Call                 thisArg, a, b, c, d, ...           Yes
//      Apply                thisArg, [a, b, c, d, ...]         Yes
//      Bind                 thisArg, a, b, c, d, ...           No

// Call and Apply work in a nearly identical way to change "this" from dog to person.
// If the function sayHello took arguments, they would be passed through the
//additional parameter(s) of call and apply. Apply spreads out an array of arguments
//([a, b, c, d, ...]) automatically whereas Call requires each argument to be passed
//in individually.
console.log(person.dog.sayHello.call(person));
console.log(person.dog.sayHello.apply(person));

// Bind changes "this" by creating a new function declaration.
const newSayHello = person.dog.sayHello.bind(person);
console.log(newSayHello());

//Rule 4: The "new" keyword.
//The new keyword does a number of things but, when used with a constructor, it
//assigns "this" to the new object that the constructor creates.
