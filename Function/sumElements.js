/* logica propia
function sumElements(array){
    let suma=0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    console.log(suma)
}
*/
// version del profe. el mmetodo "reduce()" puede devover varias cosas.
function sumElements(array){
    const sum = array.reduce((acumulador,value)=>acumulador+value)
    console.log(sum)
}
module.exports=sumElements