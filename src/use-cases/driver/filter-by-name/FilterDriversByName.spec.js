import { FilterDriversByNameUseCase }from "./FilterDriversByNameUseCase"

describe('filter drivers by name', () => {
    it('should return all drivers that includes the name provided', async () => {
        const mockDrivers = [
            { id: '123', name: 'fabricyo ribeiro' },
            { id: '456', name: 'fabricyo silva' },
            { id: '789', name: 'fabricyo santos' },
        ]

        const mockRepository = {
            filterByName: vi.fn().mockResolvedValue(mockDrivers)
        }

        const filterDriversByNameUseCase = new FilterDriversByNameUseCase(mockRepository)
        const drivers = await filterDriversByNameUseCase.execute('fabricyo')

        expect(drivers).toEqual(mockDrivers)
        expect(mockRepository.filterByName).toHaveBeenCalled()

    })

    it('should retun an empty array if no drivers exist with the name provided', async () => {
        const mockRepository = {
            filterByName: vi.fn().mockResolvedValue([])
        }

        const filterDriversByNameUseCase = new FilterDriversByNameUseCase(mockRepository)
        const drivers = await filterDriversByNameUseCase.execute('fabricyo')

        expect(drivers).toEqual([])
        expect(mockRepository.filterByName).toHaveBeenCalled()
    })
})