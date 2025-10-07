import z from "zod";

export class CreateVehicleController {
  constructor(createVehicleUseCase) {
    this.createVehicleUseCase = createVehicleUseCase;
  }

  async handle(request, response) {
    try {
      const reqBody = z.object({
        plate: z.string(),
        color: z.string(),
        brand: z.string(),
      });

      const { plate, color, brand } = reqBody.parse(request.body);

      await this.createVehicleUseCase.execute({ plate, color, brand });

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
