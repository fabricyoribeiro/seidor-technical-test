import z from "zod";

export class CreateVehicleUsageController {
  constructor(createVehicleUsageUseCase) {
    this.createVehicleUsageUseCase = createVehicleUsageUseCase;
  }

  async handle(request, response) {
    try {
      const reqBody = z.object({
        reason: z.string(),
        driverId: z.string(),
        vehicleId: z.string(),
      });

      const { reason, driverId, vehicleId } = reqBody.parse(request.body);

      await this.createVehicleUsageUseCase.execute({ reason, driverId, vehicleId });

      return response.status(201).send();
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
