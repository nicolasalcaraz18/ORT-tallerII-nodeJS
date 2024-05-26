import db from "../connection/connecction.js"
class UserControllers{

async getAllUser (req,res) {
    try {
        const query = "SELECT id, name, mail FROM user"
        const [result] = await db.query(query)

        res.status(204).send({success:true,message:result[0]})
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

}
export default UserControllers;