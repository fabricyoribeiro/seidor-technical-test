
export class GetAllDriversUseCase {
    constructor(driversRepository){
        this.driversRepository = driversRepository
    }

    async execute(){
        const drivers = this.driversRepository.getAll()
        return drivers
    }

}