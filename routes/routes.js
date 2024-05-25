import {Router} from "express"
import userRoutes from "./userRoutes.js"
import productRoutes from "./productRoutes.js"
//import { myLogger } from "../middlewares/myLogger.js"

const routes = Router()
////routes.use(myLogger); aca afecta a userRutes y producRutes
routes.use("/user",userRoutes);
//routes.use(myLogger);// aca afecta nada mas a producto
routes.use("/product",productRoutes);
// tambie se puede pasar por parametro, por si quiero que
// afecte a una en particular, Ejemplo:
//routes.use("/product",myLogger,productRoutes); En este ejemplo solo afectaria a productos

export default routes
