### Object Prototypes

#### The prototype chain

All objects have a **proto** property that points to a prototype, which is just another object that holds accessible properties and methods. In turn, all prototypes themselves have **proto** property. These relationships always result in a chain of prototypes that ultimately ends with the base Object prototype. One step away from the base Object are the built in Objects. They include: String, Number, Boolean, Function, Array, RegExp, Date, Error.

```
var dog = { name: "obie" }
dog.hasOwnProperty("name") //true
```

The object called dog has a **proto** property. It points to the base Object. The method hasOwnProperty is on the base Object and made available through prototypal inheritance.

```
var name = "obie"
name.__proto__ // String Object
name.length //4
```

name is a string primitive. It has the String Object as its prototype. That String Object does have a length property but it is 0. Where did 4 come from? And where did the length property come from to begin with? Primitive values do not have members. When members are accessed the primitive is implicitly wrapped (called "boxing", I think because the old primitive value ends up held in a strange syntax that features double square brackets) in an object. In the case of a string primitive, that object includes the length property. Interestingly, it's prototype is the String Object. That is because the object that wraps a string primitive is the same object that is created by calling the String Object constructor with the new keyword.

```
var foo = 5
name.__proto__ // Number Object
foo.toFixed(2) // "5.00"
```

foo is a number primitive. It follows an analagous pattern to string primitives. The same pattern also exists for boolean primitives although there aren't commonly used methods on the Boolean Object. The pattern does not hold for undefined and null primitives. They seem to be excluded from the prototype chain.

#### Building Objects

There are many ways to build objects. It you do not care about manipulating the prototypal inheritance available by default (meaning that you do not mind if your object's prototype is simply the base Object), then it is best to just use object literal syntax. Using the Object constructor with the new keyword is okay too but I don't think that approach has any advantages over literal syntax.

Building objects gets a lot more interesting when you want to manipulate it's prototype.

##### Constuctors and the new keyword

Constructor functions are just normal functions that are called with the new operator.

```
function Person(firstname, lastname) {
  this.firstname = firstname,
  this.lastname = lastname
}
var john = new Person("john", "doe");
```

At exection, the new keyword creates an empty object, assigns it to the this keyword, and returns the object (provided that the fuction doesn't already have an explicit return statement). The reason why firstname and lastname are put on the returned object should be obvious - the this keyword points to an empty object at the start of the function.

#### The .prototype property

All functions have a prototype property but it is only used when the function is called with the new operator. It is crucial to make a distinction between the prototype property and the **proto** property. The prototype property is an object that will be the prototype of objects created by calling the function with the new operator. **proto** is the prototype of the function itself. I believe that will always be the Function Object.

Putting properties and methods on the prototype of newly constructed objects is simple - just add them to the prototype property on the constuctor function. It is common for shared methods to be put on the prototype. In this case, a greet method could be put on the prototype.

```
function Person(firstname, lastname) {
  (this.firstname = firstname), (this.lastname = lastname);
}
Person.prototype.greet = function() {
  console.log(`Hi ${this.firstname} ${this.lastname}`);
};
var john = new Person("john", "doe");
var obie = new Person("obie", "the dog");
john.greet();
obie.greet();
```

#### Object.Create

The history ot Javascript includes many attempts to capitalize on the popularity of Java. This is unfortunate because the languages work differently, especially the inheritance model. The whole idea of constructors and the new operator is from that history. There is a much clearer way of doing prototypal inheritance.

```
var obie = Object.create({
  greet: function() {
    console.log(`Hi ${this.firstname} ${this.lastname}`);
  }
});
obie.firstname = "obie";
obie.lastname = "the dog";
obie.greet();
```

Object.create takes an object as its argument and it returns an empty object. The object it takes as an argument is the prototype of the object it returns.

#### ES6 Classes

ES6 classes are syntactic sugar for constructor functions. They follow all the same principles of protopypal inheritance.

```
class Shape {
  constructor(color) {
    this.color = color;
  }
}
const myShape = new Shape("blue");
```

This is equivalent to the a Shape constructor with a color property.

```
class Shape1 {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("draw");
  }
}
const myShape1 = new Shape1("blue");
```

Shape1 is a constructor with the property color. The method draw is on Shape1.prototype

```
class Shape2 {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("draw");
  }

  static myStaticMethod() {
    console.log("static");
  }
}
const myShape2 = new Shape2("blue");
```

Shape2 has a static method. Static methods are methods that are only on the class
itself and are not available on any instance of Shape2.

```
class Circle extends Shape2 {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
}
const myCircle = new Circle(1, "green");
```

Circle inherits from Shape2. That means that myCircle has color and radius on it and it has access to the draw method through the prototype chain.

Classes also give improved syntax for private properties and methods with getters and setters.
I dont yet know how to implement these techniques properly.
