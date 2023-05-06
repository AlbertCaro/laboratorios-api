"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const laboratorios_1 = require("../controller/laboratorios");
/**
 * importar la función que va a proteger cada una de mis rutas con un token
 */
const verify_token_1 = require("../middleware/verify_token");
const router = (0, express_1.Router)();
router.post("/", laboratorios_1.crearLaboratorio);
router.get("/porNombre", laboratorios_1.obtenerLaboratoriosPorNombre);
/**
 * para utilizar la función autorizar, debo pasarla como segundo parámetro en la ruta
 * el primer parámetro es el endpoint
 * el segundo el middleware (si tengo más de uno, se pasa como arreglo)
 * el tercero es la función dentro del controlador que se ejecutará cuando se supere la validación del middleware
 */
router.get("/", verify_token_1.autorizar, laboratorios_1.obtenerTodosLaboratorios);
router.get("/buscar/:usuario_codigo", laboratorios_1.buscarLaboratoriosPorEncargado);
router.get("/buscarPorNombre/:nombre", verify_token_1.autorizar, laboratorios_1.buscarLaboratoriosPorNombre);
router.put("/:id", laboratorios_1.actualizarLaboratorio);
router.get("/:id", laboratorios_1.getLabPorId);
router.delete("/:id", laboratorios_1.borrarLaboratorio);
exports.default = router;
