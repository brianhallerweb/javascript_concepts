// const, let, and var

var x = 1;
const y = 1;
let z = 1;

//Differences between var and (let and const)
//1. var variables allow for redeclaration (Although I have since learned that
//it isn't real redeclaration it just looks that way. It is simply reassignment
//of the source to the target. Declaration only happens once during compliation.)
var myVar1 = 1;
var myVar2 = 2;
//2. In the browser, var variables are put on the window object.
var myVar3 = 1;
console.log(window.myVar3);
//3. var variables are functionally scoped, not block scoped.

//Differences between const and let
//1. Both are block scoped
//2. In the browser, they don't go onto the window object (I'm not sure where they go)
//3. const variables with primitives as values can not be reassigned. const does
//allow for redefinition of elements in arrays and properties and methods on objects.

//Perhaps the most important difference is semantic. Using const allows the reader
//to know that a variable's value will not be changing throughout the program. Using
//let suggests that a variables value will be changing.
