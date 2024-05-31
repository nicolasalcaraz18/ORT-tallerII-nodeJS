import User from "../Models/User.js"; // recordar importar bien 
class UserControllers{

async getAllUser (req,res) {
    try {
        const users = await User.findAll({attributes:["id","name","password","mail"]})
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
        const {name,password,mail} = req.body;// forma de filtrar
        await User.create({name,password,mail})// en este punto se guarda en la base de datos
        res.status(200).send({success:true,message:"usuario creado con exito"});
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

//PUT
async updateUser(req,res){
    try {
        const {id} = req.params;
        const {name,password,mail} = req.body;// forma de filtrar
        
        const result = await User.update({name,password,mail},{where:{id}})
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

}
export default UserControllers;