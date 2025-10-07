import { Router } from "express";
import { createDriverController } from "../use-cases/driver/create/index.js";

const driverRoutes = Router();

driverRoutes.post("/", (request, response) => {
  return createDriverController.handle(request, response);
});

export { driverRoutes };
