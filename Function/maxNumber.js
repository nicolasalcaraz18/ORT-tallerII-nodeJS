/* con logica propia
function maxNumber(param){
    let num=0;
    let max=0;

    for(let i = 0; i < param.length; i++ ){
        num = param[i];
        if(num > max){
            max = num;
        }
    }
    return max;
}
*/
// version del profe, utilizando ya un metodo.
function maxNumber(array){
    const maxNumber = Math.max(...array);
    console.log(maxNumber)
}

module.exports = maxNumber