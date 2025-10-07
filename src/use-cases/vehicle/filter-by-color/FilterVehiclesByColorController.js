export class FilterVehiclesByColorController {
  constructor(filterVehiclesByColorUseCase) {
    this.filterVehiclesByColorUseCase = filterVehiclesByColorUseCase;
  }

  async handle(request, response) {
    try {
      const color = request.params?.color;
      const vehicles = await this.filterVehiclesByColorUseCase.execute(color);
      return response.status(200).json(vehicles);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
