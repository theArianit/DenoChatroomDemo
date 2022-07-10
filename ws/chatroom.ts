import { Context } from "../moduledeps.ts";

let sockets = new Map<string, WebSocket>();

interface BroadcastObj{
    name: string,
    mssg: string
}

const chatConnection = async (ws: WebSocket, uid: string) => {
    await sockets.set(uid,ws);
    console.log('sockets: ', sockets);
}

const chatMessage = async (msg: BroadcastObj) => {  
    await sockets.forEach((ws: WebSocket) => {
        ws.send(JSON.stringify(msg));
    });  
}

const chatDisconnect = async (uid: string) => {
    await sockets.delete(uid);
}

export { chatConnection, chatMessage, chatDisconnect };
