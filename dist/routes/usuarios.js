"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
router.get("/", usuarios_1.listarUsuarios);
router.post("/", usuarios_1.crearUsuario);
router.get("/restaurar/:codigo", usuarios_1.restaurarUsuario);
router.put("/:codigo", usuarios_1.actualizarUsuario);
router.get("/:codigo", usuarios_1.obtenerInfoCompleta);
router.delete("/:codigo", usuarios_1.eliminarUsuario);
exports.default = router;
