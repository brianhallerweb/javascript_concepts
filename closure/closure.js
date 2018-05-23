// Closure is a characteristic of a function that allows it to have access to variables in its
// lexical scope, even when it is called outside of that scope. Notice that it is inaccurate to
// say that a funciton is a closure or a closure is a function - closure is a characteristic of
// a function. So, the correct way of speaking is to say that a function has closure.

// The word closure comes from functions "closing over" variables in their scope. When those
// functions are called outside of that scope, they retain access to that "closed over" scope.

// Closure is a nearly inevitable consequence of 2 features of javascript - lexical scope and
// functions being first class citizens. These 2 features result in closure because lexical
// scope allows functions to access their parent scopes and first class status allows function
// to be passed to other functions as arguments and to be returned from functions.

//Baz is a function that has closure. It closes over bar.
//Baz is created by foo returning a function.
function foo() {
  var bar = "bar";

  return function() {
    console.log(bar);
  };
}

var ba = foo();
baz();

//Baz is a function that has closure. It closes over bar.
//Baz is called outside of its scope by being passed as a callback to bam.
function foo() {
  var bar = "bar";

  function baz() {
    console.log(bar);
  }

  bam(baz);
}

function bam(baz) {
  baz();
}

foo(); //bar

//The callback to setTimeout has closure. It closes over bar.
//This is notable because the scope of the callback to setTimeout is very different and
// setTimeout isn't even run by the V8 engine.
function foo() {
  var bar = "bar";
  setTimeout(function() {
    console.log(bar);
  }, 1000);
}

// What about garbage collection?
// Normally, when a function returns, its unreturned variables are garbage collected. Closure
// prevents that from happening. A "closed over" scope is protected from garbage collection as
// long as there is at least one function available that has that closure.
// This preservation of scope is important to know because it costs memory and it is possible
// for a program to unnecessarily preserver a lot of scope with unintentional closures.
