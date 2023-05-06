"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autorizar = void 0;
const jwt = __importStar(require("jsonwebtoken"));
/**
 * Exportamos una función que se llama autorizar que se ejecutará donde nosotros le digamos antes de la función
 * que debería ejecutar
 * @param req es la petición del usuario, puede o no traer un body
 * @param res es la respuesta que enviaremos cargada con el código del usuario que hace la petición, el código lo rescatamos
 * del payload del token
 * @param next es la siguiente función que se ejecutará si se cumple la condición en esta función intermedia
 * @returns la ejecución de la siguiente función si se valida el token
 */
function autorizar(req, res, next) {
    var _a;
    //obtenemos el token que viene dentro de los headers, en el que se llama authorization
    //como el token, tiene la forma: Bearer kljsajlkaskasjd, debemos dividir el valor por el espacio que separa al token de 
    //su tipo 
    /**
     * split, separa una cadena de texto por el separador que le digamos, en este caso un espacio, y genera un array
     * con dos valores ["Bearer", "lkjasjklsajklds"]
     * las posiciones son   0            1
     * como el token está en la posición 1, es el que rescato
     */
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    /**
     * si no existe el token en el header, se lo decimos al usuario que hizo la petición
     */
    if (!token) {
        return res.status(401).json({ message: "El token es necesario" });
    }
    /**
     * rescatamos el payload (datos) encriptados en el token, utilizando la clave que usamos para encriptarlos
     * de ese payload, obtenemos la propiedad código, que fue la que encriptamos y la añadimos al request
     * que hizo el usuario (enviar los datos del usuario que está solicitando el recurso)
     */
    try {
        const payload = jwt.verify(token, "clave-para.encriptar");
        req.usuarioCodigo = payload.codigo;
        //después, pedimos que continúe con la siguiente función que recibimos
        next();
    }
    catch (error) {
        //si existiera un error en el proceso, token inválido, corrupto, vencido, se lo decimos al usuario
        return res.status(401).json({ message: "Token inválido" });
    }
}
exports.autorizar = autorizar;
