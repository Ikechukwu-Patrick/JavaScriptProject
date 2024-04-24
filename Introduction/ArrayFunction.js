//let number = [12,3,4,5,9,4,5];
// number.push(2)
// console.log(number)

// number.pop
// console.log(number)

// number.shift();
// console.log(number)

// number.unshift()
// console.log(number)


//console.log(number.slice())

//console.log(number.slice(1,3))
// console.log(number)
// console.log("After splice",number.splice(2))

// number.splice(2,0,2,3);
// console.log(number)

//let num = ["car",2000,"truck",500,"Bike",6500,]
//console.log(num)
//let nums = ["Scooter",1500]

// console.log(num + nums)

//data extraction below

// data = [
//     [200, 50, 300, 5],
//     [10, 25, 7, 100],
//     [25, 20, 70, 45],
//     [500, 170, 11, 35]
//   ];
  
//   console.log(data); 

//   data[1].pop()
//   console.log(data[1])

//how to use for loop below

// let user = {
//     firstName: "Dayo",
//     lastName: "Miriam",
//     age: "106",
//     sex: "female"
// }
// for(const key in user){
//     console.log(user[key]);

// }
// a lists of array
//  let array = [1,2,3,4,5,6]
// for(const index in array){
//     console.log(array[index])
// }
//for of loop
// for(const value of array){
//     console.log(value)
// }

  

// //How to define the data structure
// var data = [
//     [null, { name: String, population: Number, temperature: Number, currency: String }]
//     [{ name: String, population: Number, temperature: Number, currency: String }]
//     [{ name: String, population: Number, temperature: Number, currency: String }]
//     [{ name: String, population: "Number", temperature: "Number", currency: "String" } ]
// ]
  
  
//   var sampleInput = data[2][0];
  
//   console.log(sampleInput);

  //how to use forEach loop

  let array = [1,3,4,5,6]
  // array.forEach((num)=>{
  //   console.log(num * 2);
  // })
  let arr = []
  let answer = array.forEach((num)=>{arr.push(num * 2);})
  let answe = array.map((num)=> num % 2 == 1)


  