import express, { Express, Request, Response } from "express";
import cors from "cors";

const server: Express = express();

server.use(cors())

server.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


export default server