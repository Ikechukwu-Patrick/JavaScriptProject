var obj1 = {
    name: "nigria",
    population: 200,
    temp: 37,
    currency: "Nigeria",
}

var obj2 = {
    name: "UK",
    population: 500,
    temp: 10,
    currency: "Pounds",

}

let obj3 = {
    name: "ghana",
    population: 110,
    temp: 30,
    currency: "cedi",
}

let obj4 = {
    name: "USA",
    population: 1987,
    temp: 8,
    currency: "dollar",
}
let obj5 = {
    name: "cuba",
    population: 78,
    temp: 67,
    currency: "cuba dollar",
}
let obj6 = {
    name: "nigeria",
    population: 1234,
    temp: 90,
    currency: "niger dollar",
}
let obj7 = {
    name: "congo",
    population: 143,
    temp: 87,
    currency: "congo pounds",
}
let obj8 = {
    name: "spain",
    population: 76,
    temp: 76,
    currency: "pounds",
}
let obj9 = {
    name: "singapore",
    population: 788,
    temp: 90,
    currency: "singapore currency"
}

let country = [[null, obj1,obj2,obj3], [obj4,obj5,obj6,null],[obj7,null,obj8,obj9]]
let totalPopulation = 0

for(const key of country){
    for(const value in key){
        if((key[value]!= null)){
        totalPopulation += key[value].population
    }
}
}
console.log(totalPopulation)
