function abbrevName(str){
    /*const abbrev= str.split(" ")
    const iniciales=abbrev.reduce((ac,val) => ac+val[0] + ".","")
    const mayus=iniciales.toUpperCase()
    console.log(abbrev)
    console.log(iniciales)
    console.log(mayus)*/
    //const abbrev = str.split(" ").reduce((acu,val) => acu + val [0]+ ".","").toUpperCase()
    // ahora con map
    const abbrev = str.split(" ").map(val => val[0]).join(".").toUpperCase() // ahi queda mejor, hay que repasar arrow functions.
    console.log(abbrev)
}

module.exports=abbrevName