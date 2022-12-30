import express from "express";
import { createServer } from "http";
import {Server as ServidorIo} from "socket.io";
import cors from "cors"
import * as dotenv from 'dotenv'
import { socketController } from "../sockets/controller.js";
dotenv.config()
export class Server {
  constructor() {
    //Express
    this.app = express();
    this.port = process.env.PORT;
    this.server = createServer(this.app);
    this.io = new ServidorIo(this.server);
    //Middleware
    this.middleware();
    //ruta
    this.rutas();
    this.sockets();
  }

  middleware(){
    this.app.use(cors());
    this.app.use(express.json());  
    this.app.use(express.static("public"))
  };

  rutas() {
  };

  sockets(){
    this.io.on("connection", socketController )
  };
  listen() {
    this.server.listen(this.port, () => {
      console.log("Escuchando");
    });
  }
}
