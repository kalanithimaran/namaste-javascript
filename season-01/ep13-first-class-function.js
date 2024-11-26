// Function Statement and Function Declaration
function a() {
    console.log('Function Statement');
}
// Function Expression
var b = function () {
    console.log('Function Expression');
}

var c = function xyz() {
    console.log('Function Expression');
    // here xyz is called as xyz inside this function will be output render;
    // outside xyz is not declared error.
}
c(); // Function Expression
xyz(); // Reference Error
/* Assigning a function to a variable is called a function expression. */
/* Difference between both is **Hoisting**. */

// Anonymous Function

//  Named Function

// Difference between Parameter Vs Argument

// First Class Function
// a function takes a function as a parameter and returns a function called as a firstClassFunction
// First class citizens === First Class Function

// Arrow Function
// ()=>{};
