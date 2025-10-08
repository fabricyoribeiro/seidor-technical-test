import {DeleteDriverUseCase} from './DeleteDriverUseCase'

describe('delete driver', () => {
    it('shold delete a driver', async () => {
        const mockRepository = {
            delete: vi.fn(),
            findById: vi.fn().mockResolvedValue({id: 'abc', name: 'fabricyo'})
        }

        const deleteDriverUseCase = new DeleteDriverUseCase(mockRepository)
        await deleteDriverUseCase.execute('abc')

        expect(mockRepository.findById('abc')).resolves.toEqual({id: 'abc', name: 'fabricyo'})
        expect(mockRepository.delete).toHaveBeenCalled()
    })

    it('shold throw an error if driver does not exist', async () => {
        const mockRepository = {
            delete: vi.fn(),
            findById: vi.fn().mockResolvedValue(null)
        }

        const deleteDriverUseCase = new DeleteDriverUseCase(mockRepository)

        await expect(deleteDriverUseCase.execute('abc')).rejects.toThrowError('error while deleting driver. driver does not exists')
        expect(mockRepository.delete).not.toHaveBeenCalled()
    })
})