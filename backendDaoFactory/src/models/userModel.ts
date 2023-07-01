import { Schema, model, Document } from 'mongoose';

interface User extends Document {
    username: string;
    password: string;
}

/*const userSchema = new Schema <UserDocument> ({
    username: String,
    password: String
});

export const User = model<UserDocument>('User', userSchema);*/

const userSchema: Schema<User> = new Schema<User>({
    username: { type: String },
   
    password: { type: String },
    
});
  

const UserModel = model<User>("user", userSchema);

export { User, UserModel };