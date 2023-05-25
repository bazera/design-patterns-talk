"use strict";
/*

The Factory Pattern is a creational design pattern that provides an
interface or base class for creating objects but delegates the responsibility
of instantiation to its subclasses.

*/
// Circle class implementing Shape
class Circle {
    draw() {
        console.log('Drawing a circle');
    }
}
// Square class implementing Shape
class Square {
    draw() {
        console.log('Drawing a square');
    }
}
// ShapeFactory responsible for creating shapes
class ShapeFactory {
    createShape(shapeType) {
        switch (shapeType) {
            case 'circle': {
                return new Circle();
            }
            case 'square': {
                return new Square();
            }
            default: {
                throw new Error('Invalid shape type');
            }
        }
    }
}
// Client code
const factory = new ShapeFactory();
const circle = factory.createShape('circle');
const square = factory.createShape('square');
circle.draw(); // Output: Drawing a circle
square.draw(); // Output: Drawing a square
