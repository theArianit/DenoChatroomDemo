import { serve } from "./moduledeps.ts";

// serve((req: Request) => new Response(req.url));

async function handler(req: Request): Promise<Response> {
    const url = new URL(req.url);

    console.log("Path:", url);
  
    if(url.pathname==='/styling/style.css'){
        const styleFile = await Deno.readFile("./public/styling/style.css");
        return new Response(styleFile,{
            headers:{
                "content-type": "text/css",
            }
        });
    }

    if(url.pathname === '/'){
        const file = await Deno.readFile("./public/index.html");
        return new Response(file,{
            status: 200,
            headers: {
                "content-type": "text/html"
            }
        });
    }
  
    return new Response("Hello, World!");
}

serve(handler);

// const server = Deno.listen( {port: 8000 });
