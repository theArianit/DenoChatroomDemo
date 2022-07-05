import { Router, Context } from "../moduledeps.ts";

const publicRoot = `${Deno.cwd()}/public`;

const initStyle = async (ctx: Context, next: () => Promise<unknown>)=>{
  try{
      await ctx.send({
          root: publicRoot,
          index: "style.css"
      });
  }catch{ await next();}
}

const initIndex = async (ctx: Context, next: () => Promise<unknown>)=>{
    try{
        await ctx.send({
            root: publicRoot,
            index: "index.html"
        });
    }catch{ await next();}
}

export const setupRoutes = new Router()
.get('/styling/style.css', initStyle)
.get('/', initIndex);
