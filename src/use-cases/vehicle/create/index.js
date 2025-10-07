import { PostgresVehiclesRepository } from "../../../repositories/PostgresVehiclesRepository.js";
import { CreateVehicleController } from "./CreateVehicleController.js";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase.js";

const postgresVehiclesRepository = new PostgresVehiclesRepository();

const createVehicleUseCase = new CreateVehicleUseCase(postgresVehiclesRepository);

const createVehicleController = new CreateVehicleController(createVehicleUseCase);

export { createVehicleUseCase, createVehicleController };
