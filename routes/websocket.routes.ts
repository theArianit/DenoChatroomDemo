import { Router, Context, send } from "../moduledeps.ts";
import { chatConnection, chatMessage } from "../ws/chatroom.ts";

const runWS = async (ctx: Context, next: () => Promise<unknown>) => {
    if(!ctx.isUpgradable){
        ctx.throw(501);
    }

    try{
        console.log('ctx: ', ctx);
        const ws = await ctx.upgrade();

        ws.onopen = () => {
            console.log('ws: ', ws);
            chatConnection(ws);
        };

        ws.onmessage = (m) => {
            let mssg = m.data as string;
            if(typeof(mssg) === 'string'){
                chatMessage(JSON.parse(mssg));
            }
            // ws.close();
        };

        ws.onclose = () => { console.log('Client Disconnected!');};
    }catch{await next();}
}

export const wsRoutes = new Router()
.get('/ws', runWS);
