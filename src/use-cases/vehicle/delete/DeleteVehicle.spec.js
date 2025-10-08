import {DeleteVehicleUseCase} from './DeleteVehicleUseCase'

describe('delete vehicle', () => {
    it('shold delete a vehicle', async () => {
        const mockRepository = {
            delete: vi.fn(),
            findByPlate: vi.fn().mockResolvedValue({ id: "abc", plate: "abc123", color: "black", brand: "fiat"})
        }

        const deleteVehicleUseCase = new DeleteVehicleUseCase(mockRepository)
        await deleteVehicleUseCase.execute('abc')

        expect(mockRepository.findByPlate('abc')).resolves.toEqual({ id: "abc", plate: "abc123", color: "black", brand: "fiat"})
        expect(mockRepository.delete).toHaveBeenCalled()
    })

    it('shold throw an error if vehicle does not exist', async () => {
        const mockRepository = {
            delete: vi.fn(),
            findByPlate: vi.fn().mockResolvedValue(null)
        }

        const deleteVehicleUseCase = new DeleteVehicleUseCase(mockRepository)

        await expect(deleteVehicleUseCase.execute('abc')).rejects.toThrowError('error while deleting vehicle. vehicle does not exists')
        expect(mockRepository.delete).not.toHaveBeenCalled()
    })
})