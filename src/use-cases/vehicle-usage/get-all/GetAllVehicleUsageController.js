export class GetAllVehicleUsageController {
  constructor(getAllVehicleUsageUseCase) {
    this.getAllVehicleUsageUseCase = getAllVehicleUsageUseCase;
  }

  async handle(request, response) {
    try {
      const vehicleUsage = await this.getAllVehicleUsageUseCase.execute();
      return response.status(200).json(vehicleUsage);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
