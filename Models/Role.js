import { DataTypes,Model, STRING } from "sequelize";
import connection from "../connection/connecction.js";

class Role extends Model{

}
// por default crea el ID
Role.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    //1er objeto: campos de mi tabla
},{
    sequelize:connection,
    modelName:"Role"
    //2do objeto: conexion y model name, nombre de la tabla, si bien lo puse en singular "user", este 
    // me lo creara en plural "Users" en la tabla 
})

export default Role;