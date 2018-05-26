// var foo = "";
// var baz = foo || "foo";
// console.log(baz); //"foo"
// The above example is really important. Logical OR and logical AND operators are misnamed. They are not logical operators because they do not always return a boolean. They are better thought of as selection operators. They take 2 operands - they do a boolean coercion test against the first one, then they select one of the 2. For OR, if the first is true, it is selected. If false, the second operand is selected.
