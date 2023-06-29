import express, { Express, Request, Response } from "express";
import cors from "cors";
import router from "../routes"
import swaggerConfig from "../docs/swagger";
import swaggerUI from "swagger-ui-express";
import { initFirebaseConfig } from "../firebase/config";

const server: Express = express();

// Inicializar base de datos
initFirebaseConfig()

server.use(cors())

server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig))

server.use('/', router)

server.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


export default server;