//immediately invoked function expressions (IIFE) are are pattern used
//to quickly create a little bit of scope to avoid polluting the outer
//scope. It is a heavy-weight way of creating a block of scope.

var foo = "foo";
(function bob() {
  var foo = "foo2";
  console.log(foo); //foo2
})();

console.log(foo); //foo

// The function bob only exists to run once. We don't want either the
// name bob or foo to pollute the outer name space.

//IIFEs are often used to wrap entire files.
