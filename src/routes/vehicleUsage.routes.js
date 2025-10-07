import {Router} from 'express'
import { createVehicleUsageController } from '../use-cases/vehicle-usage/create/index.js'
import { finishUsageController } from '../use-cases/vehicle-usage/finish-usage/index.js'

const vehicleUsageRoutes = Router()

vehicleUsageRoutes.post('/', (request, reponse)=> {
    createVehicleUsageController.handle(request, reponse)
})

vehicleUsageRoutes.put('/finish-usage/:id', (request, reponse)=> {
    finishUsageController.handle(request, reponse)
})

export {vehicleUsageRoutes}