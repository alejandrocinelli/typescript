import userMongoDao from "./userMongo.Dao";

export default class userDaoFactory {
    static instance: any;
    
    static getDao(db : any){
        switch(db){
            case 'mongo':
                return userMongoDao.getInstance();
            case 'mysql':
                return new Error('No se ha implementado el dao para mysql');
    } 
}
}