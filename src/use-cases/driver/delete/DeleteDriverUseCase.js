import { Driver } from "../../../entities/Driver.js";

export class DeleteDriverUseCase {
  constructor(driversRepository) {
    this.driversRepository = driversRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("error while deleting driver. invalid id");
    }

    const driverExists = await this.driversRepository.findById(id)

    if(!driverExists){
      throw new Error("error while deleting driver. user does not exists");
    }

    await this.driversRepository.delete(id);
    
  }
}
