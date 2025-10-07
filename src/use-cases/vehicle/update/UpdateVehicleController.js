import z from "zod";

export class UpdateVehicleController {
  constructor(updateVehicleUseCase) {
    this.updateVehicleUseCase = updateVehicleUseCase;
  }

  async handle(request, response) {
    try {
      const reqBody = z.object({
        plate: z.string(),
        color: z.string(),
        brand: z.string(),
      });

      const id = request.params?.id;

      const data = reqBody.parse(request.body);

      await this.updateVehicleUseCase.execute(id, data);

      return response.status(200).json({ message: "vehicle updated" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: "invalid fields" });
      }
      return response.status(400).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
