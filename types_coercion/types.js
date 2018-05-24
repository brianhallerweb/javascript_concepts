// 3 types: primitives, special values, Natives

// Primitives
// First, it is important to be clear that variables do not have types in js but values do. The types are undefined, null, string, number, boolean, and object. Functions are a subtype of object (a "callable object").

// A bug to be aware of
typeof null === "object"; //true
// This is simply a bug so be wary of type checking null.

// Special Values
// NaN means "not a number" but it is better to think of it as "invalid number" because that explains typeof NaN === "number". A value becomes Nan when an attempt to convert to a number type fails. For ease of use and accessibility, Javascript decided to return NaN, not to throw an error.
// -0 is also a special value. It arises as a consquence of certain compliance standards. The major issue with special values is type checking. You just have to remember that type checking isn't perfect with typeof or ===. When type checking for NaN or -0, you must use Object.is(). However, I am told that Object.is() should not be used in all cases, just for NaN and -0, eventhough it does work correctly for type checking all other values.

var baz = 2;
console.log(typeof baz); //"number"
var baz;
console.log(typeof baz); //"number"
baz = null;
console.log(typeof baz); //"object"

baz = "baz" * 3;
console.log(baz); //"NaN"
console.log(typeof baz); //"number"

baz = 1 / 0;
console.log(baz); //"Infinity"
console.log(typeof baz); //"number"

// Native Functions
// Native fornctions look like constructors for primitives but they are not quite that. They include:
// String
// Number
// Boolean
// Function
// Object
// Array
// RegExp
// Date
// Error
// Number, Boolean, String, and Array natives should never be used with the new keyword. If they are, they produce fairly strange and probably useless array-like objects. It is always better to use literal syntax.
// RegExp and Date are exceptions - they should sometimes be used with the new keyword. RegExp() will create a new regular expression, just like literal regex syntax will, but RegExp() is useful becuase you can pass it a dynamic value. The Date() constructor is useful because there is no date literal syntax. However, usually all that is needed for a date is a time stamp and that is easier achieved with Date.now().
