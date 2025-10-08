import { FinishUsageUseCase } from "./FinishUsageUseCase";

describe("finish vehicle usage", () => {
  it("shold be able to finish a vehicle usage", async () => {
    const mockRepository = {
      finishUsage: vi.fn(),
      findById: vi.fn().mockResolvedValue({ id: "abc", startDate: "2025-10-07 18:22:41.547", endDate: "", reason: "teste", driverId: "abc", vehicleId: "123" })
    };

    const finishUsageUseCase = new FinishUsageUseCase(mockRepository);

    await finishUsageUseCase.execute("123");

    await expect(mockRepository.findById("123")).resolves.toEqual({ id: "abc", startDate: "2025-10-07 18:22:41.547", endDate: "", reason: "teste", driverId: "abc", vehicleId: "123" });
    expect(mockRepository.finishUsage).toHaveBeenCalled();
  });

  it("should throw an error if vehicle usage does not exist", async () => {
    const mockRepository = {
      finishUsage: vi.fn(),
      findById: vi.fn().mockResolvedValue(null),
    };

    const finishUsageUseCase = new FinishUsageUseCase(mockRepository);
    await expect(finishUsageUseCase.execute('123')).rejects.toThrowError('error while finishing vehicle usage. vehicle usage does not exists')
    expect(mockRepository.finishUsage).not.toHaveBeenCalled()
  });
});
