// Namaste JavaScript Ep. 5 - `window` & `this` Keyword

// 1. `window` Object
// The `window` object is the global object in the browser.
// All global variables and functions are properties of the `window` object.

var a = 10;
console.log(window.a); // Output: 10

// Represents the browser window with properties like alert(), console.log(), etc.


// 2. `this` Keyword

// Global Context:
// In the global scope, `this` refers to the `window` object.
console.log(this === window); // Output: true

// Function Context:
// Inside regular functions, `this` refers to the `window` object (in non-strict mode).
function show() {
  console.log(this); // Output: window (in non-strict mode)
}
show();

// Object Method Context:
// Inside an object's method, `this` refers to the object itself.
const obj = {
  name: 'JavaScript',
  showName: function() {
    console.log(this.name); // Output: JavaScript
  }
};
obj.showName();

// 3. Shortest JavaScript Program
// An empty program is a valid JavaScript program due to the global `window` object.

console.log("Shortest JavaScript program example - it can be completely empty");
