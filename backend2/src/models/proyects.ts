import { Schema, model, Document  , SchemaDefinitionProperty} from 'mongoose';

interface IProyect extends Document {
    name: string;
    description: string;
    deadline : string;
    status: boolean;
    client : string;
    creator : SchemaDefinitionProperty<string> ;
}

const proyectSchema = new Schema <IProyect>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    deadline: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {    
    timestamps: true
});

export default model<IProyect>('Proyect', proyectSchema);