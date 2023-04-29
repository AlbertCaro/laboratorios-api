import {Sequelize} from "sequelize-typescript";
import { Laboratorio } from "../models/laboratorio";
import { Usuario } from "../models/usuario";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "hola123",
    database: "reservas",
    logging: true,
    models:[Usuario,Laboratorio],

});

export default connection;