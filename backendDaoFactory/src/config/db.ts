import * as mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {

    const db : any = process.env.DATABASE_URl;
    const useNewUrlParser : boolean = true ;

    try {
        const connection = await mongoose.connect(db, {
           // conecta a la base de datos

        });
        if(connection){
            console.log("MongoDB connected")
        } 
        
    } catch (error : any) {
        console.error(`Error: ${error.message}`);
        // Exit process with failure
        process.exit(1);   
    }
}

export default connectDb;