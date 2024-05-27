import db from "../connection/connecction.js"
class UserControllers{

async getAllUser (req,res) {
    try {
        const query = "SELECT id, name, mail FROM user"
        const [result] = await db.query(query)

        res.status(200).send({success:true,message:result}) // el status estabe en 204, iba en 200. que manera de putear
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}
// este lo hice solo y sin ayuda de internet o chatGpt, como todo macho
async getById(req,res){
    try {
        const {id}= req.params;
        const query = "SELECT id,name,mail FROM user WHERE id=?"
        const [result] = await db.query(query,id)
        res.status(200).send({success:true,message:result})
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}
//POST
async createUser(req,res){
    try {
        const {name,password,mail} = req.body;// forma de filtrar
        const query = "INSERT INTO user (name, password,mail) VALUES(?,?,?)";
        const [result] = await db.query(query,[name,password,mail])
        res.status(200).send({success:true,message:result});

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
        const query = "DELETE FROM user WHERE id=?"
        const [result] = await db.query(query,[id])
        if(result.affectedRows === 0){
            res.status(404).send({ success: false, message: "Usuario no encontrado" });
        } else{
            res.status(200).send({success:true,message:"Usuario borrado"})
        }
        
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

}
export default UserControllers;