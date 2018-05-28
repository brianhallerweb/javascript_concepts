const fakeAjax = require("./index");

// A thunk is very similar to a promise, in that it is a time independent
// wrapper around a value. The getFile function returns a thunk. The full
// solution using thunks is tricky so I will proceed step by step.

// Here is a very simple request using a callback.

function getFile(file) {
  fakeAjax(file, text => {
    handleResponse(text);
  });
}

function handleResponse(contents) {
  console.log(contents);
}

getFile("file1");

// In contrast, here is the same simple request made with a thunk. Look at
// this code closely. There is something very unusual happening. The
// thunk is a function that takes a callback. That callback is assigned to
// a variable in the state of the thunk. That variable (which is a function)
// is called with the async data, when it arrives.

// At this point, the thunk pattern seems just about identical to a callback
// pattern. What is special about it? Notice that when the thunk is created,
// the ajax call is made. Although it is true that a type error will be thrown
// if fn remains undefined, that is beside the point. The significant point is
// is that the async data is requested well before the thunk knows what to do
// with it. It is the callback that the thunk uses as an argument that determines
// what will happen to the async data. So far, that feature of the pattern is
// just making things look confusing but it is essential for creating the next
// step.

function getFile(file) {
  var text = "pretend data";
  var fn;

  fakeAjax(file, function(response) {
    if (fn) fn(response);
    else text = response;
  });

  return function(cb) {
    if (text) cb(text);
    else fn = cb;
  };
}

var thunk = getFile("file1");
thunk(function(text) {
  console.log(text);
});

// The next step is to consider the possibility that the async data is already
// in the state of the thunk when the thunk is executed. In that case, the callback
// shouldn't be used by fakeAjax. Instead, the async data already in the state of
// the thunk should be used as an argument to the callback. These issues are hard
// to write about but I hope that is clear, because it is a simple idea. If the
// data is ready and available, then it should be rendered immediately. If not, the
// callback should be used on the data as soon as it arrives. The thunk pattern allows
// that simple idea to be expressed clearly. That is what makes it so powerful. That is
// what makes it useful for the problem of rendering data from network requests in order
// and ASAP.

// If you are confused, remember to think about closure. The thunk closes over multiple
// variables, including the fakeAjax function.

// A quick conceptual summary: The callback pattern allows you to say, "When
// the data comes back, do this..." The thunk pattern allows you to say something much
// more sophisticated. You can break the process into 2 steps.
// 1) Go get the data and save it in state.
// 2) If you have the data, do this...with it. If not, then do this...as soon as you get it.
// The ability to say both 1) and 2) is what is meant by a time-independent wrapper.

// Here is the final solution:

function getFile(file) {
  var text;
  var fn;

  fakeAjax(file, function(response) {
    if (fn) fn(response);
    else text = response;
  });

  return function(cb) {
    if (text) cb(text);
    else fn = cb;
  };
}

const th1 = getFile("file1");
const th2 = getFile("file2");
const th3 = getFile("file3");

th1(function(text) {
  console.log(text);
  th2(function(text) {
    console.log(text);
    th3(function(text) {
      console.log(text);
      console.log("Complete!");
    });
  });
});

// This code is a significant improvement over the callback pattern because the nesting
// of blocking callbacks actually communicates the order of console logs. It says, log the data
// in thunk 1, then log the data in thunk2, then log the data in thunk3. I also want to
// emphasize that the network requests really were made concurrently - request2 didn't
// have to wait for request1 to respond, and request3 didn't have to wait for request2
// to respond. The problem was effectively broken up into 2 clean steps. First go get
// all the data. Then, ASAP, start logging the data in order.
