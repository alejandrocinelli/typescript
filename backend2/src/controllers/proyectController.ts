import { Response, Request } from "express";

const getProyects = async (req: Request, res: Response) => {
    res.json({ msg: "Proyects - Login correctamente " });
};

export const proyectController = { getProyects };
