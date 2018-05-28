const fakeAjax = require("./index");

// Solving the problem with callback pattern.
// Probably the most significant problem with callbacks is that they
// do not handle problems like these well - Kyle says that time is the
// most complex part of application state. The callback pattern is bad
// here because it requires a bunch of complex conditional logic in the
// handleResponse function - that makes reasoning about this code too
// challenging for the simplicity of what it is doing. Ideally, the
// fact that getFile calls are made in order (file1, then file2, then
// file3) would be enought to understand that the code is making 3
// concurrent network requests and rendering them in order.

function getFile(file) {
  fakeAjax(file, function(text) {
    handleResponse(file, text);
  });
}

var responses = {};

function handleResponse(filename, contents) {
  if (!(filename in responses)) {
    responses[filename] = contents;
  }
  var filenames = ["file1", "file2", "file3"];
  for (file of filenames) {
    if (file in responses) {
      if (typeof responses[file] === "string") {
        console.log(file);
        responses[file] = false;
      }
    } else {
      return;
    }
  }
  console.log("Complete!");
}

getFile("file1");
getFile("file2");
getFile("file3");
