import { Express } from 'express';
import environment from './environment';
import { productRoute } from '../products/routes/product.route';

export default class Routes {
    constructor(private app: Express) { }

    public InitRoutes() {
        this.app
            .use(environment.apiPrefix, productRoute);
    }
}