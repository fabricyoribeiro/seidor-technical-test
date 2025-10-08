import { FilterVehiclesByBrandUseCase }from "./FilterVehiclesByBrandUseCase"

describe('filter vehicles by brand', () => {
    it('should return all vehicles that includes the brand provided', async () => {
        const mockDrivers = [
            { id: '123', brand: 'fiat', color: 'blue', plate: 'abc123' },
            { id: '456', brand: 'fiat', color: 'white', plate: 'dfv345' },
            { id: '789', brand: 'fiat', color: 'black', plate: 'fgh667' },
        ]

        const mockRepository = {
            filterByBrand: vi.fn().mockResolvedValue(mockDrivers)
        }

        const filterVehiclesByBrandUseCase = new FilterVehiclesByBrandUseCase(mockRepository)
        const vehicles = await filterVehiclesByBrandUseCase.execute('fiat')

        expect(vehicles).toEqual(mockDrivers)
        expect(mockRepository.filterByBrand).toHaveBeenCalled()

    })

    it('should retun an empty array if no vehicles exist with the brand provided', async () => {
        const mockRepository = {
            filterByBrand: vi.fn().mockResolvedValue([])
        }

        const filterVehiclesByBrandUseCase = new FilterVehiclesByBrandUseCase(mockRepository)
        const vehicles = await filterVehiclesByBrandUseCase.execute('fiat')

        expect(vehicles).toEqual([])
        expect(mockRepository.filterByBrand).toHaveBeenCalled()
    })
})