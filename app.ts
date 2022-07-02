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
