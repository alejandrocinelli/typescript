import { Response, Request } from "express";
import Proyect from "../models/proyects";
import user from "../models/user";
import { proyectData } from "../interfaces/interfaces";

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
            const { name, description, deadline, status, client, creator } : proyectData = req.body;

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

const getProyectById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const findProyect = await Proyect.findById(id);
        if (!findProyect) return res.status(404).json({ msg: "Proyecto no encontrado" });
        res.status(200).json(findProyect);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateProyect = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, deadline, status, client, creator } : proyectData = req.body;
        const findProyect = await Proyect.findById(id);
       
        if (!findProyect) return res.status(404).json({ msg: "Proyecto no encontrado" });
        if(findProyect.creator.toString() == creator.toString()) {
          const updateProyect = await findProyect.updateOne({ name, description, deadline, status, client, creator });
           return res.status(200).json({ msg: "Proyecto actualizado" });   
       }
        else{
            return res.status(404).json({ msg: "No tienes permisos para actualizar este proyecto" });
        }      
        
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteProyect = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const findProyect = await Proyect.findById(id);
        if (!findProyect) return res.status(404).json({ msg: "Proyecto no encontrado" });
        if(findProyect.creator.toString() == req.body.creator.toString()) {
             await findProyect.deleteOne();
            return res.status(200).json({ msg: "Proyecto eliminado" });
        }
        else{
            return res.status(404).json({ msg: "No tienes permisos para eliminar este proyecto" });
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const proyectController = { getProyects , createProyect , getProyectbyCreator,
    updateProyect , deleteProyect , getProyectById };
