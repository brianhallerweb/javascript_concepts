const fakeAjax = require("./index");

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
