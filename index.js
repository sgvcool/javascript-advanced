/*
 function* numberGen(n = 10){
    for(let i = 0; i < n; i++){
        yield i
    }
 }

 const num  = numberGen(7)

 console.log(num.next())
 console.log(num.next())
 console.log(num.next())
 console.log(num.next())*/

/*const iterator = {
    gen(n = 10) {
        let i = 0

        return {
            next(){
                if(i < n) {
                    return {value: i++, done: false}
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}*/

/*const itg = iterator.gen()

console.log(itg.next())
console.log(itg.next())
console.log(itg.next())
console.log(itg.next())*/


/*for(let k of 'Hello'){
    console.log(k)
}*/

function* iter(n = 10){
    for(let i = 0; i < n; i++){
        yield i
    }
}

for(let k of iter(25)){
    console.log(k)
}