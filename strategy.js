"use strict";
/*

The Strategy pattern is a behavioral design pattern that enables selecting an
algorithm at runtime from a family of interchangeable algorithms. It allows you
to encapsulate different algorithms or strategies behind a common interface, making
them interchangeable without affecting the client code that uses them.

*/
class BubbleSortStrategy {
    sort(data) {
        // Implementation of bubble sort algorithm
        console.log('Sorting using Bubble Sort');
        return data.sort((a, b) => a - b);
    }
}
class QuickSortStrategy {
    sort(data) {
        // Implementation of quick sort algorithm
        console.log('Sorting using Quick Sort');
        return this.quickSort(data, 0, data.length - 1);
    }
    quickSort(data, low, high) {
        if (low < high) {
            const pivotIndex = this.partition(data, low, high);
            this.quickSort(data, low, pivotIndex - 1);
            this.quickSort(data, pivotIndex + 1, high);
        }
        return data;
    }
    partition(data, low, high) {
        const pivot = data[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (data[j] <= pivot) {
                i++;
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
        [data[i + 1], data[high]] = [data[high], data[i + 1]];
        return i + 1;
    }
}
class Sorter {
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sort(data) {
        if (!this.strategy) {
            throw new Error('No sorting strategy set');
        }
        return this.strategy.sort(data);
    }
}
// usage
const sorter = new Sorter();
sorter.setStrategy(new BubbleSortStrategy());
const data = [5, 2, 8, 1, 9];
console.log(`Original data: ${data}`);
const sortedData = sorter.sort(data);
console.log(`Sorted data: ${sortedData}`);
