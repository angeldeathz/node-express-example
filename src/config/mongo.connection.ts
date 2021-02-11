import mongoose from 'mongoose'
import environment from './environment'

export default class MongoConnection {
    public connect() {
        mongoose.connect(environment.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, (error) => {
            if (error) {
                throw error;
            } else {
                console.log("Connected to the mongo database");
            }
        });
    }
}