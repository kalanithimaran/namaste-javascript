// Hoisting 
console.log("getName", getName); // print full function
console.log("getName2", getName2); // undefined
console.log(hosting); // undefined

var hosting = 7;
function getName() {
    console.log("name JavaScript");
}

var getName2 = () => {
    console.log("name ES6");
} 
