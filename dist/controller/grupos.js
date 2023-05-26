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
exports.actualizarGrupo = exports.getLabPorId = exports.buscarGruposPorNombre = exports.buscarGruposPorEncargado = exports.obtenerGruposPorNombre = exports.obtenerTodosGrupos = exports.borrarGrupo = exports.crearGrupo = void 0;
const sequelize_1 = require("sequelize");
const grupo_1 = require("../models/grupo");
const carrera_1 = require("../models/carrera");
const crearGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var gru = yield grupo_1.Grupo.create({
        nombre: req.body.nombre,
        carrera_clave: req.body.carrera_clave
    });
    return res.status(200)
        .json({ message: "Grupo creado ok!", data: gru });
});
exports.crearGrupo = crearGrupo;
const borrarGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idgrupo } = req.params;
    const grupoEliminado = yield grupo_1.Grupo.findByPk(idgrupo);
    yield grupo_1.Grupo.destroy({ where: { idgrupo } });
    return res.status(200).json({ message: "Grupo eliminado ok!", data: grupoEliminado });
});
exports.borrarGrupo = borrarGrupo;
const obtenerTodosGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosLosGrups = yield grupo_1.Grupo.findAll({
        include: carrera_1.Carrera
    });
    return res.status(200)
        .json({ message: "Grupos obtenidos ok!", data: todosLosGrups });
});
exports.obtenerTodosGrupos = obtenerTodosGrupos;
const obtenerGruposPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupos = yield grupo_1.Grupo.findAll({
        attributes: ["idgrupo", ["nombre", "nombre_grupo"]]
    });
    return res.status(200).json({ message: "Grupos obtenidos", data: grupos });
});
exports.obtenerGruposPorNombre = obtenerGruposPorNombre;
const buscarGruposPorEncargado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupos = yield grupo_1.Grupo.findAll({
        where: {
            carrera_clave: req.params.carrera_clave,
        }
    });
    return res.status(200).json({ message: "Grupos encontrados: " + grupos.length, data: grupos });
});
exports.buscarGruposPorEncargado = buscarGruposPorEncargado;
const buscarGruposPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupos = yield grupo_1.Grupo.findAll({
        attributes: ["idgrupo", ["nombre", "nombre_grupo"]],
        where: {
            nombre: {
                [sequelize_1.Op.like]: "%" + req.params.nombre + "%"
            }
        }
    });
    return res.status(200).json({ message: "Grupos encontrados: " + grupos.length, data: grupos });
});
exports.buscarGruposPorNombre = buscarGruposPorNombre;
const getLabPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idgrupo } = req.params;
    const grupo = yield grupo_1.Grupo.findByPk(idgrupo);
    return res.status(200)
        .json({ message: "Grupo encontrado!", data: grupo });
});
exports.getLabPorId = getLabPorId;
const actualizarGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idgrupo } = req.params;
    yield grupo_1.Grupo.update(Object.assign({}, req.body), { where: { idgrupo } });
    const grupotioActualizado = yield grupo_1.Grupo.findByPk(idgrupo);
    return res.status(200)
        .json({ message: "Grupo actualizado ok!", data: grupotioActualizado });
});
exports.actualizarGrupo = actualizarGrupo;
