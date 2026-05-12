import { createServer, IncomingMessage, ServerResponse } from "http";
import { routeHandler } from "./routes/route.js";
import config from "./config/index.js";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  routeHandler(req, res);
});

server.listen(config.port, () => {
  console.log(`server running on 
    ${config.port}`);
});
