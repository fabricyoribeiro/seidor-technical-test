import { describe, vi, expect, it } from "vitest";
import { CreateDriverUseCase } from "./CreateDriverUseCase.js";

describe("create driver", () => {
  it("should be able to create a new driver", async () => {
    const mockRepository = {
      save: vi.fn().mockResolvedValue({ id: "abc", name: "fabricyo" }),
    };

    const createDriverUseCase = new CreateDriverUseCase(mockRepository);

    const result = await createDriverUseCase.execute({ name: "fabricyo" });

    expect(mockRepository.save).toHaveBeenCalled();
    expect(result).toEqual({ id: "abc", name: "fabricyo" });
  });
});
