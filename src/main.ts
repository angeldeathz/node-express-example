import bodyParser from 'body-parser';
// import cors from 'cors';
import Server from './config/server';
import Mongo from './config/mongo.connection';
import Routes from './config/routes';
import { ErrorHandler } from './config/error-handler';

export default class Main {

    public async init() {
        // Config connection to db
        const mongodb = new Mongo();
        mongodb.connect();

        // Config server
        const server = new Server();
        server.app.use(bodyParser.json());
        // server.app.use(cors())

        const routes = new Routes(server.app);
        routes.InitRoutes();

        const errorHandler = new ErrorHandler(server.app);
        errorHandler.Configure();

        server.listen();
    }
}

const main = new Main();
main.init();