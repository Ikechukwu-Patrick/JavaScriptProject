let expenses = {"groceries": 150, "dinning out": 100, "transportation": 50, "entertainment": 80};
let totalAmount = 0;
for(let category in expenses){
    totalAmount =+ expenses[category]; 

}
console.log("The total amount of categories spent is: $" + totalAmount);