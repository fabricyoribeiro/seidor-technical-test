import { GetAllVehiclesUseCase } from "./GetAllVehiclesUseCase"

describe('get all vehicles', () => {
    it('should return all vehicles', async () => {
        const mockVehicles = [
            { id: '123', brand: 'fiat', color: 'blue', plate: 'abc123' },
            { id: '456', brand: 'vw', color: 'blue', plate: 'dfv345' },
            { id: '789', brand: 'chevrolet', color: 'blue', plate: 'fgh667' },
        ]

        const mockRepository = {
            getAll: vi.fn().mockResolvedValue(mockVehicles)
        }

        const getAllVehiclesUseCase = new GetAllVehiclesUseCase(mockRepository)
        const vehicles = await getAllVehiclesUseCase.execute()

        expect(vehicles).toEqual(mockVehicles)
    })

    it('should retun an empty array if no vehicles exist', async () => {
        const mockRepository = {
            getAll: vi.fn().mockResolvedValue([])
        }

        const getAllVehiclesUseCase = new GetAllVehiclesUseCase(mockRepository)
        const vehicles = await getAllVehiclesUseCase.execute()

        expect(vehicles).toEqual([])
        expect(mockRepository.getAll).toHaveBeenCalled()
    })
})