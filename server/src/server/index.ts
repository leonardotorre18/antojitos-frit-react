import express, { Express, Request, Response } from "express";
import cors from "cors";
import router from "../routes"
import swaggerConfig from "../docs/swagger";
import swaggerUI from "swagger-ui-express";

const server: Express = express();

server.use(cors())

server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig))

server.use('/', router)

server.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


export default server;