import express from "express";
import { driverRoutes } from "./driver.routes.js";
import { vehicleRoutes } from "./vehicle.routes.js";

const routes = express();

routes.use("/driver", driverRoutes);
routes.use("/vehicle", vehicleRoutes)

export {routes}
