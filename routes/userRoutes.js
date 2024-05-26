import {Router}from "express" // desestructuracion.
import UserControllers from "../Controllers/UserControllers.js"

const userRoutes = Router()

const userControllers = new UserControllers()


// CRUD (CREATE, READ, UPDATE, DELETE)
// con el get se hace un read
userRoutes.get("/",userControllers.getAllUser) // esto ahora es un callback

userRoutes.get("/:id",(req,res,next)=>{
 
})

// crear un usuario en particular
userRoutes.post("/",(req,res)=>{

})

// actualizar el usuario via ID
userRoutes.put("/:id",(req,res)=>{
    
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