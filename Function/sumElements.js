/* logica propia
function sumElements(array){
    let suma=0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    console.log(suma)
}
*/
// version del profe. el mmetodo "reduce()" puede devover varias cosas. Recibe un callback y un inicio de dicha funcion.
// value por defecto es el valor u objeto que este ultimo en el  array
// acumulador es el  primer valor  u objeto que este en el array
// index devuelve el tamaño de la lista (un entero)
// array devuelve lo que intermante tiene.
function sumElements(array){
    const sum = array.reduce((acumulador,value)=>acumulador+value)
    console.log(sum)
}
module.exports=sumElements