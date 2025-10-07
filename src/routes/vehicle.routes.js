import {Router} from 'express'
import { createVehicleController } from '../use-cases/vehicle/create/index.js'
import { deleteVehicleController } from '../use-cases/vehicle/delete/index.js'

const vehicleRoutes = Router()

vehicleRoutes.post('/', (request, response) => {
    createVehicleController.handle(request, response)
})

vehicleRoutes.delete('/:plate', (request, response) => {
    deleteVehicleController.handle(request, response)
})

export {vehicleRoutes}