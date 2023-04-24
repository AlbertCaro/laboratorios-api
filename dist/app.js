"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const laboratorios_1 = __importDefault(require("./routes/laboratorios"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/laboratorios", laboratorios_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default.sync().then(() => {
    console.log("La base de datos funciona");
}).catch((err) => {
    console.log("Error", err);
});
app.listen(3000, () => {
    console.log("Server inciado en el puerto 3000");
});
