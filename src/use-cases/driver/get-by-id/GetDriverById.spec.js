import { GetDriverByIdUseCase } from "./GetDriverByIdUseCase"

describe('get driver by id', () => {
    it('should get and return the driver with the id provided', async () => {

        const mockRepository = {
            findById: vi.fn().mockResolvedValue({ id: '123', name: 'fabricyo ribeiro' })
        }

        const getDriverById = new GetDriverByIdUseCase(mockRepository)
        const driver = await getDriverById.execute('123')

        expect(driver).toEqual({ id: '123', name: 'fabricyo ribeiro' })
        expect(mockRepository.findById).toHaveBeenCalled()

    })

    it('should throw an error if no driver exist with the id provided', async () => {
        const mockRepository = {
            findById: vi.fn().mockResolvedValue(null)
        }

        const getDriverById = new GetDriverByIdUseCase(mockRepository)
        
        await expect(getDriverById.execute('123')).rejects.toThrowError('driver does not exists')

        expect(mockRepository.findById).toHaveBeenCalled()
    })
})