import { Application } from "oak";
import { setupRoutes } from "./routes/setup.routes.ts";
import { wsRoutes } from "./routes/websocket.routes.ts";

const app = new Application();

app.use(setupRoutes.routes());
app.use(setupRoutes.allowedMethods());
app.use(wsRoutes.routes());
app.use(wsRoutes.allowedMethods());

await app.listen({port:8000});
