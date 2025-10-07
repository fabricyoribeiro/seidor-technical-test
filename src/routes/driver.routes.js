import { Router } from "express";
import { createDriverController } from "../use-cases/driver/create/index.js";
import { getAllDriversController } from "../use-cases/driver/get-all/index.js";
import { getDriverByIdController } from "../use-cases/driver/get-by-id/index.js";

const driverRoutes = Router();

driverRoutes.post("/", (request, response) => {
  return createDriverController.handle(request, response);
});

driverRoutes.get("/all", (request, response) => {
  return getAllDriversController.handle(request, response);
});

driverRoutes.get("/:id", (request, response) => {
  return getDriverByIdController.handle(request, response);
});

export { driverRoutes };
