"use strict";
/*

The Observer pattern is a behavioral design pattern that establishes a one-to-many relationship between objects,
where changes in one object (called the subject or observable) are automatically propagated to other objects
(called observers) that have subscribed to it.

*/
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notify(data) {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}
class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}
const subject = new Subject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify('Hello observers!');
