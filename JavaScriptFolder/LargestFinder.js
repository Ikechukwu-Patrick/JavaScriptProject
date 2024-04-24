function range(array){
    let largest = array[0];
    let lowest = array[0];
    for(let counter = 0; counter < array.length; counter++){
        if(array[counter] > largest){
            largest = array[counter];
        }
        if(array[counter] < lowest){
            lowest = array[counter];
        }
    }
    return [largest - lowest];
}
arrayNumber = [1,2,3,5,6]
console.log(range(arrayNumber))