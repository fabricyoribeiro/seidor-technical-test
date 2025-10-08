import { FilterVehiclesByColorUseCase }from "./FilterVehiclesByColorUseCase"

describe('filter vehicles by color', () => {
    it('should return all vehicles that includes the color provided', async () => {
        const mockVehicles = [
            { id: '123', brand: 'fiat', color: 'blue', plate: 'abc123' },
            { id: '456', brand: 'vw', color: 'blue', plate: 'dfv345' },
            { id: '789', brand: 'chevrolet', color: 'blue', plate: 'fgh667' },
        ]

        const mockRepository = {
            filterByColor: vi.fn().mockResolvedValue(mockVehicles)
        }

        const filterVehiclesByColorUseCase = new FilterVehiclesByColorUseCase(mockRepository)
        const vehicles = await filterVehiclesByColorUseCase.execute('blue')

        expect(vehicles).toEqual(mockVehicles)
        expect(mockRepository.filterByColor).toHaveBeenCalled()

    })

    it('should retun an empty array if no vehicles exist with the color provided', async () => {
        const mockRepository = {
            filterByColor: vi.fn().mockResolvedValue([])
        }

        const filterVehiclesByColorUseCase = new FilterVehiclesByColorUseCase(mockRepository)
        const vehicles = await filterVehiclesByColorUseCase.execute('blue')

        expect(vehicles).toEqual([])
        expect(mockRepository.filterByColor).toHaveBeenCalled()
    })
})