// This is the problem I learned about from Kyle Simpson.
// The challenge is to render 3 network requests ASAP but also in order.
// Imagine the 3 network requests return text from 3 different files.
// The file text must be rendered in order - 1, 2, 3.
// They also must be rendered ASAP, which means that the ordering can't
// be achieved by waiting to request file2 until after file1 has been
// received...

// To simulate network requests, this fake ajax function is used.

function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  var randomDelay = Math.round(Math.random() * 1e4) % 8000 + 1000;

  console.log("Requesting: " + url);

  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
}

module.exports = fakeAjax;
