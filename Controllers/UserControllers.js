import {User, Role} from "../Models/models.js"; // recordar importar bien 
import {genToken, verifyToken} from "../utills/token.js"
class UserControllers{

async getAllUser (req,res) {
    try {
        const users = await User.findAll({attributes:["id","name","password","mail"],
            include:[{model:Role,attributes:["name"]}]
        })
        res.status(200).send({success:true,users}) 
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}
// funciona es mejor el findOne creo.
async getById(req,res){
    try {
        const {id}= req.params;
        const user = await User.findByPk(id)
        
        res.status(200).send({success:true,message:user})   
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}
//POST
async createUser(req,res){
    try {
        const {name,password,mail, RoleId} = req.body;// forma de filtrar
        await User.create({name,password,mail,RoleId})// en este punto se guarda en la base de datos
        res.status(200).send({success:true,message:"usuario creado con exito"});
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
}

//PUT
async updateUser(req,res){
    try {
        const {id} = req.params;
        const {name,password,mail,RoleId} = req.body;// forma de filtrar
        
        await User.update({name,password,mail,RoleId},{where:{id}})
        res.status(200).send({success:true,message:"usuario modificado correctamente"});
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

async deleteUser(req,res){
    try {
        const {id}=req.params;
        //await User.delete(id) 
        await User.destroy({where:{id} // forma correcta
        }) 
        res.status(200).send({success:true,message:"Usuario borrado"}) 
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

login = async (req, res) =>{
    try {
        const {mail, password} = req.body
        const data = await User.findOne({where:{mail}})
        if(!data){
            throw new Error("mail incorrecto")
        }
        const comparePass = await data.comparePass(password)
        if(comparePass){
            const payload = {
                id:data.id,
                name: data.name
            }
            const token = genToken(payload)
            console.log("tu token es: " + token)
            res.cookie("token",token)
            res.status(200).send({success:true,message:"Loggin Correct"}) 
        } else {
            throw new Error("contraseña incorrecta")
        }
    } catch (error) {
        res.status(400).send({success:false,message:error.message})
    }
   
    }
// no entiendo pq no usa el await......
    me = async(req,res) =>{
        try {
            const {user} = req
            res.status(200).send({success:true,message:user}) 
        } catch (error) {
            res.status(400).send({success:false,message:error.message})
        }
    }

}
export default UserControllers;