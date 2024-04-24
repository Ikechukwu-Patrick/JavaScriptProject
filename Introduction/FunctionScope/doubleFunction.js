// const hummus = function(factor){
//     const ingredient = function(amount, unit, name){
//         let ingredientAmount = amount * factor;
//         if(ingredientAmount > 1){
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1,"can", "checkpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespooon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// };

// let launchMissiles = function(){
//     missileSystem.launch("now");
// };
// var safeMode = null;
// if(sfeMode){
//     launchMissiles = function(){/* do nothing */};
// }

// function square(x){
//     return x * x;
// }
// console.log(square(2))

// console.log("The future says:", future());
// function future(){
//     return "You will become a greate wealthy business man in three years time";
// }
// console.log(future("You will become a greate wealthy business man in three years time"))



// Arrow functions below.

// const power = (base, exponent)=>{
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2,4));

// const square1 = (x) =>{
//     return x * x;
// };
// const square2 = x => x * x;
// console.log(square1(4));
// console.log(square2(2));

// function minus (a, b){
//     if(b === undefined)
//         return -a;
//         else return a - b;
//     }
//     console.log(minus(10));
//     console.log(minus(10,5));
// Recursive function example below;

// function power(base, exponent){
//     if(exponent == 0){
//         return 1;
//     }else{
//         return base * power(base, exponent -1);
//     }
// }
// console.log(power(2,3));

function findSolution(target){
    function find(current, history){
        if(current == target){
            return history;
        }else if(current > target){
            return null;
        }else{
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));

