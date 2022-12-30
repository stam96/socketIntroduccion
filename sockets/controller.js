import { v4 as uuidv4 } from 'uuid';
export const socketController = (socket) =>{
    /*console.log("Cliente conectado", socket.id)
    socket.on("disconnect", ()=>{
    console.log("Cliente desconectado")
    });*/
    socket.on("enviar-mensaje", (payload, callback)=>{
      //this.io.emit("enviar-mensaje", payload);
      const id = uuidv4();
      callback(id)
      socket.broadcast.emit("enviar-mensaje", payload)
    })
  };   