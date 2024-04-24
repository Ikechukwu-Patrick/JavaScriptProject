const squareListOfNumbers  = require("./StudentScoreFilter.js");
test("Test function That can scores greater than equal to 70",()=>{
    let array = [2,4,6,8,10];   
    let answer = squareListOfNumbers(array);
    expect(answer).toBe(answer);
});