import { PostgresVehicleUsagesRepository } from "../../../repositories/PostgresVehicleUsagesRepository.js";
import { FinishUsageController } from "./FinishUsageController.js";
import { FinishUsageUseCase } from "./FinishUsageUseCase.js";

const postgresVehicleUsagesRepository = new PostgresVehicleUsagesRepository();

const finishUsageUseCase = new FinishUsageUseCase(postgresVehicleUsagesRepository);

const finishUsageController = new FinishUsageController(finishUsageUseCase);

export { finishUsageUseCase, finishUsageController };
