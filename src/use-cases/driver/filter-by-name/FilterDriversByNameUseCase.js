export class FilterDriversByNameUseCase {
  constructor(driversRepository) {
    this.driversRepository = driversRepository;
  }

  async execute(name) {
    if (!name) {
      throw new Error("invalid name");
    }

    const filteredDrivers = await this.driversRepository.filterByName(name);

    return filteredDrivers;
  }
}
