import { PostgresVehiclesRepository } from "../../../repositories/PostgresVehiclesRepository.js";
import { FilterVehiclesByColorUseCase } from "./FilterVehiclesByColorUseCase.js";
import { FilterVehiclesByColorController } from "./FilterVehiclesByColorController.js";

const postgresVehiclesRepository = new PostgresVehiclesRepository()

const filterVehiclesByColorUseCase = new FilterVehiclesByColorUseCase(postgresVehiclesRepository)

const filterVehiclesByColorController = new FilterVehiclesByColorController(filterVehiclesByColorUseCase)

export {filterVehiclesByColorUseCase, filterVehiclesByColorController}