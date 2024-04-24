//How to write nested function

// console.log(calc(3)(2));
// function calc(x){
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// }
// let result = calc(3);
// console.log(result(2));
// console.log(calc(3)(2));

//How to write Arrow function

// const calc = function(param){
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;

// }
// console.log(calc(3)(2));

// const square = function(x){
//     return x * x;
// }
// console.log(square(12));

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2,10));