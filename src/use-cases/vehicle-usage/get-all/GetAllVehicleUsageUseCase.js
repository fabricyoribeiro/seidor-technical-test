
export class GetAllVehicleUsageUseCase {
    constructor(vehicleUsageRepository){
        this.vehicleUsageRepository = vehicleUsageRepository
    }

    async execute(){
        const vehicleUsage = this.vehicleUsageRepository.getAll()
        return vehicleUsage
    }

}