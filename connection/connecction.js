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

        return conn
        
    }catch(error){
        console.log(error)
    }
}

const db = await connection() // esta es la funcion de arriba 
export default db;