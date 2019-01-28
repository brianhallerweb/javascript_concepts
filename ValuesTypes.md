### Values and their types

Javascript is a dynamically typed language. That means variables do not have types - only values do. Values are assigned to variables and their types are determined during the execution phase.

#### 7 Types

The six primitive types are undefined, null, string, number, boolean, and symbol. Object is the seventh type. Functions are objects (callable objects). Value types are checked with the typeof operator.

#### Special Values

There are few special values of type number. They include numbers that are rarely ecountered like -0, infinity or -infinity. NaN (not a number) is encountered more often. Its name is misleading because it is still of type number. A better name would have been "invalid number." A value becomes Nan when an attempt to convert to a number type fails. For ease of use and accessibility, Javascript decided to return NaN, not to throw an error.

#### Native Functions

Native functions look like constructors for primitives but they are not quite that.
They include: String, Number, Boolean, Function, Object, Array, RegExp, Date, Error.
Number, Boolean, String, and Array natives should never be used with the new keyword. If they are, they produce fairly strange and probably useless array-like objects. It is always better to use literal syntax. RegExp and Date are exceptions - they should sometimes be used with the new keyword. RegExp() will create a new regular expression, just like literal regex syntax will, but RegExp() is useful becuase you can pass it a dynamic value. The Date() constructor is useful because there is no date literal syntax. However, usually all that is needed for a date is a time stamp and that is easier achieved with Date.now().

#### A bug to be aware of

```
typeof null === "object"; //true
```

This is simply a bug so be wary of type checking null.
