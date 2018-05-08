// OOP with constructor functions

//Objects are always created with constructors, even when the object literal syntax is used.

//Shape.prototype is an important property. It is not the prototype of Shape (of course there
// the prototype of Shape does exist, that is found in the __proto__ property). It is the
// prototype of objects that Shape may create. Unless properties and methods are added, the
// only method on the prototype is the Shape constructor itself.
function Shape(color) {
  this.color = color;
}

// the new keyword creates and returns an object that contains the properties and methods
// defined in the Shape constructor. It also sets "this" to point to that object.
const myShape = new Shape("red");

//the prototype of myShape. It is simply an object with the Shape constructor on it.
console.log(myShape.__proto__);

//Private methods and variables with getters and setters
function Shape1(color) {
  let myPrivateVariable = "private";

  this.color = color;

  //these getters and setters don't seem to work so something is slightly wrong here.
  //But this is approximately what the code looks like.
  Object.defineProperty(this, "myPrivateVariable", {
    get: function() {
      return myPrivateVariable;
    },
    set: function(value) {
      myPrivateVariable = value;
    }
  });
}
const myShape1 = new Shape1("red");

//A constructor with methods on the prototype
function Shape2(color) {
  this.color = color;
}
Shape2.prototype.draw = function() {
  console.log("draw");
};
const myShape2 = new Shape2("red");
myShape2.draw();

//Hierarchical inheritance. Circle should inherit from Shape3.
function Shape3() {}
Shape3.prototype.draw = function() {
  console.log("draw");
};

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype = Object.create(Shape3.prototype);
const myCircle = new Circle(1);

//The same example as above except for myCircle calls Shape4, the super constructor.
//Notice that the color property in Shape4 ends up becoming a color property on myCircle1.
function Shape4(color) {
  this.color = color;
}
Shape4.prototype.draw = function() {
  console.log("draw");
};

function Circle1(radius, color) {
  Shape4.call(this, color);

  this.radius = radius;
}
Circle1.prototype = Object.create(Shape4.prototype);
const myCircle1 = new Circle1(1, "green");

//Composition is an alternative pattern to inheritance. It solves the code redundancy
//problem without introducing the problems of fragile hierarchies.
let canEat = {
  eat: function() {
    console.log("can eat");
  }
};
let canWalk = {
  walk: function() {
    console.log("can walk");
  }
};
function Person() {}
Object.assign(Person.prototype, canEat, canWalk); //This is called a mixin.
//The methods on canEat and canWalk are added to Person.prototype
let brian = new Person();
brian.eat();
brian.walk();
