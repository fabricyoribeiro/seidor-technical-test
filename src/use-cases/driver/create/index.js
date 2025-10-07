import { PostgresDriversRepository } from "../../../repositories/PostgresDriversRepository.js";
import { CreateDriverController } from "./CreateDriverController.js";
import { CreateDriverUseCase } from "./CreateDriverUseCase.js";

const postgresDriversRepository = new PostgresDriversRepository();

const createDriverUseCase = new CreateDriverUseCase(postgresDriversRepository);

const createDriverController = new CreateDriverController(createDriverUseCase);

export { createDriverUseCase, createDriverController };
