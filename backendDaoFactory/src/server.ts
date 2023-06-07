import express , { Application , Request , Response} from 'express';
import dotenv from "dotenv";
import connectDb from './config/db';

dotenv.config();
const app : Application = express();
const port : number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
    });

    


