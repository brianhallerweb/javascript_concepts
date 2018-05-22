var foo = "bar";

function bar() {
  var foo = "baz";

  function baz(foo) {
    foo = "bam";
    bam = "yay";
  }
  baz();
}

bar();
foo;
bam;
baz();

/* Lexical scope
* Lexical scope gives variables and functions permanent scope 
* at the time of declaration (compile time). A good way to 
* understand lexical scope is to work through the code like 
* a complier. The Javascript  engine/interpreter/compiler is very 
* complex but here is a simplified model. 
* There are 2 steps, compilation and execution.
* Compliation goes through the code looking for variable and 
* function declarations. Each declaration includes a name lhs 
* (left hand side) or rhs (right hand side) metadata. That is when 
* scope is determined - at compile time not runtime. Execution
* works through the code line by line as a conversation between
* the engine and the scope manager. 
*/

// Compiling
// 1. foo is declared in the global scope
// 3. bar is declared as a function in the global scope. The body
// of bar is entered.
// 4. foo is declared in the scope of bar.
// 6. baz is declared as a function in the scope of bar. foo is
// delcared as a parameter in the scope of baz. The body of baz
// is entered.
// That is the end of compilation because there are no other
//declarations to be made.

// Execution
// 1. Does foo (lhs) exist in the global scope? Yes. Assign source
// to target. foo = "bar"
// 13. Does bar (rhs) exist in the gloabal scope? Yes. Get the value
// of bar (because it is a rhs). The value is a function. Then the ()
// is read, and the function is called. Notice there are 2 distinct steps
// here - The value of bar is retrieved and then the parenthesis are read.
// 4. Does foo (lhs) exist in the scope of bar? Yes. Assign source to
// target. foo = "baz"
// 10. Does baz (rhs) exist in scope of bar? Yes. Get its value. It is
// a function. Read parentheses and execute.
// 7. Does foo (lhs) exist in scope of baz? Yes, because it was declared
// as a parameter. Assign target foo to source "bam".
// 8. Does bam(lhs) exist in the scope of baz? No. Does it exist in the
// scope of bar? No. Does it exist in the global scope? No but it will be
// created implicitly in the global scope so bam = "yay". (this would cause
// an error with  "strict mode" enabled)
// 14. Does foo(rhs) exist in the global scope? Yes and its value is "bar".
// Nothing else happens.
// 15. Does bam (rhs) exist in the global scope? Yes and its value is "yay"
// (remember that it was implicitly created on line 8)
// 16. Does baz(rhs) exist in the global scope? No. A reference error is thrown.
// An implicit gloabal is not created because it is rhs.

// What about function expressions?
var foo = function bar() {
  var foo = "baz";

  function baz(foo) {
    foo = bar; // bar is declared in the scope of bar, as strange as that may seem.
    foo;
  }
  baz();
};

foo();
bar(); //This will cause a reference error

//bar is not declared in the global scope, which is why line 78 will throw an error.
//bar is declared as a function in the scope of bar. This is a somewhat strange
//rule but it is important reliable self reference for techniques like recursion. That
//is why named function expressions are prefferable over anonymous function
//expressions. Also named functions show up in the stack trace when errors are
//shown in the console, making debugging easier.

// What about the error variable in a catch clause?
try {
} catch (err) {}
// Although there is no keyword, err is block scoped to the catch clause.

// An example showing a type error. This is a good reason prefer
// function declarations over function expressions.
/*1*/ function b() {
  /*2*/ return c;
  /*3*/
}
/*4*/ var a;
/*5*/ var c;
/*6*/ var d;
/*7*/ a = b();
/*8*/ c = d();
/*9*/ a;
/*10*/ c;
/*11*/ d = function() {
  /*12*/ return b();
  /*13*/
};

// complile time
// 1. b is declared as a global function. Step into b.
// 4. a is declared as a global variable.
// 5. c is declared as a global variable.
// 6. d is declared as a global variable.

// runtime
// 4. Does a(rhs) exist? Yes. Its value is undefined.
// 5. Does c(rhs) exist? Yes. Its value is undefined.
// 6. Does d(rhs) exist? Yes. Its value is undefined.
// 7. Does a(lhs) exist? Yes. Does b(rhs) exist. Yes, it is a function.
// Call b with parenthesis. That jumps to line 2 where c is encountered.
// Does c(rhs) exist in the scope of b? No. Does c(rhs) exist in the global
// scope? Yes, its value is undefined. Assign source undefined to target
// a.
// 8. Does c(lhs) exist? Yes. Does d(rhs) exist? Yes, its value is undefined.
// Call it with parentheses? Nope, D is not a type function. So a type error
// is thrown.
