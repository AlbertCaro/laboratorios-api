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
exports.actualizarPractica = exports.getPracticaPorId = exports.buscarPracticasPorNombre = exports.obtenerPracticasPorNombre = exports.obtenerTodasPracticas = exports.borrarPractica = exports.crearPractica = void 0;
const sequelize_1 = require("sequelize");
const practica_1 = require("../models/practica");
const crearPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var prac = yield practica_1.Practica.create({
        nombre: req.body.nombre,
        descripcion: req.body.edificio,
        archivo: req.body.capacidad,
    });
    return res.status(200)
        .json({ message: "Practica creada. OK!", data: prac });
});
exports.crearPractica = crearPractica;
const borrarPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const PracticaEliminada = yield practica_1.Practica.findByPk(id);
    yield practica_1.Practica.destroy({ where: { id } });
    return res.status(200).json({ message: "Practica eliminada. OK!", data: PracticaEliminada });
});
exports.borrarPractica = borrarPractica;
const obtenerTodasPracticas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todasLasPrac = yield practica_1.Practica.findAll(Object.assign({}, req.body));
    return res.status(200)
        .json({ message: "Practicas obtenidas ok!", data: todasLasPrac });
});
exports.obtenerTodasPracticas = obtenerTodasPracticas;
const obtenerPracticasPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Practicas = yield practica_1.Practica.findAll({
        attributes: ["id", ["nombre", "nombre_Practica"]]
    });
    return res.status(200).json({ message: "Practicas obtenidas", data: Practicas });
});
exports.obtenerPracticasPorNombre = obtenerPracticasPorNombre;
const buscarPracticasPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Practicas = yield practica_1.Practica.findAll({
        attributes: ["id", ["nombre", "nombre_Practica"]],
        where: {
            nombre: {
                [sequelize_1.Op.like]: "%" + req.params.nombre + "%"
            }
        }
    });
    return res.status(200).json({ message: "Practicas encontradas: " + Practicas.length, data: Practicas });
});
exports.buscarPracticasPorNombre = buscarPracticasPorNombre;
const getPracticaPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const practica = yield practica_1.Practica.findByPk(id);
    return res.status(200)
        .json({ message: "Practica encontrada!", data: practica_1.Practica });
});
exports.getPracticaPorId = getPracticaPorId;
const actualizarPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield practica_1.Practica.update(Object.assign({}, req.body), { where: { id } });
    const practicaActualizada = yield practica_1.Practica.findByPk(id);
    return res.status(200)
        .json({ message: "Practica actualizada ok!", data: practicaActualizada });
});
exports.actualizarPractica = actualizarPractica;
