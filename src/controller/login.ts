import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { Usuario } from "../models/usuario";

export async function login(req:Request, res:Response) {
    const {email, password} = req.body;

    const usuario = await Usuario.findOne({
        where: {email}
    });

    if(!usuario){
        return res.status(401).json({message:"el usuario no existe"});
    }

    const passValida = await bcrypt.compareSync(password,usuario.password);

    if(!passValida){
        return res.status(401).json({message:"La contraseña es incorrecta"});
    }

    const token = jwt.sign(
        {codigo:usuario.codigo},
        "clave-para.encriptar",
        {expiresIn:'5m'}
    );

    res.json({token});
}