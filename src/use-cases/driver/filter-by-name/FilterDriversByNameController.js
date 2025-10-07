export class FilterDriversByNameController {
  constructor(filterDriversByNameUseCase) {
    this.filterDriversByNameUseCase = filterDriversByNameUseCase;
  }

  async handle(request, response) {
    try {
      const name = request.query?.name;
      const drivers = await this.filterDriversByNameUseCase.execute(name);
      return response.status(200).json(drivers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
