import { VehicleUsage } from "../../../entities/VehicleUsage.js"

export class CreateVehicleUsageUseCase {

    constructor (vehicleUsagesRepository){
        this.vehicleUsagesRepository = vehicleUsagesRepository
    }

    async execute(data){
        const vehicleUsage = new VehicleUsage(data)
        const result = await this.vehicleUsagesRepository.save(vehicleUsage)
        return result
    }
}