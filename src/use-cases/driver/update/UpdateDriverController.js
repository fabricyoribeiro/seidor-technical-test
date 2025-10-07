import z from "zod";

export class UpdateDriverController {
  constructor(updateDriverUseCase) {
    this.updateDriverUseCase = updateDriverUseCase;
  }

  async handle(request, response) {
    try {
      const reqBody = z.object({
        name: z.string(),
      });

      const id = request.params?.id

      const data = reqBody.parse(request.body);

      await this.updateDriverUseCase.execute(id, data);

      return response.status(200).json({message: 'driver updated'});
    } catch (error) { 
      if (error instanceof z.ZodError) {
        return response.status(400).json({ error: "invalid name" });
      }
      return response.status(400).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
