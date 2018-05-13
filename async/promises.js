//ES6 has a native promise constructor, Promise().

//I haven't read the actual implementation of Promise() but here is what
// you need to know to use promises:

//- All promises have a status and a value. The status starts as pending and will
// either resolve or reject. The value is the result of the resolution or rejection.
// For example, a typical resolved value would be data retrieved from a server
//and a typical rejected value would be an Error object.

//- Promise objects have access to .then() and .catch() methods. They are
//chained to the promise such that the resolved or rejected values will be
//processed when they are available.

//- The Promise() constructor takes a function as an argument. That function
// must have arguments resolve() and reject(). The body of the function is
//where async functions are called such as AJAX or setTimeout(). Resolve()
//and reject() come from the prototype of the Promise() constructor and are
// called after the async work has either completed or failed.

//- Promise.all() and Promise.race() are methods that return a single promise
//out of multiple sub-promises. Promise.all() bundles many promises into one
//and, when they are all resolved, their values are used as elements inside
//one array. Promise.race() takes the first resolved sub-promise and uses its
//value as the value of the resolved promise.

//Typically, you won't be using the Promise() constructor to make new promises,
//you will simply be using functions that return promises by chaining .then()
//and .catch() onto their ends. However, I will show how to create and work
//with your own promises below:

//This is the same example as in callbacks.js. The idea is to call the outer
//function and then the inner function. Doing it with promises instead of nested
//callbacks is a definite improvement.
function myAsyncOuter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("from outer"), 2000);
  });
}

function myAsyncInner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("from inner"), 0);
  });
}

myAsyncOuter()
  .then(res => {
    console.log(res);
  })
  .then(() => myAsyncInner())
  .then(res => console.log(res));

//Another example of promises. This is an asyc add function that can accomodate
//any number of arguments.
function asyncAdd() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let total = 0;
      for (let argument in arguments) {
        if (typeof arguments[argument] !== "number") {
          reject("At least one argument is not a number");
        }
        total += arguments[argument];
      }
      resolve(total);
    }, 2000);
  });
}

asyncAdd(1, 2, 3, "10")
  .then(res => console.log(res))
  .catch(error => console.log(error));
