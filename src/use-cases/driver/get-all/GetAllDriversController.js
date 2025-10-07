export class GetAllDriversController {
  constructor(getAllDriversUseCase) {
    this.getAllDriversUseCase = getAllDriversUseCase;
  }

  async handle(request, response) {
    try {
      const drivers = await this.getAllDriversUseCase.execute();
      return response.status(200).json(drivers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
