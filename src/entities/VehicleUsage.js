export class VehicleUsage {

    constructor({startDate, endDate, reason, driverId, vehicleId, id}){
        this.startDate = startDate
        this.endDate = endDate
        this.reason = reason
        this.driverId = driverId
        this.vehicleId = vehicleId

        if(!id){
            this.id = id
        }
    }
}