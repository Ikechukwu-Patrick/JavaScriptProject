function squareListOfNumbers(listOfNumbers){
    let newArray = [];
    for (let i = 0; i < listOfNumbers.length; i++){
        newArray.push(listOfNumbers[i] * listOfNumbers[i]);
    }
    return newArray;
}
console.log(squareListOfNumbers([2,4,6,8,10]));