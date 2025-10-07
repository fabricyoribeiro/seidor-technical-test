import { Vehicle } from "../../../entities/Vehicle.js";

export class DeleteVehicleUseCase {
  constructor(vehiclesRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  async execute(plate) {
    if (!plate) {
      throw new Error("error while deleting vehicle. invalplate plate");
    }

    const vehicleExists = await this.vehiclesRepository.findByPlate(plate)

    if(!vehicleExists){
      throw new Error("error while deleting vehicle. vehicle does not exists");
    }

    await this.vehiclesRepository.delete(vehicleExists.id);
    
  }
}
