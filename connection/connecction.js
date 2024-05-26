import mysql from 'mysql2/promise';

const connection = async() =>{
    try {
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'talleriipruebabd',
            port:'3306' //este puerto es el que viene por defecto
        })
        const itsOk= await conn.connect()
        if(itsOk){
            console.log("conexion correcta")
            return conn
        } else {
            console.log("no")
        }
        
    }catch(error){
        console.log(error)
    }
}

const db = await connection() // esta es la funcion de arriba 

export default db;