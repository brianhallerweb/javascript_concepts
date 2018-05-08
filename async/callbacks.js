//The Javascript v8 runtime is single threaded which essentially means there
//is only one call stack and everything should run synchronously. However,
//Javascript in the browser or node is more than just the v8 runtime.
//Javascript really has 4 relevant parts - the call stack, a few special APIs
//(ajax, setTimeout, etc), a task queue, and the event loop.

//The call stack works just as expected. Called function are pushed onto
// the stack and popped off when they return.

//The special APIs are what allows javascript to be non blocking and
//concurrent. The way exact implementation of these APIs is hidden from
//you and not relevant to understand. For example, setTimeout() is a
//function that somehow is able to add its callback to the task queue
//after x number of milliseconds.

// The event queue is where callback functions go when they are ready
//to be executed. How and when they are placed on the task queue is an
//abstracted detail. All you need to know is that the callbacks will be
//on the task queue after a network request or disc access has completed,
//or a certain number of milliseconds has passed.

// The event loop has a simple job. As soon as the call stack is clear,
//put the next function in the task queue onto the call stack.
/////////////////////////////////////////////////////////////////////

//Common example showing how async functions are non blocking and are
//excecuted after the call stack has cleared. This explains the order of
//console logs even when setTimout is set to 0 milliseconds.
function myAsync(callback) {
  setTimeout(() => callback("from set timeout"), 0);
}

console.log("before");
myAsync(console.log);
console.log("after");

//Nested callbacks
//This example is confusing to read but that is the point. Nested callbacks should
//be avoided and promises should be used instead. However, notice how the callbacks
//are necessary to control the timing. You were able to write code that called the
//outer function, then waiting for it to return before calling the inner function.
function myAsyncOuter(callback) {
  setTimeout(() => callback("from outer"), 2000);
}

function myAsyncInner(callback) {
  setTimeout(() => callback("from inner"), 0);
}

myAsyncOuter(input => {
  console.log(input);
  myAsyncInner(console.log);
});
