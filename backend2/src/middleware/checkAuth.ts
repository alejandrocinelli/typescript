import jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import user from "../models/user";


interface AuthRequest extends Request {
    username?: any;
  }

// This function is used to check if the user is logged in or not by checking the token

const checkAuth = async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token ;
   
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
       
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
            // este if es para que no de error en el decoded.id de abajo si el token no es un objeto
            if(typeof decoded === "string") return res.status(401).json({msg: "Token no válido"});

            req.username = await User.findById(decoded.id).select("-password");
            return next();

        } catch ( error) {
            return res.status(401).json({msg: "Token no válido"});
            
        }
    }

    if(!token){
        return res.status(401).json({msg: "No autorizado"});
    }

    next();
}

export default checkAuth;