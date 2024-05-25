import {Router}from "express" // desestructuracion.

const productRoutes = Router()

// CRUD (CREATE, READ, UPDATE, DELETE)
// con el get se hace un read
productRoutes.get("/",(req,res)=>{
    res.send("get all products")
})

productRoutes.get("/:id",(req,res, next)=>{
    res.send("get product by id")
    next()
})

// crear un producto en particular
productRoutes.post("/",(req,res)=>{
    res.send("create product")
})

// actualizar el producto via ID
productRoutes.put("/:id",(req,res)=>{
    res.send("update product by id")
})

// borrar el producto via ID
productRoutes.delete("/:id",(req,res)=>{
    res.send("delete product by id")
})

export default productRoutes;
/*
Get: pedir información
Post: enviar información. (enviar comentarios)
Put: editar información. (editar un comentario por ejemplo de Facebook).
Patch: editar información. (solo se edita un atributo)
Delete: borrar un ítem (posteo)
*/