import fs, { readFileSync, writeFileSync, readdirSync, mkdirSync} from 'node:fs';// recordar importar

// esta es una funcion arrow
// este tipo de funcion se almacena en la variable "read", puede recibir parametros
// y contiene un return implicito.
const read=()=>{
    try {
        const data = readFileSync("package.json","utf-8") // archivo y como quiero que me lo devuelva
        console.log(JSON.parse(data))
    } catch (error) {
        console.log(error)
    }
}

//fs.writeFileSync('archivo.txt', 'Estos son los datos que quiero escribir en el archivo.')
const write = () =>{
    try {
        const data = writeFileSync("prueba.txt","todo piola\n")
    } catch (error) {
        const errorStr = JSON.stringify(error);
        writeFileSync("error.txt",errorStr)// creo que es la forma de manejar errores 
    }
}

// funcion con promesas, recordar el async y el await. Esta funcion es asincronica.
//a función appendFile toma como argumentos el nombre del archivo al que deseas agregar datos y 
//el contenido que deseas agregar.
//Puede ser una cadena de texto o un objeto que pueda ser convertido a texto.
const appendFileAsync = async () =>{
    try {
        await fs.promises.appendFile("prueba.txt","si, todo tranqui\n") // devuelve una promesa.
    } catch (error) {
        const errorStr = JSON.stringify(error);
        await fs.promises.appendFile("error.txt",errorStr) // agrega el error a dicho txt, si existe lo crea
        //writeFileSync("Error.txt",errorStr)// creo que es la forma de manejar errores 
    }
}

// devuelve un array con las carpetas que hay en dicha ruta.
const readdirDirectory = () =>{
    try {
        const directorio = fs.readdirSync("C:\\Users\\Nicolas\\Desktop")
        console.log(directorio)
    } catch (error) {
        const errorStr = JSON.stringify(error);
        writeFileSync("error.txt",errorStr) // forma de crear un txt con errores
        console.log("error")
    }
}
//read()
//write()
//appendFileAsync()
//readdirDirectory()

// funciones con callback- misma funcion readdirSync(readdirDirectory)
/*fs.readdir lee el contenido del directorio de manera asíncrona.
Se proporciona un callback que se ejecutará una vez que la operación de lectura del directorio se haya completado.
El callback toma dos parámetros: error 
(si se produce algún error) y data (los nombres de los archivos y subdirectorios en el directorio).
*/

const readdirDirectoryV2 = () => {
    fs.readdir("./",(error,data)=>{
        if(error){
            console,log(error)
        } else {
            console.log(data)
        }
    })
}

//readdirDirectoryV2()

// creo un directorio con fs.mkdirSync(), este metodo funciono, me creo una carpeta en el escritorio.
// si la carpeta ya existe, no la crea

const createdDirectory = () => {
    try{
        const newDirectory = fs.mkdirSync("C:\\Users\\Nicolas\\Desktop\\newPage")
        //console.log(newDirectory) undefined, lo mismo si lo parseo a JSON.stringity
    } catch (error){
        console.log("no se pudo crear el directorio.")
    }
   
}

//createdDirectory()