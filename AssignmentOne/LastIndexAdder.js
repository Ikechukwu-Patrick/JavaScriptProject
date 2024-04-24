function functionThatIncreaseLastIndexBy1(numbers) {
    let lastIndex = numbers.length - 1;
    numbers[lastIndex] = numbers[lastIndex] + 1;
    return numbers;

}
console.log(functionThatIncreaseLastIndexBy1([5,2,3,1,2]));
module.exports = (functionThatIncreaseLastIndexBy1);