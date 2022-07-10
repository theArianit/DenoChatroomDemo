import { Router, Context } from "../moduledeps.ts";
import { chatConnection, chatMessage, chatDisconnect } from "../ws/chatroom.ts";

const runWS = async (ctx: Context, next: () => Promise<unknown>) => {
    if(!ctx.isUpgradable){
        ctx.throw(501);
    }

    const uid = globalThis.crypto.randomUUID();

    try{
        const ws = await ctx.upgrade();

        ws.onopen = () => {
            chatConnection(ws, uid);
        };

        ws.onmessage = (m) => {
            let mssg = m.data as string;
            if(typeof(mssg) === 'string'){
                chatMessage(JSON.parse(mssg));
            }
            // ws.close();
        };

        ws.onclose = () => { chatDisconnect(uid); };
    }catch{await next();}
}

export const wsRoutes = new Router()
.get('/ws', runWS);
