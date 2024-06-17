import {Router}from "express" // desestructuracion. 
import UserControllers from "../Controllers/UserControllers.js"
import { validateLogin } from "../middlewares/validateLogin.js"

const userRoutes = Router()

const userControllers = new UserControllers()

// CRUD (CREATE, READ, UPDATE, DELETE)
// con el get se hace un read
userRoutes.get("/",userControllers.getAllUser) // esto ahora es un callback

userRoutes.get("/me",validateLogin,userControllers.me)

userRoutes.get("/:id",userControllers.getById)

// crear un usuario en particular
userRoutes.post("/",userControllers.createUser)

userRoutes.post("/login", userControllers.login)

// actualizar el usuario via ID
userRoutes.put("/:id",userControllers.updateUser)

// borrar un usario via ID
userRoutes.delete("/:id",userControllers.deleteUser)

export default userRoutes;
/*
Get: pedir información
Post: enviar información. (enviar comentarios)
Put: editar información. (editar un comentario por ejemplo de Facebook).
Patch: editar información. (solo se edita un atributo)
Delete: borrar un ítem (posteo)
*/