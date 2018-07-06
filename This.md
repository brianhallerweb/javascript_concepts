### Four rules for "this" assignment

"this" is determined by function execution context. When a function is called, 2
special keywords are assigned to it: "this" and "arguments". There are 4 rules for
understanding how "this" will be assigned.

#### Rule 1: Implicit default binding.

When called outside of an object, "this" is the global object (window).
Strict mode changes that rule: "this" stays undefined.

```
function myFunction() {
  return this;
}
console.log(myFunction());
```

#### Rule 2: Implicit binding with a context object

When called inside an object, "this" will be the closest parent object.

```
const person = {
  firstName: "Brian",
  sayHi: function() {
    return `Hi, ${this.firstName}.`;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return `Hello, ${this.firstName}.`;
    },
    determineContext: function() {
      return this === person;
    }
  }
};

console.log(person.sayHi()); //"Hi, Brian."
console.log(person.dog.sayHello());//"Hi, undefined."
```

#### Rule 3: Explicit Binding.

There are 3 methods on functions that allow for explicit binding of "this" - call, apply, and bind.

```
| Name of Method  | Parameters                 | Invoke Immediately? |
| --------------- |:--------------------------:| -------------------:|
| Call            | thisArg, a, b, c, d, ...   | Yes                 |
| Apply           | thisArg, [a, b, c, d, ...] | Yes                 |
| Bind            | thisArg, a, b, c, d, ...   | No                  |
```

Call and Apply work in a nearly identical way to change "this" from dog to person. If the function sayHello took arguments, they would be passed through the additional parameter(s) of call and apply. Apply spreads out an array of arguments ([a, b, c, d, ...]) automatically whereas Call requires each argument to be passed in individually.

```
console.log(person.dog.sayHello.call(person));
console.log(person.dog.sayHello.apply(person));
```

Bind changes "this" by creating a new function declaration.

```
const newSayHello = person.dog.sayHello.bind(person);
console.log(newSayHello());
```

#### Rule 4: The "new" keyword.

The new keyword does 4 things when combined with a function to create a constructor
call.

1.  It creates an empty object within the function.
2.  It gives the new object a prototype object with the function assigned to the
    prototype's constructor property.
3.  It assigns the new object to "this"
4.  It causes the function to return "this", which is the the new object.

#### Arrow functions and lexical "this"

Arrow functions do not have a "this". People sometimes misunderstand this fact that
they end up saying innaccurate things like arrow function have "lexical this" or
that they have a "hard-bound this".
These mistakes are understandable because "this" in an arrow function is simply a
variable name, which means that it will follow lexical lexical scope rules for
finding a value for "this". Thinking about arrow functions as following "lexical
this" or "hard bound this" does predicts "this" behavior but it is needlessly
complicated because, in reality, "this" is just a variable that follows normal
lexical scope rules.

#### Big picture perspective - predictability vs flexibility

You could say that javascript has 2 systems to determine context - one flexible
and one predicatble. "this" is flexible and lexical scope is predictable. Javascript
is unusual in offering both systems and it gives javascript broad applicability.
Notice that the dynamic flexibility of "this" is necessary for code sharing benefits
of protypical inheritance. Also, if you are writing code that doesn't need the
flexibility of "this" and you are forcing more predictability with a lot of
explicit binding, it may be better to control context with lexical scope.
