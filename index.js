import { readFileSync, writeFileSync } from 'node:fs';


// esta es una funcion arrow
// este tipo de funcion se almacena en una variable "read", puedee recibir parametros
// y contiene un return implicito.
const read=()=>{
    try {
        const data = readFileSync("package.json","utf-8") // archivo y como quiero que me lo devuelva
        console.log(JSON.parse(data))
    } catch (error) {
        console.log(error)
    }
}

const write = () =>{
    try {
        const data = writeFileSync("prueba.txt",4)
    } catch (error) {
        const errorStr = JSON.stringify(error);
        writeFileSync("Error.txt",errorStr)// creo que es la forma de manejar errores 
    }
}

read()
write()


