import User from "../Models/User.js"
class UserControllers{

async getAllUser (req,res) {
    try {
        const users = await User.findAll()
        res.status(200).send({success:true,users}) 
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}
// funciona
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
        const query = "UPDATE user SET name=?,password=?,mail=? WHERE id=?";
        const [result] = await db.query(query,[name,password,mail,id])
        res.status(200).send({success:true,message:"usuario modificado correctamente"});
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

async deleteUser(req,res){
    try {
        const {id}=req.params;
        await User.delete(id) 
        res.status(200).send({success:true,message:"Usuario borrado"}) 
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

}
export default UserControllers;