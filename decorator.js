"use strict";
/*

The Decorator pattern is a structural design pattern that allows behavior to be added to
an object dynamically without affecting the behavior of other objects of the same class.
It provides a flexible alternative to subclassing for extending the functionality of individual objects.

*/
class SimpleCoffee {
    getDescription() {
        return 'Simple coffee';
    }
    getCost() {
        return 2.0;
    }
}
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getDescription() {
        return this.coffee.getDescription();
    }
    getCost() {
        return this.coffee.getCost();
    }
}
class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, milk`;
    }
    getCost() {
        return this.coffee.getCost() + 0.5;
    }
}
class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, sugar`;
    }
    getCost() {
        return this.coffee.getCost() + 0.2;
    }
}
class CaramelDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, caramel`;
    }
    getCost() {
        return this.coffee.getCost() + 1.0;
    }
}
// usage
// Creating a simple coffee
let coffee = new SimpleCoffee();
console.log(coffee.getDescription()); // Output: Simple coffee
console.log(coffee.getCost()); // Output: 2.0
// Adding milk to the coffee
coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription()); // Output: Simple coffee, milk
console.log(coffee.getCost()); // Output: 2.5
// Adding sugar and caramel to the coffee
coffee = new SugarDecorator(coffee);
coffee = new CaramelDecorator(coffee);
console.log(coffee.getDescription()); // Output: Simple coffee, milk, sugar, caramel
console.log(coffee.getCost()); // Output: 3.7
