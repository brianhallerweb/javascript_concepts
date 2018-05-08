// OOP with ES6 Classes

// ES6 Classes are not like classes in Java or C#. They are merely a new syntax for constructor functions.

//Shape is a constructor with the property color. The prototypical inheritance works exactly the same.
class Shape {
  constructor(color) {
    this.color = color;
  }
}
const myShape = new Shape("blue");

//Shape1 is a constructor with the property color and the method draw is on Shape1.prototype
class Shape1 {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("draw");
  }
}
const myShape1 = new Shape1("blue");

//Shape2 has a static method. Static methods are methods that are only on the class
// itself and often used as a utility to do some processing prior to creating new
//instances. Static methods are not available to any instance of Shape2.

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

//Private properties and methods, getters and setters
//ES6 also has new data types called symbols and weak maps. They are used to create
// private properties and methods in classes. Getters and setters for those private
// variables are very easy to write because there are "get" and "set" keywords that
// precede the getter and setter functions.

//Inheritance. Circle inherits from Shape.
class Circle extends Shape2 {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
}
const myCircle = new Circle(1, "green");
