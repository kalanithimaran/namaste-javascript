// Lexical environment
// lexicalEnvironment is with local memory and reference of lexical environment memory of parent functions.
function a() {
    var x = 10;
    c();
    function c() {
        console.log(x); // output is 10;
    }
}
a();
// lexical environment created while the code execution.
// here function c takes x value from lexical environment of c.