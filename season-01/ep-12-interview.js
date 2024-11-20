/* 1. a function access the outer function lexical environment.*/
function outer(b) {
    function inner() {
        console.log(a, b);
    }
    let a = 10;
    return inner;
}
var close = outer('hello js');
let a = 100; // in this case a print as 10 because of closure
close();

// Advantages of closure
// data hiding and encapsulation
// memorize values in higher order functions

/* data hiding*/
var count = 0;
function countIncrement() {
    return count++;
}

// on this case any where can change the value of count
// But in below format can't change the count value from out side of the function

function counter() {
    let count = 0;
    return function countIncrement() {
        count++;
        console.log(count);
    };
}
console.log('count', count) // output is not defined due to closure.
let count1 = counter();
let count2 = counter();
//output is count incremented
count1(); // output 1
count1(); // output 2
count2(); // output 1 
// => because every time call counter the lexical environment created new.

// convert as constructor function

function Counter() {
    let count = 0;
    this.increment = function () {
        count++;
        console.log(count);
    };
    this.decrement = function () {
        count--;
        console.log(count);
    }
}

var count = new Counter();
count.increment();// output 1
count.increment();// output 2
count.decrement();// output 1

// Disadvantage of closures
// 1. Memory Consumption
function createClosure() {
    let largeData = new Array(1000000).fill("data"),a =10;
    return function () {
        console.log("Closure accessed",a);
    };
}

/*
Smart Garbage Collector
once createClosure is called a are used in function so it should be hold.
largeData is unused so it should be removed from memory that is Smart Garbage Collector.
 */
const closureFunc = createClosure(); // 'largeData' remains in memory.

// 2. Risk of Memory Leaks
// 3. Debugging Complexity
// 4. Unintended Variable Sharing
function createFunctions() {
    let count = 0;
    return [ 
        function () { count++; console.log(count); },
        function () { count++; console.log(count); }
    ];
}
const [fn1, fn2] = createFunctions();
fn1(); // 1
fn2(); // 2 (unintended side effect)
// 5. Can Lead to Poor Code Practices
