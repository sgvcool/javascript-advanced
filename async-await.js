const delay = (ms) => {
    return new Promise(

        /*function(resovle,reject){
           setTimeout(function () {
               resovle()
               console.log('delay resolve');
           }, ms)
        }*/

        resolve => setTimeout(() => resolve(), ms)
)
}
//delay(2000)

const url = 'https://jsonplaceholder.typicode.com/todos'

async function asyncFetchTodos(){
    console.log('Fetch todos started...')

    try{
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data: ', data)
    }catch(e){
        //console.log('ERR: ', e)
        console.error(e)
    }finally{
        console.log('Finally')
    }
}

asyncFetchTodos()