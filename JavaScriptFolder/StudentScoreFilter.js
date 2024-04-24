function testScore(numbers){
    let results = numbers.filter(function(number){
        return number >= 70;
    });
    return results;
}
console.log(testScore([95,78,85,60,45,92,56,19,40]));
module.exports = (testScore);