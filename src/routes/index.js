import express from "express";
import { driverRoutes } from "./driver.routes.js";
import { vehicleRoutes } from "./vehicle.routes.js";
import { vehicleUsageRoutes } from "./vehicleUsage.routes.js";

const routes = express();

routes.use("/driver", driverRoutes);
routes.use("/vehicle", vehicleRoutes)
routes.use("/vehicle-usage", vehicleUsageRoutes)

export {routes}
