import z from "zod";

export class DeleteVehicleController {
  constructor(deleteVehicleUseCase) {
    this.deleteVehicleUseCase = deleteVehicleUseCase;
  }

  async handle(request, response) {
    try {
      const plate = request.params?.plate;
      await this.deleteVehicleUseCase.execute(plate);
      return response.status(200).json({ message: "vehicle deleted" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
