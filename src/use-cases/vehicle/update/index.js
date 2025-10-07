import { PostgresVehiclesRepository } from "../../../repositories/PostgresVehiclesRepository.js";
import { UpdateVehicleController } from "./UpdateVehicleController.js";
import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase.js";

const postgresVehiclesRepository = new PostgresVehiclesRepository();

const updateVehicleUseCase = new UpdateVehicleUseCase(postgresVehiclesRepository);

const updateVehicleController = new UpdateVehicleController(updateVehicleUseCase);

export { updateVehicleUseCase, updateVehicleController };
