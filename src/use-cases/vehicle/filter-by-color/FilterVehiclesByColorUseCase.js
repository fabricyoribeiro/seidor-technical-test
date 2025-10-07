export class FilterVehiclesByColorUseCase {
  constructor(vehiclesRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  async execute(color) {
    if (!color) {
      throw new Error("invalid color");
    }

    const filteredVehicles = await this.vehiclesRepository.filterByColor(color);

    return filteredVehicles;
  }
}
