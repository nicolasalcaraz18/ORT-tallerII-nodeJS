function sayHello(){
    console.log("hello, como estás")
}

//module.exports = sayHello // ComonJS(la forma nativa de exportar de node)
//para exportar dos cosas: 
function sayHello(param){
    console.log("hello, como estás " + param)
}
const nom="nicuRr"
module.exports = {sayHello, nom}; // el module exports solo puede exportar 1 sola cosa, entonces esto esta metido detro 
                                    // de un paquete