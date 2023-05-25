"use strict";
/*

The Singleton pattern is a creational design pattern that ensures a class has
only one instance and provides a global point of access to that instance.

*/
class Singleton {
    constructor() {
        this.data = Math.random();
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    getData() {
        return this.data;
    }
}
const instance1 = Singleton.getInstance();
console.log(instance1.getData()); // Output: 0.123456789
const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // Output: 0.123456789
console.log(instance1 === instance2); // Output: true
