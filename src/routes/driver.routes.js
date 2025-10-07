import { Router } from "express";
import { createDriverController } from "../use-cases/driver/create/index.js";
import { getAllDriversController } from "../use-cases/driver/get-all/index.js";
import { getDriverByIdController } from "../use-cases/driver/get-by-id/index.js";
import { updateDriverController } from "../use-cases/driver/update/index.js";
import { deleteDriverController } from "../use-cases/driver/delete/index.js";
import { filterDriversByNameController } from "../use-cases/driver/filter-by-name/index.js";

const driverRoutes = Router();

driverRoutes.post("/", (request, response) => {
  return createDriverController.handle(request, response);
});

driverRoutes.get("/all", (request, response) => {
  return getAllDriversController.handle(request, response);
});

driverRoutes.get("/filter-by-name", (request, response) => {
  return filterDriversByNameController.handle(request, response);
});

driverRoutes.get("/:id", (request, response) => {
  return getDriverByIdController.handle(request, response);
});

driverRoutes.put("/:id", (request, response) => {
  return updateDriverController.handle(request, response);
});

driverRoutes.delete("/:id", (request, response) => {
  return deleteDriverController.handle(request, response);
});

export { driverRoutes };
