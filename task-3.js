// Task 3: Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
// Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area
// calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
    calculateArea() {
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

let obj1 = new Circle(10);
console.log("Area of the circle is " + obj1.calculateArea());

let obj2 = new Triangle(5, 12);
console.log("Area of the triangle is " + obj2.calculateArea());