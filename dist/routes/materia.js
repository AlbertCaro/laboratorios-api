"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materia_1 = require("../controller/materia");
// de una vez importo el middleware
const router = (0, express_1.Router)();
router.get("/", materia_1.getAllMaterias);
router.post("/", materia_1.crearMateria);
router.get("/porNombre", materia_1.getMatByName);
router.get("/buscarNombre/:nombre", materia_1.getMatsByName);
router.put("/:crn", materia_1.updateMateria);
router.delete("/:crn", materia_1.deleteMateria);
router.get("/:crn", materia_1.getMateriaId);
exports.default = router;
