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
exports.getMatsByName = exports.getMatByName = exports.updateMateria = exports.getMateriaId = exports.getAllMaterias = exports.deleteMateria = exports.crearMateria = void 0;
const materia_1 = require("../models/materia");
const sequelize_1 = require("sequelize");
// import {Grupo} from "../models/grupo"; ejemplo de importacion
const crearMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var materia = yield materia_1.Materia.create(Object.assign({}, req.body)); //los 3 puntos es un operador que se usa para arreglos
    //obteniendo todos valores que tiene un arreglo u objeto dependiendo de lo que se este utilizando
    return res.status(200).json({ message: "Materia creada", data: materia });
});
exports.crearMateria = crearMateria;
const deleteMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { crn } = req.params;
    const materiaBorrada = yield materia_1.Materia.findByPk(crn);
    yield materia_1.Materia.destroy({ where: { crn } });
    return res.status(200).json({ message: "Materia eliminada ok!", data: materiaBorrada });
});
exports.deleteMateria = deleteMateria;
const getAllMaterias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosLosLabs = yield materia_1.Materia.findAll();
    return res.status(200).json({ message: "Materias obtenidas ok!", data: todosLosLabs });
});
exports.getAllMaterias = getAllMaterias;
const getMateriaId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { crn } = req.params;
    const materia = yield materia_1.Materia.findByPk(crn);
    return res.status(200).json({ message: "Materias encontradas", data: materia });
});
exports.getMateriaId = getMateriaId;
const updateMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { crn } = req.params;
    yield materia_1.Materia.update(Object.assign({}, req.body), { where: { crn } });
    const materiaUpdate = yield materia_1.Materia.findByPk(crn);
    return res.status(200).json({ message: "Materia Actualizada Correctamente!", data: materiaUpdate });
});
exports.updateMateria = updateMateria;
//metodo adicional
const getMatByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materias = yield materia_1.Materia.findAll({
        attributes: [
            "crn", "nombre"
        ]
    });
    return res.status(200).json({ message: "Materias obtenidas solo nombre y CRN", data: materias });
});
exports.getMatByName = getMatByName;
const getMatsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materias = yield materia_1.Materia.findAll({
        attributes: ["crn", ["clave", "nombre"]],
        where: {
            nombre: {
                [sequelize_1.Op.like]: '%' + req.params.nombre + '%'
            }
        }
    });
    return res.status(200).json({ message: "Materia Encontrado por Nombre:" + materias.length, data: materias });
});
exports.getMatsByName = getMatsByName;
// Obtener mas datos por medio de relaciones (hasMany,manyToMany)
// export const obtenerTodasMaterias:RequestHandler = async(req,res)=>{
//     const todosLasMaterias:Materia[] = await Materia.findAll({
//         include:Grupo
//     });
//     return res.status(200).json({message:"Materias obtenidos ok!", data:todosLasMaterias});
// }
// Solo como ejemplo de relacion
