import express from "express"
import moment from 'moment'
import url from "url"
import path from "path"

const __fileName = url.fileURLToPath(import.meta.url)// saca el file//
console.log(__fileName)
const __dirName=path.dirname(__fileName)
console.log(__dirName) // saca el index.js

const app = express()
/*
app.get("/archivo",(req,res)=>{
    res.sendFile(path.join(__dirName,"public","index.html"))
})*/

// de forma dinamica para 1 
/*
app.get("/archivo/:file",(req,res)=>{
    const file= req.params.file
    res.sendFile(path.join(__dirName,"public","index.html"))
})
*/
// de forma dinamica para varios archivos
app.get("/archivo/:file",(req,res)=>{
    const {file}= req.params
    res.sendFile(path.join(__dirName,"public",`${file}.html`))
})

/*
app.get("/",(req,res)=>{
    res.send("GET: desde el servidor express")
})

app.post("/data",(req,res)=>{
    res.send("POST: desde el servidor express")
})
*/
// middleware es express.static, la forma de utilizarlos es atraves del metodo "use"
app.use("/archivo", express.static("public"))

// ejercicio 1, devolver fecha en la url fecha
app.get("/fecha",(req,res)=>{
    res.send(moment().subtract(10, 'days').calendar())
})

// ejercicio 2, sumar cada vez que se entra a la url especificada en el parametro.
let count = 0;
app.get("/count",(req,res)=>{
    count++;
    res.send({count})
})

app.listen(8080,()=>{
    console.log("server_ok_express:)")
})

/*
Get: pedir información
Post: enviar información. (enviar comentarios)
Put: editar información. (editar un comentario por ejemplo de Facebook).
Patch: editar información. (solo se edita un atributo)
Delete: borrar un ítem (posteo)
*/
