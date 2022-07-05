import { Router, Context } from "../moduledeps.ts";

// async function initStyle(ctx: Context, next: () => Promise<unknown>){
//     try{
//         await ctx.send({
//             root: publicRoot,
//             index: "style.css"
//         });
//     }catch{ await next();}
// }

// async function init(ctx: Context, next: () => Promise<unknown>){
//     try{
//         await ctx.send({
//             root: publicRoot,
//             index: "style.css"
//         });
//     }catch{ await next();}
// }

// export const setupRoutes = new Router()
// .get('/styling/style.css', initStyle)
// .get('/', init);

const publicRoot = `${Deno.cwd()}/public`;

export const setupRoutes = new Router()
.get('/styling/style.css', async(ctx, next) => {
    try{
        await ctx.send({
            root: publicRoot,
            index: "style.css" 
        });
    }catch{ await next();}
})
.get('/', async(ctx, next) => {
    try{
      await ctx.send({
        root: publicRoot,
        index: "index.html"            
      });
    } catch{
      await next();
    }
});
