import express from "express"
import routes from "./routes/routes.js";
import morgan from "morgan"
import connection from "./connection/connecction.js";

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
await connection.sync({force:true}); // esto para produccion nunca

app.listen(8080,()=>{
    console.log("server_ok_express:)")
})

