export class GetAllVehiclesController {
  constructor(getAllVehiclesUseCase) {
    this.getAllVehiclesUseCase = getAllVehiclesUseCase;
  }

  async handle(request, response) {
    try {
      const vehicles = await this.getAllVehiclesUseCase.execute();
      return response.status(200).json(vehicles);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
