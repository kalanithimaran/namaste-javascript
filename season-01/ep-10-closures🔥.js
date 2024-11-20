// closures is the function with bundle of lexical scope.
function a() {
    let = 10;
    c();
    function c() {
        console.log(x); // output is 10;
    }
}
a();

var x = 10;
function a() {
    x = 5
    function c() {
        console.log(x); // output is 10;
    }
return c
}
var z = a();
// x = 7;
z();
// Uses of Closures:
// Module Design Patter
// - Currying
// - Functions like once
// - memoize
// - maintaining state in async world
// - setTimeouts
// - Iterators
// - I and and many more...