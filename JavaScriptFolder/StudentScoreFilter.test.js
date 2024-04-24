const testScore  = require("./StudentScoreFilter.js");
test("Test function That can scores greater than equal to 70",()=>{
    let array = [95,78,85,60,45,92,56,19,40];   
    let answer = testScore(array);
    expect(answer).toBe(answer);
})