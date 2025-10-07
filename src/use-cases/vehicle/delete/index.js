import { PostgresVehiclesRepository } from "../../../repositories/PostgresVehiclesRepository.js";
import { DeleteVehicleController } from "./DeleteVehicleController.js";
import { DeleteVehicleUseCase } from "./DeleteVehicleUseCase.js";

const postgresVehiclesRepository = new PostgresVehiclesRepository();

const deleteVehicleUseCase = new DeleteVehicleUseCase(postgresVehiclesRepository);

const deleteVehicleController = new DeleteVehicleController(deleteVehicleUseCase);

export { deleteVehicleUseCase, deleteVehicleController };
