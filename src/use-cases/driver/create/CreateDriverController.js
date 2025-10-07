import z from "zod";

export class CreateDriverController {
  constructor(createDriverUseCase) {
    this.createDriverUseCase = createDriverUseCase;
  }

  async handle(request, response) {
    try {
      const reqBody = z.object({
        name: z.string(),
      });

      const { name } = reqBody.parse(request.body);

      await this.createDriverUseCase.execute({ name });

      return response.status(201).send();
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
