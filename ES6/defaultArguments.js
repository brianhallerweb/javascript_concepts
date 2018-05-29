//argument validation with default values

function required(paramName) {
  throw `Parameter ${paramName} required`;
}

function foo(id = required("id")) {
  console.log(id);
}

foo();
