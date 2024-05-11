function uno(){
    console.log("Uno")
}

function dos(){
    return new Promise((resolve,reject) => {
        resolve("promesa positiva")
        //reject("promesa negativa")
    })
}

function tres(){
    console.log("tres")
}

function cuatro(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
}

//uno()

//dos().then(data=>console.log(data)).catch(error=>console.log(error))

// se ejecuta una despues de la otra
// setTimeout() es una funcion que recibe como primer parametro un callback
// y como segunado un timeout
/*
setTimeout(() => {
    console.log("Me ejecuto tarde (?)")
},1000) // esto es una funcion asincronica.

*/

//tres()
// ni idea que hace esto. solo se que con then manejo promesas
// y con el catch catcheo errores
//cuatro().then((data) => data.json()).then((data) => console.log(data)).catch((error)=>console.log(error)).finally(()=>console.log("final de la promesa"))

// sintaxis async y await
// todo lo que iba en el then, ahora ira al try, en el catch seguiran yendo los errores.
async function cinco(){
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const jsonData= await data.json() // vuelvo a utilizar la palabra await, para que espere la información.
        console.log(jsonData)
        // return jsonData devuelvo otra promesa, que tendrá que ser tratada con "then"
    }catch(error){
        console.log(error)
    }
    
}
cinco()

