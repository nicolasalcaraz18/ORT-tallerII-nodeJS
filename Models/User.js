import { DataTypes,Model } from "sequelize";
import connection from "../connection/connecction.js";
import bcrypt from "bcrypt"
class User extends Model{
    comparePass = async (password) =>{
        const compare = await bcrypt.compare(password,this.password)
        return compare
    }// entiendo que compara la contraseña llegada pr párametro con la propia
   
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
    //2do objeto: conexion y model name, nombre de la tabla, si bien lo puse en singular "user", este 
    // me lo creara en plural "Users" en la tabla 
})

User.beforeCreate(async (user) => {
    const gentSalt=await bcrypt.genSalt()// siempre se utiliza el 10 -- por defecto
    const hashedPassword = await bcrypt.hash(user.password,gentSalt);
    user.password = hashedPassword;
  });


export default User;