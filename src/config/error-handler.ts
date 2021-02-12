import { Express } from "express";

export class ErrorHandler {
    constructor(private app: Express) { }

    public Configure() {
        this.app.use((error: any, req: any, res: any, next: any) => {
            return res.status(500).json({ error: error.toString() });
        });
    }
}