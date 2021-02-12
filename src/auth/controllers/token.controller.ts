import { Router } from "express";
import jwt from "jsonwebtoken";
import config from "../../config/environment";

const router = Router();

router.post("/token", (_req, res) => {

    const token = jwt.sign({
        data: {
            nombre: "John",
            apellido: "Doe"
        }
    }, config.secretKey, { expiresIn: config.expiresIn });

    res.json(token);

});

export default router;