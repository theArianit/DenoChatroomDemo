import { Application, Router } from "./moduledeps.ts";

const app = new Application();
const router = new Router();

router
    .get('/', async(ctx, next)=>{
        try{
          await ctx.send({
            root: `${Deno.cwd()}/public`,
            index: "index.html"            
          });
        }catch{
          await next();
        }
    });

// app.use(async (ctx, next) => {
//     try{
//         await ctx.send({
//             root: `${Deno.cwd()}/public`,
//             index:"index.html",
//         });
//     }catch{
//         await next();
//     }
// });


// router
//     .get('/', ctx => {
//          ctx.response.body = `ctx: ${ctx.request.url.pathname}`;
//     });

app.use(router.routes());
app.use(router.allowedMethods());

// app.use(async (ctx, next)=>{
//     console.log('ctx: ', ctx);
// });

await app.listen({port:8000});
