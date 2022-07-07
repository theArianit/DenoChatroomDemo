import { Context, v4 } from "../moduledeps.ts";

let sockets = new Map<string, WebSocket>();

const chatConnection = async (ws: WebSocket/*, ctx: Context*/) => {
    console.log('new websocket, ws: ',ws);
    const uid = v4.generate();
    console.log("uid: ", uid);
    sockets.set(uid,ws);
    console.log(sockets);
}

export { chatConnection };
