import express from "express"
/*
Get: pedir información
Post: enviar información. (enviar comentarios)
Put: editar información. (editar un comentario por ejemplo de Facebook).
Patch: editar información. (solo se edita un atributo)
Delete: borrar un ítem (posteo)
*/
const app = express()

app.get("/",(req,res)=>{
    res.send("GET: desde el servidor express")
})

app.post("/data",(req,res)=>{
    res.send("POST: desde el servidor express")
})



app.listen(8080,()=>{
    console.log("server_ok_express:)")
})