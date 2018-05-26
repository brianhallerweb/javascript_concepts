// Logical And and OR

// Logical OR and logical AND operators are misnamed. They are not logical operators because they do not always return a boolean. They are better thought of as selection operators.

////////// OR /////////////

//If the first is false after boolean coercion, the second is selected.
var foo = "";
var baz = foo || "second";
baz; //"second"
var foo = "";
var baz = foo || 0;
baz; //0

//If the first is true after boolean coercion, it is selected
var foo = "first";
var baz = foo || "second";
baz; //"first"
var foo = 1;
var baz = foo || 0;
baz; //1

////////// AND /////////////

//If the first is true after boolean coercion, the second is selected.
var foo = "first";
var baz = foo && "second";
baz; //"second"
var foo = 1;
var baz = foo && 0;
baz; //0

//If the first is false after boolean coercion, the first is selected.
var foo = 0;
var baz = foo && "second";
baz; //0
var foo = "";
var baz = foo && 0;
baz; //""
