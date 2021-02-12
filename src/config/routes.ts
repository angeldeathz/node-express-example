import { Express } from 'express';
import environment from './environment';
import { productRoute } from '../products/routes/product.route';
import tokenController from "../auth/controllers/token.controller";
import { JwtConfig } from '../auth/config/jwt.config';

export default class Routes {
    constructor(private app: Express) { }

    public InitRoutes() {
        const jwt = new JwtConfig();

        this.app
            .use(environment.apiPrefix, tokenController)
            .use(environment.apiPrefix, jwt.Configure, productRoute);
    }
}