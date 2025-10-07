import z from "zod";

export class DeleteDriverController {
  constructor(deleteDriverUseCase) {
    this.deleteDriverUseCase = deleteDriverUseCase;
  }

  async handle(request, response) {
    try {
      const id = request.params?.id;
      await this.deleteDriverUseCase.execute(id);
      return response.status(200).json({ message: "driver deleted" });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
