// Wrapper
const withDefaultValue = (target, defaultValue = 0) =>{
    return new Proxy(target,{
        get: (obj,prop) => (prop in obj ? obj[prop] : defaultValue)
})
}

const position  = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
)

//Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0) // void 0 = undefined
})
}

const data = withHiddenProps({
    name: 'Tom',
    age: 25,
    _uid: '123679023'
})




//Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [args]){
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args),{
            get(arr,prop){
                switch(prop){
                    case 'push':
                        return item =>{
                        index[item.id] = item
                        arr[prop].call(arr,item)
                    }
                    case 'findById': return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})


const users = new IndexedArray([
    {id: 1, name: 'Tom', job: 'Fullstack', age: 25},
    {id: 2, name: 'Elena', job: 'Student', age: 22},
    {id: 3, name: 'Victor', job: 'Backend', age: 23},
    {id: 4, name: 'Vasylisa', job: 'Teacher', age: 24},
])

//console.log(users)

users.push({id: 11, name: 'Sergey'})
console.log(users.findById(11))
