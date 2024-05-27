import { Sequelize } from "sequelize";
// conectado con sequelize, aca se crea la conexion con la base de datos.
const connection = new Sequelize("talleriipruebabd","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default connection;