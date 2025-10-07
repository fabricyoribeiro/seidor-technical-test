import { Driver } from "../../../entities/Driver.js";

export class UpdateVehicleUseCase {
  constructor(vehiclesRepository) {
    this.vehiclesRepository = vehiclesRepository;
  }

  async execute(id, data) {
    if (!id) {
      throw new Error("error while updating vehicle. invalid id");
    }

    const vehicleExists = await this.vehiclesRepository.findById(id)

    if(!vehicleExists){
      throw new Error("error while updating vehicle. vehicle does not exists");
    }

    await this.vehiclesRepository.update(id, data);
    
  }
}
