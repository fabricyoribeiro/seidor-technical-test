import z from "zod";

export class FinishUsageController {
  constructor(finishVehicleUsageUseCase) {
    this.finishVehicleUsageUseCase = finishVehicleUsageUseCase;
  }

  async handle(request, response) {
    try {
      const id = request.params?.id;

      await this.finishVehicleUsageUseCase.execute(id);

      return response.status(200).json({ message: "usage finished" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
