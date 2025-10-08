import { GetAllDriversUseCase } from "./GetAllDriversUseCase"

describe('get all drivers', () => {
    it('should return all drivers', async () => {
        const mockDrivers = [
            { id: 'abc', name: 'fabricyo' },
            { id: 'def', name: 'ribeiro' },
            { id: 'ghi', name: 'silva' },
        ]

        const mockRepository = {
            getAll: vi.fn().mockResolvedValue(mockDrivers)
        }

        const getAllDriversUseCase = new GetAllDriversUseCase(mockRepository)
        const drivers = await getAllDriversUseCase.execute()

        expect(drivers).toEqual(mockDrivers)
    })

    it('should retun an empty array if no drivers exist', async () => {
        const mockRepository = {
            getAll: vi.fn().mockResolvedValue([])
        }

        const getAllDriversUseCase = new GetAllDriversUseCase(mockRepository)
        const drivers = await getAllDriversUseCase.execute()

        expect(drivers).toEqual([])
        expect(mockRepository.getAll).toHaveBeenCalled()
    })
})