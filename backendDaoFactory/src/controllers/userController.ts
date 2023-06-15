import userDaoFactory from "../daos/userDaoFactory";
import { Request, Response } from "express";
import {userInterface} from "../interfaces/userInterface";

import dotenv from "dotenv";

dotenv.config();

const data : any = process.env.db;

const userDao =  userDaoFactory.getDao(data);


const registerUser = async (req: Request, res: Response) => {

    const { username, password } : userInterface = req.body;

    console.log("username: ", username);
    console.log("password: ", password);

     const user  = await userDao.create({username, password});

    res.json(user);
   
}

export const userController = { registerUser };
