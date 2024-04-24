const calculateTotalExpenses  = require("./CategoryExpenditures.js");
test("Test function That can calculate total category expenditures",()=>{
    let array = { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 };   
    let answer = calculateTotalExpenses(array);
    expect(answer).toBe(answer);
});