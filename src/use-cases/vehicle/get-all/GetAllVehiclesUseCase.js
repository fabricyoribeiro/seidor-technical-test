
export class GetAllVehiclesUseCase {
    constructor(vehiclesRepository){
        this.vehiclesRepository = vehiclesRepository
    }

    async execute(){
        const vehicles = this.vehiclesRepository.getAll()
        return vehicles
    }

}