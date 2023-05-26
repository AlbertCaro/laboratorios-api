"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicas_1 = require("../controller/practicas");
/**
 * importar la función que va a proteger cada una de mis rutas con un token
 */
const verify_token_1 = require("../middleware/verify_token");
const router = (0, express_1.Router)();
router.post("/", practicas_1.crearPractica);
router.delete("/:id", practicas_1.borrarPractica);
router.get("/", practicas_1.obtenerTodasPracticas);
router.get("/buscarPorNombre/:nombre", verify_token_1.autorizar, practicas_1.buscarPracticasPorNombre);
router.put("/:id", practicas_1.actualizarPractica);
router.get("/:id", practicas_1.getPracticaPorId);
router.get("/:id", practicas_1.obtenerPracticasPorNombre);
router.delete("/:id", practicas_1.borrarPractica);
exports.default = router;
