import {Router}from "express" // desestructuracion.
//import { myLogger } from "../middlewares/myLogger.js"
import db from "../connection/connecction.js"

const userRoutes = Router()

//userRoutes.use(myLogger) // tambien se puede aplicar aca.

// CRUD (CREATE, READ, UPDATE, DELETE)
// con el get se hace un read
userRoutes.get("/",(req,res)=>{
    res.send("get all users")
})

userRoutes.get("/:id",(req,res,next)=>{
    console.log(req.query)
    const {name,age}= req.query//desestructuracion
    const {id} = req.params// pasar informacion atraves de parametros.
    res.send(`get user by id:${id}`)
})

// crear un usuario en particular
userRoutes.post("/",(req,res)=>{
    const {name, password} = req.body;
    console.log("manejando JSON " + name + " " + password)
    res.send(`create user name:${name} and password ${password}`)
})

// actualizar el usuario via ID
userRoutes.put("/:id",(req,res)=>{
    res.send("update user by id")
})

// borrar un usario via ID
userRoutes.delete("/:id",(req,res)=>{
    res.send("delete user by id")
})

export default userRoutes;
/*
Get: pedir información
Post: enviar información. (enviar comentarios)
Put: editar información. (editar un comentario por ejemplo de Facebook).
Patch: editar información. (solo se edita un atributo)
Delete: borrar un ítem (posteo)
*/