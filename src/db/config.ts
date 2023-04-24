import {Sequelize} from "sequelize-typescript";
import { Laboratorio } from "../models/laboratorio";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "hola123",
    database: "reservas",
    logging: false,
    models:[Laboratorio],
});

export default connection;