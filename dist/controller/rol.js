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
exports.actualizarRol = exports.getRolPorId = exports.obtenerRolesPorNombre = exports.obtenerTodosLosRoles = exports.borrarRol = exports.crearRol = void 0;
const rol_1 = require("../models/rol");
const crearRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var rol = yield rol_1.Rol.create({
        nombre: req.body.nombre
    });
    return res.status(200)
        .json({ message: "Rol creado ok!", data: rol });
});
exports.crearRol = crearRol;
const borrarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rolEliminado = yield rol_1.Rol.findByPk(id);
    yield rol_1.Rol.destroy({ where: { id } });
    return res.status(200).json({ message: "Rol eliminado ok!", data: rolEliminado });
});
exports.borrarRol = borrarRol;
const obtenerTodosLosRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosLosRoles = yield rol_1.Rol.findAll();
    return res.status(200)
        .json({ message: "Roles obtenidos ok!", data: todosLosRoles });
});
exports.obtenerTodosLosRoles = obtenerTodosLosRoles;
const obtenerRolesPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield rol_1.Rol.findAll({
        attributes: ["id", ["nombre", "Nombre_Rol"]]
    });
    return res.status(200).json({ message: "Rol Encontrado!", data: roles });
});
exports.obtenerRolesPorNombre = obtenerRolesPorNombre;
const getRolPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.Rol.findByPk(id);
    return res.status(200)
        .json({ message: "Roles encontrados!", data: rol });
});
exports.getRolPorId = getRolPorId;
const actualizarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield rol_1.Rol.update(Object.assign({}, req.body), { where: { id } });
    const rolActualizado = yield rol_1.Rol.findByPk(id);
    return res.status(200)
        .json({ message: "Rol actualizado ok!", data: rolActualizado });
});
exports.actualizarRol = actualizarRol;
