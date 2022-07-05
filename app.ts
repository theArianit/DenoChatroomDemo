import { Application } from "./moduledeps.ts";
import { setupRoutes } from "./routes/setup.routes.ts";

const app = new Application();

app.use(setupRoutes.routes());
app.use(setupRoutes.allowedMethods());

await app.listen({port:8000});
