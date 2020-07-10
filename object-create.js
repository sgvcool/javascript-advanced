/* object create */
const person = Object.create(
    {
        calculateAge(){
            return new Date().getFullYear() - this.birthday
        }
    }, // прототим нашего обьекта
    {
        name: {
            value: 'Ted',
            enumerable: true,
            writable: true, // перезаписывать значение
            configurable: true // возможность удалять ключ - значение
        },
        birthday: {
            value: '1988',
            enumerable: false
        },
        age: {
            get(){
                return new Date().getFullYear() - this.birthday
            },
            set(value){
                console.log(value)
            }
        }

    }
)

for(let key in person){

    if(person.hasOwnProperty(key)){
        console.log(`${key} : ${person[key]}`)
    }

}