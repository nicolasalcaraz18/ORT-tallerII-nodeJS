import { verifyToken } from "../utills/token.js"

export const validateLogin = async (req,res,next) => {
    try {
        const {token} = req.cookies
        if(!token)throw new Error("Token inexistente")
        const {payload} = verifyToken(token)
        req.user = payload
        next()    
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}