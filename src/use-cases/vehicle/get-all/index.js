import { PostgresVehiclesRepository } from "../../../repositories/PostgresVehiclesRepository.js";
import { GetAllVehiclesController } from "./GetAllVehiclesController.js";
import { GetAllVehiclesUseCase } from "./GetAllVehiclesUseCase.js";

const postgresVehiclesRepository = new PostgresVehiclesRepository()

const getAllVehiclesUseCase = new GetAllVehiclesUseCase(postgresVehiclesRepository)

const getAllVehiclesController = new GetAllVehiclesController(getAllVehiclesUseCase)

export {getAllVehiclesUseCase, getAllVehiclesController}