// strict mode should be used for many reasons but a subtle one is that
// it helps your code to be optimized by the javascript engine.

// Using babel as a transpiler, automatically puts the code into strict mode,
// I think.

// I want to list exactly what strict mode does but I only know of 1 thing right
// now

//It prevents implicit global variables.

function foo() {
  bar = 1;
}

foo();

bar; // 1

//The above code works like this:

// compile time
// 1. foo is declared as a function in the global scope.

// runtime
// 5. Does foo(rhs) exist? Yes, it is a funciton Call it with parentheses.
// 2. Does bar(lhs) exist in the scope of foo? No. Does it exist in the global
// scope? No. Okay, it will be implicitly created at runtime and assigned the
// value 1. (this is where strict mode would throw an error).
// 5. foo() has a value of 1
// 7. Does bar(rhs) exist? Yes, because it was implicitly created as a global on
// line 2. Its value is 1.
