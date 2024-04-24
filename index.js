//const sayHello=require("./Function/sayHello")
//sayHello()
/*
const{sayHello,nom}=require("./Function/sayHello")
console.log(nom)
sayHello(nom)

const dataUsuario={
    nombre:"Juan",
    edad:44,
}

//const nombre=dataUsuario.nombre
//const edad=dataUsuario.edad
// esto se lo conoce como "desestructuracion", se utiliza mucho para los formularios.
const {nombre, edad} = dataUsuario
console.log(nombre)
console.log(edad)

*/
// ejercicio 1
//--------------------------------IMPORTACIONES SIEMPRE ARRIBA DE TODO.
const maxNumber=require("./Function/maxNumber")
const sumElements=require("./Function/sumElements")
const abbrevName=require("./Function/abbrevName")

maxNumber([40,56,32,87,7,21,109])
//ejercicio 2
sumElements([45,45,90])
//ejercicio 3
abbrevName("Camilo Sesto")
