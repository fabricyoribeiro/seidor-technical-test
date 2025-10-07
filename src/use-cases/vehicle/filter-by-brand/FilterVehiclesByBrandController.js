export class FilterVehiclesByBrandController {
  constructor(filterVehiclesByBrandUseCase) {
    this.filterVehiclesByBrandUseCase = filterVehiclesByBrandUseCase;
  }

  async handle(request, response) {
    try {
      const brand = request.params?.brand;
      const vehicles = await this.filterVehiclesByBrandUseCase.execute(brand);
      return response.status(200).json(vehicles);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
