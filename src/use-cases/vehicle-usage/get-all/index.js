import { PostgresVehicleUsagesRepository } from "../../../repositories/PostgresVehicleUsagesRepository.js";
import { GetAllVehicleUsageController } from "./GetAllVehicleUsageController.js";
import { GetAllVehicleUsageUseCase } from "./GetAllVehicleUsageUseCase.js";

const postgresVehicleUsagesRepository = new PostgresVehicleUsagesRepository()

const getAllVehicleUsageUseCase = new GetAllVehicleUsageUseCase(postgresVehicleUsagesRepository)

const getAllVehicleUsageController = new GetAllVehicleUsageController(getAllVehicleUsageUseCase)

export {getAllVehicleUsageUseCase, getAllVehicleUsageController}