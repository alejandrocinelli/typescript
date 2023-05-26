import express, { Application , Request , Response} from 'express';
import routes from './routes/index';
import conectDb from './db/config';

const app : Application = express();
const port : number = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", routes)

conectDb();

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});