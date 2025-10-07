import { PostgresVehiclesRepository } from "../../../repositories/PostgresVehiclesRepository.js";
import { FilterVehiclesByBrandUseCase } from "./FilterVehiclesByBrandUseCase.js";
import { FilterVehiclesByBrandController } from "./FilterVehiclesByBrandController.js";

const postgresVehiclesRepository = new PostgresVehiclesRepository()

const filterVehiclesByBrandUseCase = new FilterVehiclesByBrandUseCase(postgresVehiclesRepository)

const filterVehiclesByBrandController = new FilterVehiclesByBrandController(filterVehiclesByBrandUseCase)

export {filterVehiclesByBrandUseCase, filterVehiclesByBrandController}