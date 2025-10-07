import { uuid } from "uuidv4"

export class VehicleUsage {

    constructor({ reason, driverId, vehicleId, id}){
        this.startDate = new Date()
        this.reason = reason
        this.driverId = driverId
        this.vehicleId = vehicleId

        if(!id){
            this.id = uuid()
        }
    }
}