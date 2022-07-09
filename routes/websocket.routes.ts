import { Router, Context, send } from "../moduledeps.ts";
import { chatConnection } from "../ws/chatroom.ts";

const runWS = async (ctx: Context, next: () => Promise<unknown>) => {
    // if(!ctx.isUpgradeable){
    //     ctx.throw(501);
    // }

    try{
        const ws = await ctx.upgrade();

        ws.onopen = () => {
            chatConnection(ws);
        };

        // ws.onmessage = (m) => {
        //     console.log('Got message from client: ', m.data);
        //     ws.send(m.data as string);
        //     ws.close();
        // };

        ws.onclose = () => { console.log('Disconnected from the slient!');};
    }catch{await next();}
}

export const wsRoutes = new Router()
.get('/ws', runWS);
