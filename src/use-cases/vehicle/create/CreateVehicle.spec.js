import { CreateVehicleUseCase } from "./CreateVehicleUseCase"

describe("create vehicle", () => {
  it("should be able to create a new vehicle", async () => {
    const mockRepository = {
      save: vi.fn().mockResolvedValue({ id: "abc", plate: "abc123", color: "black", brand: "fiat"}),
    };

    const createVehicleUseCase = new CreateVehicleUseCase(mockRepository);

    const result = await createVehicleUseCase.execute({ id: "abc", plate: "abc123", color: "black", brand: "fiat"});

    expect(mockRepository.save).toHaveBeenCalled();
    expect(result).toEqual({ id: "abc", plate: "abc123", color: "black", brand: "fiat"});
  });
});
