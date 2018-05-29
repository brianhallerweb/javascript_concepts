const fakeAjax = require("./index");

// Callback have 2 problems: Inversion of control and no way to eliminate time-state
// as a factor. Thunks eliminate time-state complexity. Promises eliminate time-state
// complexity and solve the inversion of control problem.

// How do promises solve IOC?
// A promisified async function returns a listener (.then) that can hear when that data
// is ready (resolve) or an error (reject) has occurred. The listener can then decide
// exactly what to do with the data or error. In addition, the design of the native
// promises ensures that promises are only resolved or rejected once.

function getFile(file) {
  return new Promise((resolve, reject) => {
    fakeAjax(file, function(text) {
      resolve(text);
    });
  });
}

const p1 = getFile("file1");
const p2 = getFile("file2");
const p3 = getFile("file3");

p1
  .then(text => console.log(text))
  .then(() => p2)
  .then(text => console.log(text))
  .then(() => p3)
  .then(text => console.log(text));

// The above code uses chaining. The fact that chaining reduces nesting is largely beside
// the point. The purpose of the chaining is to make the code easier to reason about with
// respect to time-state complexity.

// What about making an arbitrary number of requests?
// If the number of responses is unknown, you won't be able to set up a complete chain so
// using map and reduce becomes necessary.

["file1", "file2", "file3"].map(getFile).reduce((chain, filePromise) => {
  return chain
    .then(function() {
      return filePromise;
    })
    .then(text => console.log(text));
}, Promise.resolve()); //Promise.resolved() is needed to start the chain.
