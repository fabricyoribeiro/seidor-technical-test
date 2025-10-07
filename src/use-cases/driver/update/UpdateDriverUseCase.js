import { Driver } from "../../../entities/Driver.js";

export class UpdateDriverUseCase {
  constructor(driversRepository) {
    this.driversRepository = driversRepository;
  }

  async execute(id, data) {
    if (!id) {
      throw new Error("error while updating driver. invalid id");
    }

    const driverExists = await this.driversRepository.findById(id)

    if(!driverExists){
      throw new Error("error while updating driver. user does not exists");
    }

    await this.driversRepository.update(id, data);
    
  }
}
