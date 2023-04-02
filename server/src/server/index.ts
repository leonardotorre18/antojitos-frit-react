import express, { Express, Request, Response } from "express";
import cors from "cors";
import router from "../routes"

const server: Express = express();

server.use(cors())

server.use('/', router)

server.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


export default server