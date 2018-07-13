### Operators and Coercion

#### Operators

Operators are syntactically special functions. The syntax is usually either prefix, infix or postfix. Most operators are binary, meaning they take two arguments, but there are many unary operators too, and one ternary. All operators return a value. What an operator returns is often obvious, like with +, but there are plenty of operators that have unexpected return values. A good example is || and &&. You might expect these to return a boolean but they actually return values that make them useful as conditional selectors.

#### Operator precedence and associativity

Operator precedence describes the order in which operators are called. The order of precedence mostly follows mathematical precedence. When operators share equal precedence,their order is determined by associativity. Associativity is either left to right or right to left.

```
var a = 2;
var b = 3;
var c = 4;
a = c = b;
console.log(a); // 3
```

The assignment operator has right to left associativity. c is assigned the value of b
Assignment returns a value...it happens to be the value of the right hand argument. That is 3 (b = 3). Finally, a is assigned 3.

#### Operators and implicit coercion

Value types are frequently implicitly coerced in javascript. I believe operators are always responsible for the coercion, except for with conditional statements, where the argument is coerced to a boolean.

```
console.log(1 < 2 < 3) //true
```

This is deceptively simple. There is actually a lot happenind here. < has left to right associativity. 1 < 2 is called and true is returned. true < 3 can not be called before implicit coercion. true is coerced to 1. 1 < 3 is called and true is returned.

```
console.log(3 < 2 < 1) //true
```

Understandind implicit coercion makes this result predictable. 3 < 2 returns false, false is coerced to 0, 0 < 1 returns true.

#### Truthy and Falsy values

Operators and conditional statement coerce values to boolean based on truthiness or falsiness. The rule is that any value that is not falsey, is truthy. Here is the falsey list.

1.  ""
2.  0, +0, -0
3.  null
4.  NaN
5.  false
6.  undefined

#### Logical OR and AND as selectors

##### OR

If the first is true after boolean coercion, it is selected

```
var foo = "first";
var baz = foo || "second";
baz; //"first"
var foo = 1;
var baz = foo || 0;
baz; //1
```

If the first is false after boolean coercion, the second is selected.

```
var foo = "";
var baz = foo || "second";
baz; //"second"
var foo = "";
var baz = foo || 0;
baz; //0
```

##### AND

If the first is true after boolean coercion, the second is selected.

```
var foo = "first";
var baz = foo && "second";
baz; //"second"
var foo = 1;
var baz = foo && 0;
baz; //0
```

If the first is false after boolean coercion, the first is selected.

```
var foo = 0;
var baz = foo && "second";
baz; //0
var foo = "";
var baz = foo && 0;
baz; //""
```

#### Double equals vs Triple equals

The difference between double equals and triple equals is that while they both test equality, double equals allows type coercion andtriple equals doesn't.

Double equals follows understandable rules

1.  if both values are the same type, check for strict equality with ===
2.  null and undefined are equal to each other and no other values. This one is very useful to know because null and undefined are conceptually very similar, they are both empty values. Coercion is genuinely useful here.
3.  if one is a number and the other a string, convert the string to a number
4.  if one is a number and the other a boolean, convert the boolean to a number
5.  if one is a number and the other is an array or object, call the abstract operator ToPrimitive on the object or array. That results in NaN for objects and "" for arrays, which is then converted to a number and Number("") return 0.

Double equals edge cases with explanations

```
null == undefined;
```

true but not because both are coverted to the number 0. It is because null and undefined are special cases, they are coercively equal to each other and no other value.

```
"0" == null;
```

false because null is only coercively equal to undefined.

```
"0" == false;
```

true because both are coverted to 0

```
"0" == NaN;
```

false because NaN is a number and 0 != NaN

```
"0" == 0;
```

true because "0" is coverted to 0

```
"0" == "";
```

false but I'm not sure why - I would think both would be converted to 0 - The problem
is that if both values are the same type, no conversion happens

```
false == null;
```

false because null and undefined are special values

```
false == undefined;
```

false because null and undefined are special values

```
false == NaN;
```

false because NaN is already a number

```
false == 0;
```

true because false is converted to 0

```
false == 0;
```

true because false is converted to 0

```
false == "";
```

true because both are coverted to 0

```
false == [];
```

true because both are coverted to 0

```
false == {};
```

false because {} is converted to NaN

```
"" == null;
```

false because null and undefined are special values

```
"" == undefined;
```

false because null and undefined are special values

```
"" == NaN;
```

false because NaN is already a number

```
"" == 0;
```

true because "" is converted to 0

```
"" == [];
```

true because both are converted to 0

```
"" == {};
```

false because {} is converted to NaN

```
0 == null;
```

false because null and undefined are special values

```
0 == undefined;
```

false because null and undefined are special values

```
0 == NaN;
```

false because NaN is already a number and it is != 0

```
0 == [];
```

true because [] is converted to 0

```
0 == {};
```

false because {} is converted to NaN

#### Explicit coercion

##### string to number

This is commonly done with parseInt but parseInt isn't true coercion, it just parses a string.

```
var foo = "123x2";
var baz = parseInt(foo);
baz; // 123
```

parseInt loops through a string looking for integers. It stops when it encounters a non integer. You should use the Number native function or the + operator instead.

```
var foo = "123";
var baz = Number(foo);
baz; // 123
```

```
var foo = "123";
var baz = 1 + +foo;
baz; //124
```

##### number to string

Either use the String native function or the .toString method available on numbers. How does a number have a method on it? When methods are called on numbers, the numbers undergo implicit "boxing", which just means the number gets wrapped in the same object that is created when the Number native function is used with the new keyword.

```
var baz = 456;
var foo = String(baz);
foo; //"456"
typeof foo; // string
```

```
var baz = 456;
var foo = baz.toString();
foo; //"456"
typeof foo; // string
```

##### Any value to a boolean

```
var foo = "123";
var baz = !!foo;
baz; //true
```

The above is a very common way to create booleans. It works fine but you should use the Boolean navtive function instead. Using a double bang both coerces and negates, whereas using the Boolean native function just coerces. Do this
instead:

```
var foo = "123";
var baz = Boolean(foo);
baz; // true
```

##### Date to numeric time stamp

The Date constructor returns something like this:

```
var now = new Date();
now; //Thu May 24 2018 14:02:00 GMT-0700 (PDT)
```

The most common use of the Date constructor is to create a numeric timestamp. This can be easily
done 2 ways.

```
var now = new Date();
now = now.getTime();
now; //1527195878550
typeof now; //number
```

```
now = Date.now();
now; //1527195878550
typeof now; //number
```

Don't use this uselessly clever, but common, approach:

```
now = +new Date();
now; //1527195878550
typeof now; //number
//The + operator coerces to a number and implicitly returns just the time stamp
```
