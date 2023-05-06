"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controller/login");
//creo una instancia del router
const router = (0, express_1.Router)();
//creo una ruta a la que llegaré mediante post, enviando el email y el password que está en el controlador login (se llama login)
router.post('/', login_1.login);
//exporto el router configurado con la ruta post /
exports.default = router;
