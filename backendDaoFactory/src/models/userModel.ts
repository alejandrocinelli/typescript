import { Schema, model, Document } from 'mongoose';

interface UserDocument extends Document {
    username: string;
    password: string;
}

const userSchema = new Schema <UserDocument> ({
    username: String,
    password: String
});

export const User = model<UserDocument>('User', userSchema);