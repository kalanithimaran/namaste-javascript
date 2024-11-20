// Time, Die and JavaScript don't wait for any one.\

// function x() {
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     console.log("Namaste JavaScript");
// }
// x() output :
// Namaste JavaScript
// 1
function xl() {
    let b = 10;
    for (let a = 1; a < 5; a++) {
        function q(x) {
            setTimeout(() => {
                console.log(x, b);
            }, x * 1000);
        }
        q(a);
    }
}
xl()
//6
//6
//6
//6
//6
//  if we used let we can get 1,2,3,4,5. because let block scope variables and every time setTimeout function is run with new laxical