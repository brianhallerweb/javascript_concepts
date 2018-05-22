// This concept is the reason why var is "hoisted" and let and const are not.

a; //undefined (however, a is declared)
let a = 1;

a; //reference error, a is not defined (undeclared)
// a is being referenced in the temporal dead zone.
let a = 1;

a; //reference error, a is not defined (undeclared)
// a is being referenced in the temporal dead zone.
const a = 1;

// What explains this behavior?
// Variables are declared at compile time but they are also initialized at the
// first step of runtime. The var keyword is declared to its scope at compile
// time and also initialized at the top of its scope at runtime. Let and const
// do get declared at compile time but they do not get initialized at runtime.
// The purpose of this restriction is to avoid the bad practice of seemingly
// declaring a variable before its use (althought that isn't what is actually
// happening, it does read that way.)

// Saying that let and const do not hoist is inaccurate
// The declaration step at compile time is typically what people mean by
// hoisting. In that sense, let and const do hoist. An accurate statment
// is that they don't initalize at runtime.
