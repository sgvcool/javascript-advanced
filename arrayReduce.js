const people = [
    {name: 'Tom', budget: 1800, age: 25},
    {name: 'Elena', budget: 2500, age: 22},
    {name: 'Victor', budget: 1300, age: 23},
    {name: 'Vasylisa', budget: 3800, age: 24},
    {name: 'Maks', budget: 3800, age: 16},
    {name: 'Anna', budget: 1200, age: 12},
]

// For
/*for(let i = 0; i < people.length; i++){
    console.log(people[i])
}*/

//for of
/*
for(let person of people){
    console.log(person)
}*/

//forEach
//people.forEach(person=> console.log(person))

//Map
/*
const newPeople = people.map(person => {
    //console.log(person)
    return person.name
})
console.log(newPeople)*/


//Filter
/*const adult = people.filter( person => {
    return person.age >=18
})
console.log(adult)*/

//Reduce
/*const sumBudget = people.reduce( (total,person) => {
    return total + person.budget
}, 0)
console.log(sumBudget)*/

//Find
/*const tom = people.find(person => person.name === 'Tom')
console.log(tom)*/

//Findindex
/*const index = people.findIndex(person => person.name === 'Victor')
console.log(index)*/



const amount = people
    .filter(person => person.budget > 2000)
.map( person => {
    return{
        info: `Person: ${person.name} age - ${person.age}`,
        budget: person.budget
    }
})
.reduce((total,person) => {
    return total + person.budget
},0)

console.log(amount)
