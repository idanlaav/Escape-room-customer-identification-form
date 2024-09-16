
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./2-utils/config";
import catchAll from "./3-middleware/catch-all";
import { RouteNotFoundError } from "./4-models/error-models";
import controller from "./6-controllers/controllers";
import path from "path";
import authController from "./6-controllers/auth-controller";

const expressServer = express();


if (config.isDevelopment) expressServer.use(cors());
expressServer.use(express.json());
expressServer.use("/api", controller);
expressServer.use("/api", authController);
expressServer.use("*", (request: Request, response: Response, next: NextFunction) => {
    if(config.isDevelopment) {
        const err = new RouteNotFoundError(request.method, request.originalUrl);
        next(err);
    }
    else {
        response.sendFile(path.join(__dirname, "./7-frontend/index.html"));
    }
})

expressServer.use(catchAll);

expressServer.listen(config.port, () => console.log("Listening..."));




