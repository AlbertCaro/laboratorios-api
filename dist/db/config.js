"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const laboratorio_1 = require("../models/laboratorio");
const usuario_1 = require("../models/usuario");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "mariadb",
    username: "root",
    password: "password",
    database: "reservas",
    logging: true,
    port: 3306,
    models: [usuario_1.Usuario, laboratorio_1.Laboratorio],
});
exports.default = connection;
