import { Vehicle } from "../../../entities/Vehicle.js"

export class CreateVehicleUseCase {

    constructor (vehicleRepository){
        this.vehicleRepository = vehicleRepository
    }

    async execute(data){
        const vehicle = new Vehicle(data)
        const result = await this.vehicleRepository.save(vehicle)
        return result
    }
}