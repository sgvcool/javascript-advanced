const number = 42

//console.log(localStorage.getItem('numb'))
localStorage.setItem('number',number.toString())
localStorage.setItem('number1',number.toString())
localStorage.setItem('number2',number.toString())

console.log(localStorage.getItem('number'))

localStorage.removeItem('number')
console.log(localStorage.getItem('number'))

//localStorage.clear()


// obg add to localStorage
const obj = {
    name: 'Max',
    age: 20
}

localStorage.setItem('person', JSON.stringify(obj))
//console.log(localStorage.getItem('person'))
const raw = JSON.parse(localStorage.getItem('person'))

console.log(raw.name)