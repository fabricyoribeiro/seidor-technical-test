import { PostgresDriversRepository } from "../../../repositories/PostgresDriversRepository.js";
import { FilterDriversByNameUseCase } from "./FilterDriversByNameUseCase.js";
import { FilterDriversByNameController } from "./FilterDriversByNameController.js";

const postgresDriversRepository = new PostgresDriversRepository()

const filterDriversByNameUseCase = new FilterDriversByNameUseCase(postgresDriversRepository)

const filterDriversByNameController = new FilterDriversByNameController(filterDriversByNameUseCase)

export {filterDriversByNameUseCase, filterDriversByNameController}