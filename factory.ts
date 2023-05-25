/*

The Factory Pattern is a creational design pattern that provides an 
interface or base class for creating objects but delegates the responsibility 
of instantiation to its subclasses.

*/

// Shape interface
interface Shape {
  draw(): void;
}

// Circle class implementing Shape
class Circle implements Shape {
  draw(): void {
    console.log('Drawing a circle');
  }
}

// Square class implementing Shape
class Square implements Shape {
  draw(): void {
    console.log('Drawing a square');
  }
}

// ShapeFactory responsible for creating shapes
class ShapeFactory {
  createShape(shapeType: string): Shape {
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
const factory: ShapeFactory = new ShapeFactory();
const circle: Shape = factory.createShape('circle');
const square: Shape = factory.createShape('square');

circle.draw(); // Output: Drawing a circle
square.draw(); // Output: Drawing a square
