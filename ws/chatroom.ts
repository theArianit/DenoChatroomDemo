import { Context, v4 } from "../moduledeps.ts";

let sockets = new Map<string, WebSocket>();
let myUID: string;

interface BroadcastObj{
    name: string,
    mssg: string
}

const chatConnection = async (ws: WebSocket/*, ctx: Context*/) => {
    console.log('new websocket, ws: ',ws);
    const uid = globalThis.crypto.randomUUID(); // v4.generate();
    myUID=uid;
    await sockets.set(uid,ws);
    console.log('sockets: ', sockets);
}

const chatMessage = async (msg: BroadcastObj) => {
    console.log('chatMessage: ', msg);    
    await sockets.forEach((ws: WebSocket) => {
        ws.send(JSON.stringify(msg));
    });
    //await ws.send(msg);    
}

// cons chatDisconnect =async (params:type) => {   
// }

export { chatConnection, chatMessage };
