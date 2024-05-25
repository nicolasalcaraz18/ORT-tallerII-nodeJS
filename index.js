import express from "express"
import routes from "./routes/routes.js";
//import { myLogger } from "./middlewares/myLogger.js"; //desestructurado
import morgan from "morgan"

const app = express();

app.use(express.urlencoded({extended:true}))// (1er) este middleware es importante, siempre debe estar
// urlencoded lo que hace es enviar informacion (POST)
// es el primer middleware que debe ser ejecutado ya que recibe todas las peticiones
// y va a estar accediedno al body, y lo devolvera en forma de objeto.

// este middleware se utiliza para manejar JSON
app.use(express.json()) // (2do) middleware importante 

//app.use(myLogger)// de esta menera esta a nivel de aplicacion "app"
//app.use(myLogger,routes) // a nivel de la aplicacion y de routes
app.use(morgan("tiny"))

app.use(routes)

// middleware para catchear errores, si abria otro middleware,ejecutaria el next()
app.use((req,res,next)=>{
    res.status(404).send({success:false,message:"not found"})
})

app.listen(8080,()=>{
    console.log("server_ok_express:)")
})

