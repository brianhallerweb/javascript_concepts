////////// Abstract Operations //////////////
// These operators aren't accessible for use but they are important because they are run
// behind-the-scenes for all type conversions. They inlude ToPrimitive, ToString, ToNumber,
// ToBoolean. A lot of unexpected results originate in how these abstract operators work. The big
// one to memorize is that ToNumber("") returns 0.

////////// Explicit coercion //////////

// string to number
// This is commonly done with parseInt but parseInt isn't true coercion, it just parses a string.
var foo = "123x2";
var baz = parseInt(foo);
baz; // 123, because parseInt loops through a string looking for integers. It stops when it
// encounters a non integer.
// Use the Number native function or the + operator instead.
// Number native function
var foo = "123";
var baz = Number(foo);
baz; // 123
// the + operator
var foo = "123";
var baz = 1 + +foo;
baz; //124

//number to string
//Either use the String native function or the .toString method available on numbers. How does a
// number have a method on it? When methods are called on numbers, the numbers undergo implicit
// "boxing", which just means the number gets wrapped in the same object that is created when the
// Number native function is used with the new keyword. Don't worry too much about this detail...
var baz = 456;
var foo = String(baz);
foo; //"456"
typeof foo; // string
//or
var baz = 456;
var foo = baz.toString();
foo; //"456"
typeof foo; // string

// Any value to a boolean
var foo = "123";
var baz = !!foo;
baz; //true
//The above is a very common way to create booleans. It works fine but why not use the Boolean
// native function? It is surely clearer that way and it works more directly. Using a double bang
// both coerces and negates, whereas using the Boolean native function just coerces. Do this
// instead:
var foo = "123";
var baz = Boolean(foo);
baz; // true

// Date to numeric time stamp
// The Date constructor returns something like this:
var now = new Date();
now; //Thu May 24 2018 14:02:00 GMT-0700 (PDT)
// The most common use of the Date constructor is to create a numeric timestamp. This can be easily
// done 2 ways.
var now = new Date();
now = now.getTime();
now; //1527195878550
typeof now; //number
//or
now = Date.now();
now; //1527195878550
typeof now; //number
// Don't use this uselessly clever, but common, approach:
now = +new Date();
now; //1527195878550
typeof now; //number
// //The + operator coerces to a number and implicitly returns just the time stamp

////////// Implicit Coercion //////////

// string to number
var foo = "123";
var baz = foo - 0;
baz; // 123
typeof baz; //number
// There are many mathematical operators that also work but keep in mind that if either operand is
// a string, the + operator always converts the operand to a string. So, use the + for implicitly
// converting from number to string, like shown below.

// number to string
var foo = 456;
var baz = foo + "";
baz; // 456
typeof baz; //number

// to Booleans
var foo = "123";
if (foo) {
  console.log("will run");
}
var bar = 0;
if (bar) {
  console.log("won't run");
}
//Conditionals are always implicitly coerced to Booleans. Remember that any value not on the falsy
// list is coerced to true.

// Double equals
// It is commonly said that double equals evaluates value while triple equals evaluates value and
// type. This statement is simply false and proof comes straight from the spec.
// The correct statement that while they both test equality, double equals allows type coercion and
// triple equals doesn't. //Double equals follows understandable rules
//1. if both values are the same type, check for strict equality with ===
//2. null and undefined are equal to each other and no other values. This one is very useful to
// know because null and undefined are conceptually very similar, they are both empty values.
// Coercion is genuinely useful here.
//3. if one is a number and the other a string, convert the string to a number
//4. if one is a number and the other a boolean, convert the boolean to a number
//5. if one is a number and the other is an array or object, call the abstract operator ToPrimitive
// on the object or array. That results in NaN for objects and "" for arrays, which is then
// converted to a number and Number("") return 0.

//Double equals edge cases with explanation
null == undefined; // true but not because both are coverted to the number 0. It is because null
// and undefined are special cases, they are coercively equal to each other and no other value.
"0" == null; //false because null is only coercively equal to undefined.
"0" == false; //true because both are coverted to 0
"0" == NaN; //false because NaN is a number and 0 != NaN
"0" == 0; //true because "0" is coverted to 0
"0" == ""; //false but I'm not sure why - I would think both would be converted to 0 - The problem
// is that if both values are the same type, no conversion happens
false == null; //false because null and undefined are special values
false == undefined; //false because null and undefined are special values
false == NaN; //false because NaN is already a number
false == 0; //true because false is converted to 0
false == 0; //true because false is converted to 0
false == ""; //true because both are coverted to 0
false == []; //true because both are coverted to 0
false == {}; //false because {} is converted to NaN
"" == null; //false because null and undefined are special values
"" == undefined; //false because null and undefined are special values
"" == NaN; //false because NaN is already a number
"" == 0; //true because "" is converted to 0
"" == []; //true because both are converted to 0
"" == {}; //false because {} is converted to NaN
0 == null; //false because null and undefined are special values
0 == undefined; //false because null and undefined are special values
0 == NaN; //false because NaN is already a number and it is != 0
0 == []; // true because [] is converted to 0
0 == {}; // false because {} is converted to NaN
