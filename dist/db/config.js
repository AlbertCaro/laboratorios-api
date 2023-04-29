"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const laboratorio_1 = require("../models/laboratorio");
const usuario_1 = require("../models/usuario");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "hola123",
    database: "reservas",
    logging: true,
    models: [usuario_1.Usuario, laboratorio_1.Laboratorio],
});
exports.default = connection;
