import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

describe("update vehicle", () => {
  it("shold be able to update a vehicle", async () => {
    const mockRepository = {
      update: vi.fn(),
      findById: vi.fn().mockResolvedValue({ id: '123', brand: 'chevrolet', color: 'blue', plate: 'fgh667' })
    };

    const updateVehicleUseCase = new UpdateVehicleUseCase(mockRepository);

    await updateVehicleUseCase.execute("123", { brand: 'fiat', color: 'white', plate: 'fgh667' });

    await expect(mockRepository.findById("123")).resolves.toEqual({ id: '123', brand: 'chevrolet', color: 'blue', plate: 'fgh667' });
    expect(mockRepository.update).toHaveBeenCalled();
  });

  it("should throw an error if vehicle does not exist", async () => {
    const mockRepository = {
      update: vi.fn(),
      findById: vi.fn().mockResolvedValue(null),
    };

    const updateVehicleUseCase = new UpdateVehicleUseCase(mockRepository);
    await expect(updateVehicleUseCase.execute('123', { brand: 'fiat', color: 'white', plate: 'fgh667' })).rejects.toThrowError('error while updating vehicle. vehicle does not exists')
    expect(mockRepository.update).not.toHaveBeenCalled()
  });
});
