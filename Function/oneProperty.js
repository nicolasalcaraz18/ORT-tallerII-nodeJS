function oneProperty(array,str){

    const property = array.map((elemento) =>({[str]:elemento[str]}))
    console.log(property)
}

module.exports=oneProperty