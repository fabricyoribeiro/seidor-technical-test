import { UpdateDriverUseCase } from "./UpdateDriverUseCase";

describe("update driver", () => {
  it("shold be able to update a driver", async () => {
    const mockRepository = {
      update: vi.fn(),
      findById: vi.fn().mockResolvedValue({ id: "abc", name: "fabricyo" }),
    };

    const updateDriverUseCase = new UpdateDriverUseCase(mockRepository);

    await updateDriverUseCase.execute("abc", { name: "fabricyo ribeiro" });

    await expect(mockRepository.findById("abc")).resolves.toEqual({
      id: "abc",
      name: "fabricyo",
    });
    expect(mockRepository.update).toHaveBeenCalled();
  });

  it("should throw an error if driver does not exist", async () => {
    const mockRepository = {
      update: vi.fn(),
      findById: vi.fn().mockResolvedValue(null),
    };

    const updateDriverUseCase = new UpdateDriverUseCase(mockRepository);
    await expect(updateDriverUseCase.execute('abc', {name: 'fabricyo'})).rejects.toThrowError('error while updating driver. driver does not exists')
    expect(mockRepository.update).not.toHaveBeenCalled()
  });
});
