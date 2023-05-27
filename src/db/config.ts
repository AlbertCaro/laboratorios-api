import {Sequelize} from "sequelize-typescript";
import { Laboratorio } from "../models/laboratorio";
import { Usuario } from "../models/usuario";

const connection = new Sequelize({
    dialect: "mysql",
    host: "mariadb",
    username: "root",
    password: "password",
    database: "reservas",
    logging: true,
    port:3306,
    models:[Usuario,Laboratorio],

});

export default connection;
