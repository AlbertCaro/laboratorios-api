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
exports.actualizarLaboratorio = exports.getLabPorId = exports.buscarLaboratoriosPorNombre = exports.buscarLaboratoriosPorEncargado = exports.obtenerLaboratoriosPorNombre = exports.obtenerTodosLaboratorios = exports.borrarLaboratorio = exports.crearLaboratorio = void 0;
const sequelize_1 = require("sequelize");
const laboratorio_1 = require("../models/laboratorio");
const usuario_1 = require("../models/usuario");
const crearLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var lab = yield laboratorio_1.Laboratorio.create({
        nombre: req.body.nombre,
        edificio: req.body.edificio,
        capacidad: req.body.capacidad,
        usuario_codigo: req.body.usuario_codigo
    });
    return res.status(200)
        .json({ message: "Laboratorio creado ok!", data: lab });
});
exports.crearLaboratorio = crearLaboratorio;
const borrarLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const laboratorioEliminado = yield laboratorio_1.Laboratorio.findByPk(id);
    yield laboratorio_1.Laboratorio.destroy({ where: { id } });
    return res.status(200).json({ message: "Laboratorio eliminado ok!", data: laboratorioEliminado });
});
exports.borrarLaboratorio = borrarLaboratorio;
const obtenerTodosLaboratorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosLosLabs = yield laboratorio_1.Laboratorio.findAll({
        include: usuario_1.Usuario
    });
    return res.status(200)
        .json({ message: "Laboratorios obtenidos ok!", data: todosLosLabs });
});
exports.obtenerTodosLaboratorios = obtenerTodosLaboratorios;
const obtenerLaboratoriosPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const laboratorios = yield laboratorio_1.Laboratorio.findAll({
        attributes: ["id", ["nombre", "nombre_laboratorio"]]
    });
    return res.status(200).json({ message: "Laboratorios obtenidos", data: laboratorios });
});
exports.obtenerLaboratoriosPorNombre = obtenerLaboratoriosPorNombre;
const buscarLaboratoriosPorEncargado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const laboratorios = yield laboratorio_1.Laboratorio.findAll({
        where: {
            usuario_codigo: req.params.usuario_codigo,
        }
    });
    return res.status(200).json({ message: "Laboratorios encontrados: " + laboratorios.length, data: laboratorios });
});
exports.buscarLaboratoriosPorEncargado = buscarLaboratoriosPorEncargado;
const buscarLaboratoriosPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const laboratorios = yield laboratorio_1.Laboratorio.findAll({
        attributes: ["id", ["nombre", "nombre_laboratorio"]],
        where: {
            nombre: {
                [sequelize_1.Op.like]: "%" + req.params.nombre + "%"
            }
        }
    });
    return res.status(200).json({ message: "Laboratorios encontrados: " + laboratorios.length, data: laboratorios });
});
exports.buscarLaboratoriosPorNombre = buscarLaboratoriosPorNombre;
const getLabPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const laboratorio = yield laboratorio_1.Laboratorio.findByPk(id);
    return res.status(200)
        .json({ message: "Laboratorio encontrado!", data: laboratorio });
});
exports.getLabPorId = getLabPorId;
const actualizarLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield laboratorio_1.Laboratorio.update(Object.assign({}, req.body), { where: { id } });
    const laboratioActualizado = yield laboratorio_1.Laboratorio.findByPk(id);
    return res.status(200)
        .json({ message: "Laboratorio actualizado ok!", data: laboratioActualizado });
});
exports.actualizarLaboratorio = actualizarLaboratorio;
