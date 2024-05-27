import { DataTypes,Model, STRING } from "sequelize";
import connection from "../connection/connecction.js";

class User extends Model{

}
// por default crea el ID
User.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    //1er objeto: campos de mi tabla
},{
    sequelize:connection,
    modelName:"User"
    //2do objeto: conexion y model name, nombre de la tabla
})

export default User;