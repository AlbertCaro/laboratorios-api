import { Router } from "express";
import { crearLaboratorio, 
    borrarLaboratorio, 
    obtenerTodosLaboratorios,
    actualizarLaboratorio,
    getLabPorId,
    obtenerLaboratoriosPorNombre,
    buscarLaboratoriosPorEncargado,
    buscarLaboratoriosPorNombre } from "../controller/laboratorios";

const router = Router();

router.post("/",crearLaboratorio);
router.get("/porNombre",obtenerLaboratoriosPorNombre);
router.get("/",obtenerTodosLaboratorios);
router.get("/buscar/:usuario_codigo",buscarLaboratoriosPorEncargado);
router.get("/buscarPorNombre/:nombre",buscarLaboratoriosPorNombre);
router.put("/:id",actualizarLaboratorio);
router.get("/:id",getLabPorId);
router.delete("/:id",borrarLaboratorio);


export default router;