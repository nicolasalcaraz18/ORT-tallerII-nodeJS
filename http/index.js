import http from "node:http"
/*
Get: pedir información
Post: enviar información. (enviar comentarios)
Put: editar información. (editar un comentario por ejemplo de Facebook).
Patch: editar información. (solo se edita un atributo)
Delete: borrar un ítem (posteo)
*/

// crea el servidor y lo pone a la escucha
// request = peticion; responsive == respuesta
const app = http.createServer((req,res)=>{
    //console.log(req)
    res.end("hola_desde el servidor")
})

// pone a la escucha. Puerto 8080
app.listen(8080,()=>{
    console.log("server_ok")
})