import { Router } from "express";
import { crearLaboratorio, 
    borrarLaboratorio, 
    obtenerTodosLaboratorios,
    actualizarLaboratorio,
    getLabPorId } from "../controller/laboratorios";

const router = Router();

router.post("/",crearLaboratorio);
router.delete("/:id",borrarLaboratorio);
router.get("/",obtenerTodosLaboratorios);
router.put("/:id",actualizarLaboratorio);
router.get("/:id",getLabPorId);

export default router;