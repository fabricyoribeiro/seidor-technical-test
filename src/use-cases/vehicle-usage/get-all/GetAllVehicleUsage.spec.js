import {  GetAllVehicleUsageUseCase } from "./GetAllVehicleUsageUseCase";

describe("get all vehicle usage", () => {
  it("should return all vehicle usage", async () => {
    const mockVehicleUsage = [
      {
        id: "abc",
        startDate: "2025-10-07T18:22:41.547Z",
        endDate: "2025-10-07T23:38:56.393Z",
        reason: "teste",
        driverId: "d01",
        vehicleId: "v01",
        driver: { id: "d01", name: "marcelo"},
        vehicle: { id: "v01", plate: "ABC213", color: "black", brand: "VW"}
      },
      {
        id: "aab",
        startDate: "2025-10-07T18:22:41.547Z",
        endDate: "",
        reason: "teste",
        driverId: "d02",
        vehicleId: "v02",
        driver: { id: "d02", name: "joao motorista"},
        vehicle: { id: "v02", plate: "AAB234", color: "black", brand: "VW"}
      }
    ];

    const mockRepository = {
      getAll: vi.fn().mockResolvedValue(mockVehicleUsage),
    };

    const getAllVehicleUsageUseCase = new GetAllVehicleUsageUseCase(mockRepository);
    const veicleUsage = await getAllVehicleUsageUseCase.execute();

    expect(veicleUsage).toEqual(mockVehicleUsage);
  });

  it("should retun an empty array if no veicleUsage exist", async () => {
    const mockRepository = {
      getAll: vi.fn().mockResolvedValue([]),
    };

    const getAllVehicleUsageUseCase = new GetAllVehicleUsageUseCase(mockRepository);
    const veicleUsage = await getAllVehicleUsageUseCase.execute();

    expect(veicleUsage).toEqual([]);
    expect(mockRepository.getAll).toHaveBeenCalled();
  });
});
