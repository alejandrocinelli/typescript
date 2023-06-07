import User from '../models/userModel';
import MongoDao from './mongo.dao';

export default class userMongoDao extends MongoDao {
    static instance: any;
    constructor(){
        super('User');
    }

    static getInstance() {
        if (!userMongoDao.instance) {
            userMongoDao.instance = new userMongoDao();
        }
        return userMongoDao.instance;
    }
}
