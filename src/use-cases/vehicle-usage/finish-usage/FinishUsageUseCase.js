import { Driver } from "../../../entities/Driver.js";

export class FinishUsageUseCase {
  constructor(vehicleUsagesRepository) {
    this.vehicleUsagesRepository = vehicleUsagesRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("error while finishing vehicle usage. invalid id");
    }

    const vehicleUsageExists = await this.vehicleUsagesRepository.findById(id)

    if(!vehicleUsageExists){
      throw new Error("error while finishing vehicle usage. vehicle usage does not exists");
    }

    await this.vehicleUsagesRepository.finishUsage(id);
    
  }
}
