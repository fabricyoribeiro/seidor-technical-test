export class GetDriverByIdController {
  constructor(getDriverByIdUseCase) {
    this.getDriverByIdUseCase = getDriverByIdUseCase;
  }

  async handle(request, response) {
    try {
      const id = request.params?.id;
      const driver = await this.getDriverByIdUseCase.execute(id);
      return response.status(200).json(driver);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
