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
exports.actualizarCarrera = exports.getCarPorClave = exports.obtenerCarrerasPorNombre = exports.obtenerTodasCarreras = exports.borrarCarrera = exports.crearCarrera = void 0;
const carrera_1 = require("../models/carrera");
const crearCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var car = yield carrera_1.Carrera.create({
        clave: req.body.clave,
        nombre: req.body.nombre
    });
    return res.status(200)
        .json({ message: "Carrera creado ok!", data: car });
});
exports.crearCarrera = crearCarrera;
const borrarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clave } = req.params;
    const carreraEliminada = yield carrera_1.Carrera.findByPk(clave);
    yield carrera_1.Carrera.destroy({ where: { clave } });
    return res.status(200).json({ message: "Carrera eliminada ok!", data: carreraEliminada });
});
exports.borrarCarrera = borrarCarrera;
const obtenerTodasCarreras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todasLasCarreras = yield carrera_1.Carrera.findAll();
    return res.status(200)
        .json({ message: "Carreras obtenidas ok!", data: todasLasCarreras });
});
exports.obtenerTodasCarreras = obtenerTodasCarreras;
const obtenerCarrerasPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carreras = yield carrera_1.Carrera.findAll({
        attributes: ["clave", ["nombre", "Nombre_Carrera"]]
    });
    return res.status(200).json({ message: "Carrera Encontrada!", data: carreras });
});
exports.obtenerCarrerasPorNombre = obtenerCarrerasPorNombre;
const getCarPorClave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clave } = req.params;
    const carrera = yield carrera_1.Carrera.findByPk(clave);
    return res.status(200)
        .json({ message: "Carrera encontradas!", data: carrera });
});
exports.getCarPorClave = getCarPorClave;
const actualizarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clave } = req.params;
    yield carrera_1.Carrera.update(Object.assign({}, req.body), { where: { clave } });
    const carreraActualizada = yield carrera_1.Carrera.findByPk(clave);
    return res.status(200)
        .json({ message: "Carrera actualizada ok!", data: carreraActualizada });
});
exports.actualizarCarrera = actualizarCarrera;
