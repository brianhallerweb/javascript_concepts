//Async Await is an improved syntax for promises. Under the hood,
//everything still works as promises do but the Async Await syntax
//allows code to be written as if it was synchronous.

//Async Await syntax does require the use of a try-catch block for
//error handling.

//Here is the same example as in callbacks.js and promises.js, written with
// the Async Await syntax.

function myAsyncOuter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("from outer"), 2000);
  });
}

function myAsyncInner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("from inner"), 1000);
  });
}

async function myFunction() {
  try {
    const outer = await myAsyncOuter();
    console.log(outer);
    const inner = await myAsyncInner();
    console.log(inner);
  } catch (err) {
    console.log(err.message);
  }
}

myFunction();

// Below is an example of the same code but with a rejected promise

// function myAsyncOuter() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("from outer"), 2000);
//   });
// }
//
// function myAsyncInner() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("error message")), 1000);
//   });
// }
//
// async function myFunction() {
//   try {
//     const outer = await myAsyncOuter();
//     console.log(outer);
//     const inner = await myAsyncInner();
//     console.log(inner);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
//
// myFunction();
