import {User} from '../models/userModel';
import MongoDao from './mongo.dao';

let instance : any;

export default class userMongoDao extends MongoDao {
    static instance: any;
    constructor(){
        super('User');
    }

    static getInstance() {
        if (!instance) {
            instance = new userMongoDao();
        }
        return instance;
    }
}
