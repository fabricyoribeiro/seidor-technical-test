export class FilterVehiclesByBrandUseCase {
  constructor(vehiclesRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  async execute(brand) {
    if (!brand) {
      throw new Error("invalid brand");
    }

    const filteredVehicles = await this.vehiclesRepository.filterByBrand(brand);

    return filteredVehicles;
  }
}
