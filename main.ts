import bodyParser from 'body-parser';
// import cors from 'cors';
import Server from './src/config/server';
import Mongo from './src/config/mongo.connection';
import Routes from './src/config/routes';
// import { ErrorHandler } from './src/config/error-handler';

// Config connection to db
const mongodb = new Mongo();
mongodb.connect();

// Config server
const server = new Server();
server.app.use(bodyParser.json());
// server.app.use(cors())

const routes = new Routes(server.app);
routes.InitRoutes();

// const errorHandler = new ErrorHandler(server.app);
// errorHandler.Configure();

server.listen();