import { Response, Request } from "express";
import Proyect from "../models/proyects";
import user from "../models/user";

const getProyects = async (req: Request, res: Response) => {
   try {
    const findProyects = await Proyect.find();
    res.json(findProyects);

   } catch (error) {
        res.status(500).json({ msg: error });
   }
};

const createProyect = async (req: Request, res: Response) => {

    try {
            const { name, description, deadline, status, client, creator } = req.body;

    const findProyectName = await Proyect.find({ name: name });
    if (findProyectName.length > 0) return res.status(404).json({ msg: "El nombre del proyecto ya existe" });

    const newProyect = new Proyect({ name, description, deadline, status, client, creator });
    await newProyect.save();
    const findUser = await user.findById(newProyect.creator);
    res.json({ msg: "Proyecto creado " + newProyect.name + " by "+ findUser?.username  });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}   

const getProyectbyCreator = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const findProyect = await Proyect.find({ creator: id });
        if (findProyect.length === 0) return res.status(404).json({ msg: "No hay proyectos para este usuario" });
        res.status(200).json(findProyect);

    } catch (error) {
        
    }
}

export const proyectController = { getProyects , createProyect , getProyectbyCreator };
