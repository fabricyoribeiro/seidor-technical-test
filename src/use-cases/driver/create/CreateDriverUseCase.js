import { Driver } from "../../../entities/Driver.js"

export class CreateDriverUseCase {

    constructor (driversRepository){
        this.driversRepository = driversRepository
    }

    async execute(data){
        console.log(data)
        const driver = new Driver(data)


        const result = await this.driversRepository.save(driver)
        return result
        
    }
}