import { Response , Request } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET : any = process.env.JWT_SECRET;

export interface user {
    username: string;
    password: string;
}

const registerUser = async (req : Request, res : Response) => {

    try {
        const {username , password} : user = req.body;
        const findUser = await User.findOne({username});
        if(findUser) return res.status(400).json({msg: "El usuario ya existe"});
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username , password: hashPassword});
        await newUser.save();
        res.json({msg: "Usuario creado" + newUser.username});
        
    } catch (error) {
        
    }
}


const loginUser = async (req : Request, res : Response) => {

    try {
            const {username , password} : user = req.body;
            const user = await User.findOne({username});
            if(!user) return res.status(400).json({msg: "El usuario no existe"});
            const isPasswordValid = bcrypt.compare(password, user.password);
            if(!isPasswordValid) return res.status(400).json({msg: "Contraseña incorrecta"});
            const token = jwt.sign({id: user._id}, JWT_SECRET);
            res.json({ token });

    } catch (error) {
        
    }
}

export const authController = { registerUser , loginUser };