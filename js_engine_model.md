### A two phase model of the javascript engine - how variables and functions are declared and executed.

The js engine can be simplified into two phases: Creation and execution.

#### Creation

The major role of the creation phase is declaring variables and functions. This is also the time when lexical scope is determined. Lexical scope is determined. Lexical means "about the words." In js, lexical scope refers to the availability of variables and functions. That availability is determined by the physical location of the code on the page.

#### Execution

When a program begins, a global execution environment is created and pushed onto the call stack. Whenever functions within that program are invoked, new execution contexts are created and pushed onto the stack. Those contexts include a this keyword, an arguments object, the declared variables and function names within its lexical scope, and a reference to it's outer environment. Execution of the code within each execution context procedes line by line, often assigning values to variables or invoking functions (causing another execution enviroment to be created and pushed onto the call stack...). When each invoked function returns, its execution context is popped off the stack and code within the execution context below begins to execute. A program finishes when the global execution environment is finally popped off the stack.

'''
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
'''

#### Creation

1.  foo is declared in the global scope
2.  bar is declared as a function in the global scope. The body
    of bar is entered.
3.  foo is declared in the scope of bar.
4.  baz is declared as a function in the scope of bar. foo is
    delcared as a parameter in the scope of baz. The body of baz
    is entered.

#### Execution

1.  Does foo (lhs) exist in the global scope? Yes. Assign source
    to target. foo = "bar"
2.  Does bar (rhs) exist in the gloabal scope? Yes. Get the value
    of bar (because it is a rhs). The value is a function. Then the ()
    is read, and the function is called. Notice there are 2 distinct steps
    here - The value of bar is retrieved and then the parenthesis are read.
3.  Does foo (lhs) exist in the scope of bar? Yes. Assign source to
    target. foo = "baz"
4.  Does baz (rhs) exist in scope of bar? Yes. Get its value. It is
    a function. Read parentheses and execute.
5.  Does foo (lhs) exist in scope of baz? Yes, because it was declared
    as a parameter. Assign target foo to source "bam".
6.  Does bam(lhs) exist in the scope of baz? No. Does it exist in the
    scope of bar? No. Does it exist in the global scope? No but it will be
    created implicitly in the global scope so bam = "yay". (this would cause
    an error with "strict mode" enabled)
7.  Does foo(rhs) exist in the global scope? Yes and its value is "bar".
    Nothing else happens.
8.  Does bam (rhs) exist in the global scope? Yes and its value is "yay"
    (remember that it was implicitly created on line 8)
9.  Does baz(rhs) exist in the global scope? No. A reference error is thrown.
    An implicit gloabal is not created because it is rhs.
