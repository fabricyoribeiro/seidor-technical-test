import {Router} from 'express'
import { createVehicleController } from '../use-cases/vehicle/create/index.js'
import { deleteVehicleController } from '../use-cases/vehicle/delete/index.js'
import { getAllVehiclesController } from '../use-cases/vehicle/get-all/index.js'
import { updateVehicleController } from '../use-cases/vehicle/update/index.js'
import { filterVehiclesByColorController } from '../use-cases/vehicle/filter-by-color/index.js'
import { filterVehiclesByBrandController } from '../use-cases/vehicle/filter-by-brand/index.js'

const vehicleRoutes = Router()

vehicleRoutes.post('/', (request, response) => {
    createVehicleController.handle(request, response)
})

vehicleRoutes.delete('/:plate', (request, response) => {
    deleteVehicleController.handle(request, response)
})

vehicleRoutes.put('/:id', (request, response) => {
    updateVehicleController.handle(request, response)
})

vehicleRoutes.get('/filter-by-color/:color', (request, response) => {
    filterVehiclesByColorController.handle(request, response)
})

vehicleRoutes.get('/filter-by-brand/:brand', (request, response) => {
    filterVehiclesByBrandController.handle(request, response)
})

vehicleRoutes.get('/all', (request, response) => {
    getAllVehiclesController.handle(request, response)
})

export {vehicleRoutes}