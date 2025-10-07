import { PostgresDriversRepository } from "../../../repositories/PostgresDriversRepository.js";
import { GetDriverByIdUseCase } from "./GetDriverByIdUseCase.js";
import { GetDriverByIdController } from "./GetDriverByIdController.js";

const postgresDriversRepository = new PostgresDriversRepository()

const getDriverByIdsUseCase = new GetDriverByIdUseCase(postgresDriversRepository)

const getDriverByIdController = new GetDriverByIdController(getDriverByIdsUseCase)

export {getDriverByIdsUseCase, getDriverByIdController}