/**
 * module for creating mongodb connection
 */

 import mongoose from 'mongoose';

 export default class Mongo {
   /**
    * creates connection with mongodb
    */
   constructor() {
     const proto = Object.getPrototypeOf(this);
     if (!proto.connection) {
       if(`${process.saarthi.database}` === "PROD"){
         proto.connection = mongoose.connect(`mongodb+srv://${process.saarthi.db.user}:${process.saarthi.db.password}@${process.saarthi.db.host}/${process.saarthi.db.database}?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: { version: '1' } });
       }
       else if (`${process.saarthi.database}` === "local"){
        proto.connection = mongoose.connect(`mongodb://${process.saarthi.db.host}:${process.saarthi.db.port}/${process.saarthi.db.database}`, {poolSize: 500})
      }
       else if (`${process.saarthi.database}` === "STAGING"){
        proto.connection = mongoose.connect(`mongodb+srv://${process.saarthi.db.user}:${process.saarthi.db.password}@${process.saarthi.db.host}/${process.saarthi.db.database}?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: { version: '1' } });
       }
     }
   }
 }
 