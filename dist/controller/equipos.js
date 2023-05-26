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
exports.actualizarEquipo = exports.getEquipoPorId = exports.buscarEquiposPorNombre = exports.obtenerEquiposPorNombre = exports.obtenerTodosEquipos = exports.borrarEquipo = exports.crearEquipo = void 0;
const sequelize_1 = require("sequelize");
const equipo_1 = require("../models/equipo");
const crearEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var equip = yield equipo_1.Equipo.create(Object.assign({}, req.body));
    return res.status(200).json({ message: "Equipo creado ok!", data: equip });
});
exports.crearEquipo = crearEquipo;
const borrarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const equipoEliminado = yield equipo_1.Equipo.findByPk(id);
    yield equipo_1.Equipo.destroy({ where: { id } });
    return res.status(200).json({ message: "Equipo eliminado ok!", data: equipoEliminado });
});
exports.borrarEquipo = borrarEquipo;
const obtenerTodosEquipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosLosEquipos = yield equipo_1.Equipo.findAll({});
    return res.status(200)
        .json({ message: "Equipos obtenidos ok!", data: todosLosEquipos });
});
exports.obtenerTodosEquipos = obtenerTodosEquipos;
const obtenerEquiposPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipos = yield equipo_1.Equipo.findAll({
        attributes: ["id", ["nombre", "nombre_equipo"]]
    });
    return res.status(200).json({ message: "Equipos obtenidos", data: equipos });
});
exports.obtenerEquiposPorNombre = obtenerEquiposPorNombre;
const buscarEquiposPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipos = yield equipo_1.Equipo.findAll({
        attributes: ["id", ["nombre", "nombre_equipo"]],
        where: {
            nombre: {
                [sequelize_1.Op.like]: "%" + req.params.nombre + "%"
            }
        }
    });
    return res.status(200).json({ message: "Equipos encontrados: " + equipos.length, data: equipos });
});
exports.buscarEquiposPorNombre = buscarEquiposPorNombre;
const getEquipoPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const equip = yield equipo_1.Equipo.findByPk(id);
    return res.status(200)
        .json({ message: "Equipo encontrado!", data: equip });
});
exports.getEquipoPorId = getEquipoPorId;
const actualizarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield equipo_1.Equipo.update(Object.assign({}, req.body), { where: { id } });
    const equipoActualizado = yield equipo_1.Equipo.findByPk(id);
    return res.status(200)
        .json({ message: "Equipo actualizado ok!", data: equipoActualizado });
});
exports.actualizarEquipo = actualizarEquipo;
