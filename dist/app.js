"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const laboratorios_1 = __importDefault(require("./routes/laboratorios"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const carrera_1 = __importDefault(require("./routes/carrera"));
const equipos_1 = __importDefault(require("./routes/equipos"));
const practicas_1 = __importDefault(require("./routes/practicas"));
const materia_1 = __importDefault(require("./routes/materia"));
const rol_1 = __importDefault(require("./routes/rol"));
const grupos_1 = __importDefault(require("./routes/grupos"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
//importo la ruta que cree para login y la llamo rutaLogin
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/laboratorios", laboratorios_1.default);
app.use("/usuarios", usuarios_1.default);
//le indico a mi app que cree un nuevo endpoint que será /login y funcionará con las rutas definidas en rutaLogin
app.use("/login", auth_1.default);
app.use("/carreras", carrera_1.default);
app.use("/equipos", equipos_1.default);
app.use("/practicas", practicas_1.default);
app.use("/materias", materia_1.default);
app.use("/rol", rol_1.default);
app.use("/grupo", grupos_1.default);
/**
 * C Create
 * R Read
 * U Update
 * D Delete
 */
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
