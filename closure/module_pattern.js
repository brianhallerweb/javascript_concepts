// The module pattern is the most important code organization pattern in js. It was created
// by Crockford in the early 2000s and its purpose is to hide and prevent access to
// complexity. Modules follow the "principle of least exposure" - they hide and make
// inaccessible the inner workings of a public API.

// Modules are characterized by having an enclosing scope and at least 1 function that closes
// over variables in that state.

// This code isn't a module because everything in foo is exposed.
var foo = {
  o: { bar: "bar" },
  bar() {
    console.log(this.o.bar);
  }
};
foo.bar();

// This is the classic Crockford module pattern
// Notice the IFFE
var foo = (function() {
  var o = { bar: "bar" };
  return {
    bar: function() {
      console.log(o.bar);
    }
  };
})();
foo.bar();

// This is a variant of the classic module pattern that allows access to the public API from
// within the module. I believe this would be considered a "revealing module" because it
// reveals methods that would otherwise be private.
var foo = (function() {
  var publicAPI = {
    bar: function() {
      console.log("from bar");
    },
    baz: function() {
      console.log("from baz");
    }
  };
  return publicAPI;
})();
foo.bar();

// Singletons vs Module Factory Functions
// When a module is created with an IFFE it will only run once. This pattern is called a
// Singeton because it is limited to creating a single module. If a module is written as a
// function that can be repeatedly called, it is called a Module Factory Function.

// ES6 Modules
// It is good to think of ES6 modules as native module support. It allows each file to be
// treated as a private module. What is made public (exported) must be explicitly declared.
// But there are problems with ES6 modules. Although they are in the official spec, they are
// relatively unstable because incompatibilities with existing npm packages and node itself
// is proving to be a huge problem. I believe they are now nearing a solution but ES6 modules
// may have to change a little as a result.
