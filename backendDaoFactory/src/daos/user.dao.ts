import { UserModel, User } from "../models/userModel";
import MongoDao from "./mongoDao";

let instance: UserMongoDao;

export default class UserMongoDao extends MongoDao<User> {
  static create(arg0: { username: string; password: string; }) {
      throw new Error("Method not implemented.");
  }
  constructor() {
    super(UserModel);
  }
  static getInstance() {
    if (!instance) instance = new UserMongoDao();

    return instance;
  }
}