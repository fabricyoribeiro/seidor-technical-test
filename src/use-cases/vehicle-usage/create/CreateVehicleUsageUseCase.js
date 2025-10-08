import { VehicleUsage } from "../../../entities/VehicleUsage.js";

export class CreateVehicleUsageUseCase {
  constructor(vehicleUsagesRepository) {
    this.vehicleUsagesRepository = vehicleUsagesRepository;
  }

  async execute(data) {
    const vehicleInUseByDriver = await this.vehicleUsagesRepository.findVehicleInUseByDriver(data.driverId);

    if (vehicleInUseByDriver) {
      throw new Error("the driver is already using a vehicle");
    }

    const vehicleUsage = new VehicleUsage(data);
    const result = await this.vehicleUsagesRepository.save(vehicleUsage);
    return result;
  }
}
