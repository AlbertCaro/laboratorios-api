import express from "express";
import rutasLaboratorio from "./routes/laboratorios";
import rutasUsuarios from "./routes/usuarios";
import connection from "./db/config";
import {json, urlencoded} from "body-parser";

const app = express();

app.use(json());
app.use(urlencoded({extended:true}));

app.use("/laboratorios",rutasLaboratorio);
app.use("/usuarios",rutasUsuarios);
/**
 * C Create
 * R Read
 * U Update
 * D Delete
 */
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    )=>{
        res.status(500).json({message: err.message});
    }
)

connection.sync().then(()=>{
    console.log("La base de datos funciona");
}).catch((err)=>{
    console.log("Error",err);
});

app.listen(3000, ()=>{
    console.log("Server inciado en el puerto 3000");
});