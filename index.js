import express from "express"
import routes from "./routes/routes.js";
import morgan from "morgan"
import connection from "./connection/connecction.js";
import { SERVER_PORT } from "./config/config.js";


const app = express();

app.use(express.urlencoded({extended:true}))// (1er) este middleware es importante, siempre debe estar
// es el primer middleware que debe ser ejecutado ya que recibe todas las peticiones
// y va a estar accediedno al body, y lo devolvera en forma de objeto.


// este middleware se utiliza para manejar JSON
app.use(express.json()) 

app.use(morgan("tiny"))

app.use(routes)

app.use((req,res,next)=>{
    res.status(404).send({success:false,message:"not found"})
})

// este metodo levanta los modelos
await connection.sync({alter:true}); // esto para produccion nunca
// force: crea la tabla y borra la anterioir
// alter: no crea una nueva, sino que interactua con la misma
app.listen(SERVER_PORT,()=>{
    console.log("server_ok_express:)")
})

