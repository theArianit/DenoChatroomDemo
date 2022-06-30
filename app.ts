// import { serve } from "https://deno.land/std@0.145.0/http/server.ts";

// setup server
// const server = serve(() => new Response("Hellooo World 2\n"));

// for await(const req of server){
//     if(req.url === '/'){
//         req.respond({
//             status: 200,
//             body: await Deno.open('./public/index.html')
//         })
//     }
// }

import { Application } from "./moduledeps.ts"

const app = new Application();

app.use(async (ctx, next) => {
    try{
        await ctx.send({
            root: `${Deno.cwd()}/public`,
            index:"index.html",
        });
    }catch{
        await next();
    }
});

await app.listen({ port: 8000 });
