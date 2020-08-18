import { Router } from "express";

import { HelloController } from "./controllers/HelloController";

const routes = Router();

routes.get("/hello", HelloController.index);

export { routes };
