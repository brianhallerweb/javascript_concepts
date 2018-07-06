### Strict Mode

Using babel as a transpiler automatically puts the code into strict mode.

I want to list exactly what strict mode does but I only know of 3 things right
now

#### 1. Prevents default "this" binding to the global object.

```
"use strict";
var foo = "bar";

function baz() {
console.log(this.foo);
}

baz(); // type error - foo isn't a method on undefined.
```

if strict mode was off, this would point to the window object and baz
could console log "bar"

#### 2. Prevents implicit global variables.

```
function foo() {
bar = 1;
}

foo();

bar; // 1
```

Creation Phase

1.  foo is declared as a function in the global scope.

Execution Phase

1.  Does foo(rhs) exist? Yes, it is a funciton Call it with parentheses.
2.  Does bar(lhs) exist in the scope of foo? No. Does it exist in the global
    scope? No. Okay, it will be implicitly created at runtime and assigned the
    value 1. (this is where strict mode would throw an error).
3.  foo() has a value of 1
4.  Does bar(rhs) exist? Yes, because it was implicitly created as a global on
    line 2. Its value is 1.

#### 3. Prevents duplicate parameters from being allowed in functions declarations.
