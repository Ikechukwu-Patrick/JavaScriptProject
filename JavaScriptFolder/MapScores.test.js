const mapScores  = require("./MapScores.js");
test("Test function That can  increase scores by 5 ",()=>{
    let array = [85,92,78,88,95];   
    let answer = mapScores(array);
    expect(answer).toBe(answer);
});