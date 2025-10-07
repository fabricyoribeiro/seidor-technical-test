import { PostgresDriversRepository } from "../../../repositories/PostgresDriversRepository.js";
import { GetAllDriversController } from "./GetAllDriversController.js";
import { GetAllDriversUseCase } from "./GetAllDriversUseCase.js";

const postgresDriversRepository = new PostgresDriversRepository()

const getAllDriversUseCase = new GetAllDriversUseCase(postgresDriversRepository)

const getAllDriversController = new GetAllDriversController(getAllDriversUseCase)

export {getAllDriversUseCase, getAllDriversController}