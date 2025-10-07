
export class GetDriverByIdUseCase {
    constructor(driversRepository){
        this.driversRepository = driversRepository
    }

    async execute(id){
        if(!id){
            throw new Error('invalid id')
        }
        const driverExists = await this.driversRepository.findById(id)

        if(!driverExists){
            throw new Error('user does not exists')
        }

        return driverExists
    }

}