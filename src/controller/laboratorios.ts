import { RequestHandler } from "express";

import {Laboratorio} from "../models/laboratorio";

export const crearLaboratorio:RequestHandler = async (req,res)=>{
    var lab = await Laboratorio.create({
        nombre:req.body.nombre,
        edificio:req.body.edificio,
        capacidad:req.body.capacidad,
        usuario_codigo:req.body.usuario_codigo
    });
    return res.status(200)
        .json({message:"Laboratorio creado ok!",data:lab});

}

export const borrarLaboratorio:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const laboratorioEliminado: Laboratorio|null = await Laboratorio.findByPk(id);
    await Laboratorio.destroy({where:{id}});
    return res.status(200).json({message:"Laboratorio eliminado ok!", data:laboratorioEliminado});
}

export const obtenerTodosLaboratorios:RequestHandler =async (req,res) => {
    const todosLosLabs:Laboratorio[] = await Laboratorio.findAll();
    return res.status(200)
    .json({message:"Laboratorios obtenidos ok!", data:todosLosLabs});
}

export const getLabPorId:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const laboratorio: Laboratorio | null = await Laboratorio.findByPk(id);
    return res.status(200)
    .json({message:"Laboratorio encontrado!", data:laboratorio});
}

export const actualizarLaboratorio: RequestHandler =async (req,res) => {
    const {id} = req.params;
    await Laboratorio.update({...req.body}, {where:{id}});
    const laboratioActualizado: Laboratorio | null = await Laboratorio.findByPk(id);

    return res.status(200)
    .json({message:"Laboratorio actualizado ok!", data:laboratioActualizado});
}

