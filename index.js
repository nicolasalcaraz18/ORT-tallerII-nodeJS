//const sayHello=require("./Function/sayHello")
//sayHello()

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




