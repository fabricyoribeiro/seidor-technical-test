import { CreateVehicleUsageUseCase } from "./CreateVehicleUsageUseCase"

describe("create vehicle usage", () => {
  it("should be able to create a new vehicle usage with startDate and without endDate", async () => {
    const mockRepository = {
      save: vi.fn().mockResolvedValue({ id: "abc", startDate: "2025-10-07 18:22:41.547", endDate: "", reason: "teste", driverId: "abc", vehicleId: "123" }),
      findVehicleInUseByDriver: vi.fn().mockResolvedValue(null)
    };

    const createVehicleUsageUseCase = new CreateVehicleUsageUseCase(mockRepository);

    const result = await createVehicleUsageUseCase.execute({ startDate: "2025-10-07 18:22:41.547", endDate: "", reason: "teste", driverId: "abc", vehicleId: "123" });

    expect(mockRepository.save).toHaveBeenCalled();
    expect(result).toEqual({ id: "abc", startDate: "2025-10-07 18:22:41.547", endDate: "", reason: "teste", driverId: "abc", vehicleId: "123" });
  });
});
