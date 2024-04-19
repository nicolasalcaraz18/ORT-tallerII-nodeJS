/*
tipos de datos en java script.
datos primitivos:
string, numbers, boolean, null y undefined, bigint, symbol

let str ="cadena";
console.log(typeof str)

let bool= false
console.log(typeof bool)

let num=123121414142443412412n // poniendole una n queda como un gran integer
console.log(typeof num)

let und =undefined // cuando no tiene ningun valor es indefinido.
console.log(typeof und) 

let sym=Symbol(23) //no se suele utilizar, genera datos unicos e irrepetibles
console.log(typeof sym)

let nl = null
console.log(typeof nl) //tipo de dato que pronto tendrá un valor

*/

/*
datos complejos/objetos

const obj={
    nombre:"camilo", // puede guardar coleccion de datos las cuales se pueden llamar a su key (obj)
    apellido:"ojeda",
}

console.log(typeof obj) // objeto

const arr=[1,"osval",{}, obj] //array que se maneja con indices, arranca con el indice 0 como en java.
console.log(typeof arr)// guarda distintos tipos de datos, a diferencia del array en java.
console.log(arr[3])

const date = Date()
console.log(typeof date) // a diferencia de crear una instancia(que devuelve un objeto), este me devuelve un string
console.log(date) // devuelve la hora exacta

*/
/*
    funciones.
    sueltas son funciones, pero si están dentro de un objeto pasan a ser metodos

function saludar(){ 
    console.log("dibu martinez")
}
saludar(),// invocando el metodo
console.log(typeof saludar) // es de tipo function
*/
/*
arrow funtion(funciones flechas)
forma simplificada de escribir funciones en una sola linea
tienen un return implicito.
*/
const suma=(x,y)=> x+y; // se puede declarar con llaves, como si fuese un metodo
console.log(typeof suma)
console.log(suma(5,4))
// otra manera de escribir
const suma2 = (x,y) =>{
    return x+y;
};

