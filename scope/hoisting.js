//Hoisting doesn't exist. It is a metaphor to describe behavior that is
//better described by lexical scoping enforced by the compiler. Variable
//hoisting theory would say that the variable declarations are first
//hoisted to the top of the code before everything runs. It does predict
//runtime behavior accurately without having to separate the compiling
//step and the execution step. Hoisting is a way of understanding code
//as if there is just one execution pass. It is better to recognize that
//the compile step exists and the first pass throught he code just does
//variable declarations.

/*1*/ a;
/*2*/ b;
/*3*/ var a = b;
/*4*/ var b = 2;
/*5*/ b; //2
/*6*/ a; //undefined

// complile time
// 3. a is declared in the global scope
// 4. b is declared in the global scope

// runtime
// 1. is there an a(rhs) in the global scope? Yes. Its value is undefined.
// 2. is there a b(rhs) in the gloabal scope? Yes. Its value is undefined.
// 3. is there an a(lhs) in the global scope? Yes. Is there a b(rhs) in the global
//scope? Yes. Its value is undefined. Assign undefined to a (which it happened
// to already be).
// 4. is there a b(lhs) in the global scope? Yes. Assign source 2 to target b.
// 5. is there a b(rhs) in the global scope? Yes. Its value is 2.
// 6. is there an a(rhs) in the global scope? Yes. Its value is undefined.
