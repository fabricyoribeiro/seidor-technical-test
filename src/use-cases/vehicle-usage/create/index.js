import { PostgresVehicleUsagesRepository } from "../../../repositories/PostgresVehicleUsagesRepository.js";
import { CreateVehicleUsageController } from "./CreateVehicleUsageController.js";
import { CreateVehicleUsageUseCase } from "./CreateVehicleUsageUseCase.js";

const postgresVehicleUsagesRepository = new PostgresVehicleUsagesRepository();

const createVehicleUsageUseCase = new CreateVehicleUsageUseCase(postgresVehicleUsagesRepository);

const createVehicleUsageController = new CreateVehicleUsageController(createVehicleUsageUseCase);

export { createVehicleUsageUseCase, createVehicleUsageController };
