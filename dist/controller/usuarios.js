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
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurarUsuario = exports.eliminarUsuario = exports.obtenerInfoCompleta = exports.actualizarUsuario = exports.listarUsuarios = exports.crearUsuario = void 0;
const usuario_1 = require("../models/usuario");
const laboratorio_1 = require("../models/laboratorio");
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var usuario = yield usuario_1.Usuario.create(Object.assign({}, req.body));
    return res.status(200).json({ message: "Usuario creado", data: usuario });
});
exports.crearUsuario = crearUsuario;
const listarUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var usuarios = yield usuario_1.Usuario.findAll({
        attributes: { exclude: ["password"] }
    });
    return res.status(200).json({ message: "Usuarios encontrados: " + usuarios.length, data: usuarios });
});
exports.listarUsuarios = listarUsuarios;
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    var usuario = yield usuario_1.Usuario.update(Object.assign({}, req.body), { where: { codigo: codigo } });
    const usuarioActualizado = yield usuario_1.Usuario.findByPk(codigo);
    return res.status(200).json({ message: "Usuario actualizado", data: usuarioActualizado });
});
exports.actualizarUsuario = actualizarUsuario;
const obtenerInfoCompleta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    var usuario = yield usuario_1.Usuario.findByPk(codigo, {
        include: laboratorio_1.Laboratorio
    });
    return res.status(200).json({ message: "Usuario encontrado con toda su info", data: usuario });
});
exports.obtenerInfoCompleta = obtenerInfoCompleta;
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const usuarioEliminado = yield usuario_1.Usuario.findByPk(codigo);
    yield usuario_1.Usuario.destroy({ where: { codigo } });
    return res.status(200).json({ message: "Usuario eliminado", data: usuarioEliminado });
});
exports.eliminarUsuario = eliminarUsuario;
const restaurarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const usuarioaRestaurar = yield usuario_1.Usuario.findByPk(codigo, { paranoid: false });
    yield (usuarioaRestaurar === null || usuarioaRestaurar === void 0 ? void 0 : usuarioaRestaurar.restore());
    return res.status(200).json({ message: "Se restauró un usuario", data: usuarioaRestaurar });
});
exports.restaurarUsuario = restaurarUsuario;
