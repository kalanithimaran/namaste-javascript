// everything in JavaScript happens inside an Execution context
// js execution context have to parts on thing is memory allocation and another one is code part 
// variable environnement => memory
// thread of execution => code
// JavaScript is synchronous single threaded language
// ❤️❤️❤️
var n = 2;
function square(num) {
    let aValue = num + 3;
    var ans = num * num;
    return ans
}
var square2 = square(n);
var square4 = square(4);
console.log("square2", square2)
console.log("square4", square4)
// in every JavaScript execution context first space is memory allocation.
//  And space two is the code execution. A new function create a new execution context


// Before Function1 execution:
// Call Stack:
// |              |
// |              |
// |______________|
// |   Function1  | <-- Execution of Function1 begins.
// |    GEC       | <-- Global Execution Context (always present).
// |______________|

// once function1 is executed then clear function1 and call function2.
// all functions are executed the Global Execution Context was cleared.