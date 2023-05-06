"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = require("../models/usuario");
/**
 * Función asíncrona que permite generar tokens basados en contraseñas
 * Esta función se encargará de generar un token para el usuario
 * @param req es el objeto con la petición del usuario, debe contener email, password
 * @param res es el objeto con el que responderemos
 * @returns imprime el token en caso de que las credenciales sean correctas
 */
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //1. obtenemos el email y el password que envían en el cuerpo de la petición
        const { email, password } = req.body;
        //2. consultamos el usuario basándonos en su email
        const usuario = yield usuario_1.Usuario.findOne({
            where: { email }
        });
        //3. Si no existe el usuario, lo indicamos en la respuesta
        if (!usuario) {
            return res.status(401).json({ message: "el usuario no existe" });
        }
        //4. Si el usuario existe, verificamos que la contraseña que nos mandan sea la misma que está en la bd
        const passValida = yield bcrypt_1.default.compareSync(password, usuario.password); //bcrypt verificará que la contraseña en texto plano sea la misma que la codificada
        //5. si la password no es la misma, se lo decimos al usuario que realizó la petición
        if (!passValida) {
            return res.status(401).json({ message: "La contraseña es incorrecta" });
        }
        //6. Si la contraseña es correcta generamos un token mediante jwt, ponemos un payload (el código del usuario)
        //establecemos con qué clave se hasheará
        //establecemos el tiempo en el que expirará
        const token = jsonwebtoken_1.default.sign({ codigo: usuario.codigo }, "clave-para.encriptar", { expiresIn: '2h' });
        //6. Retornamos el token en json
        res.json({ token });
    });
}
exports.login = login;
