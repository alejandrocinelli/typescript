import mongoose, { Model } from 'mongoose';

export default class MongoDao {

    //aca collection es de tipo Model de mongoose y any es el tipo de dato que va a tener
    collection: Model<any>;
    
    constructor(collection : string){
        
        this.collection = mongoose.model(collection);
    }

    async create(documentToCreate : any ) {
      
        try {
          const createdDocument = await this.collection.create(documentToCreate);
        
          return createdDocument;
        } catch (err) {
          console.log("Error creating document", err);
          return err;
        }
      }
        
      
      async update(id: string, updateData: any) {
        try {
          const updatedDocument = await this.collection.updateOne(
            { _id: id },
            updateData
          );
          return updatedDocument;
        } catch (err) {
          console.log("Error updating document", err);
        }
      }
    
      async getAll() {
        try {
          const allDocuments = await this.collection.find();
          return allDocuments;
        } catch (err) {
          console.log("Error getting all documents", err);
        }
      }

      async getById(id: string) {
        try {
          const document = await this.collection.findById(id);
          return document;
        } catch (err) {
          console.log("Error getting document by id", err);
        }
      }
    
      async getByFilter(filters: any) {
        try {
          const document = await this.collection.findOne(filters).lean();
          return document;
        } catch (err) {
          console.log("Error getting document by filters", err);
        }
      }

      async delete(id: string) {
        try {
          const deletedDocument = await this.collection.deleteOne({ _id: id });
          return deletedDocument;
        } catch (err) {
          console.log("Error deleting document", err);
        }
      }
    
      async deleteAll() {
        try {
          const deletedDocuments = await this.collection.deleteMany({});
          return deletedDocuments;
        } catch (err) {
          console.log("Error deleting all documents", err);
        }
      }
    
 }
    

