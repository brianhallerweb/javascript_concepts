// The var keyword is only block scoped. The let keyword creates block scope.

function diff(x, y) {
  if (x > y) {
    var tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
//This function calculates the difference between x and y, adjusting the
//order of subtraction if necessary to avoid a negative result.
//The intent of the tmp variable on line 5 is for it to be scoped within
//the conditional. However, the var keyword creates functionally scoped
//variables so tmp is declared within the scope of diff.

//The let keyword solves this problem by allowing for block scope. Block
//scope can exist anywhere where there are curly braces.
function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
