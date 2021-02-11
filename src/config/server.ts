import express from 'express';
import environment from './environment';

export default class Server {
    public app = express();

    public listen() {
        this.app.listen(environment.port);
        console.log("Connected to the port " + environment.port);
    }
}