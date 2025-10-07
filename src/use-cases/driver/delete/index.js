import { PostgresDriversRepository } from "../../../repositories/PostgresDriversRepository.js";
import { DeleteDriverController } from "./DeleteDriverController.js";
import { DeleteDriverUseCase } from "./DeleteDriverUseCase.js";

const postgresDriversRepository = new PostgresDriversRepository();

const deleteDriverUseCase = new DeleteDriverUseCase(postgresDriversRepository);

const deleteDriverController = new DeleteDriverController(deleteDriverUseCase);

export { deleteDriverUseCase, deleteDriverController };
