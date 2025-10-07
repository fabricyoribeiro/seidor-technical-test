import { PostgresDriversRepository } from "../../../repositories/PostgresDriversRepository.js";
import { UpdateDriverController } from "./UpdateDriverController.js";
import { UpdateDriverUseCase } from "./UpdateDriverUseCase.js";

const postgresDriversRepository = new PostgresDriversRepository();

const updateDriverUseCase = new UpdateDriverUseCase(postgresDriversRepository);

const updateDriverController = new UpdateDriverController(updateDriverUseCase);

export { updateDriverUseCase, updateDriverController };
