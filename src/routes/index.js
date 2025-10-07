import express from "express";
import { driverRoutes } from "./driver.routes.js";

const routes = express();

routes.use("/driver", driverRoutes);

export {routes}
