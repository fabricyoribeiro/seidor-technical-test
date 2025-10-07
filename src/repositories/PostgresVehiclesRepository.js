import { prisma } from "../database/prisma.js";

export class PostgresVehiclesRepository {
  async save(vehicle) {
    try {
      await prisma.vehicle.create({
        data: vehicle,
      });
    } catch (error) {
      throw new Error(`error while saving vehicle ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const vehicle = await prisma.vehicle.findFirst({ where: { id } });
      return vehicle;
    } catch (error) {
      throw new Error(`error while getting vehicle ${error.message}`);
    }
  }

  async findByPlate(plate) {
    try {
      const vehicle = await prisma.vehicle.findFirst({ where: { plate } });
      return vehicle;
    } catch (error) {
      throw new Error(`error while getting vehicle ${error.message}`);
    }
  }
  async update(id, data) {
    try {
      await prisma.vehicle.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`error while updating vehicle: ${error.message}`);
    }
  }
  async delete(id) {
    try {
      await prisma.vehicle.delete({ where: { id } });
    } catch (error) {
      throw new Error(`error while deleting vehicle: ${error.message}`);
    }
  }

  async getAll() {
    try {
      const vehicles = prisma.vehicle.findMany();
      return vehicles;
    } catch (error) {
      throw new Error(`error while getting vehicles: ${error.message}`);
    }
  }
  async filterByBrand(brand) {
    try {
      const filteredVehicles = await prisma.vehicle.findMany({
        where: {
          brand: {
            contains: brand,
            mode: "insensitive",
          },
        },
      });

      return filteredVehicles;
    } catch (error) {
      throw new Error(`error while getting vehicles: ${error.message}`);
    }
  }

  async filterByColor(color) {
    try {
      const filteredVehicles = await prisma.vehicle.findMany({
        where: {
          color: {
            contains: color,
            mode: "insensitive",
          },
        },
      });
      
      console.log(filteredVehicles)
      return filteredVehicles;
    } catch (error) {
      throw new Error(`error while getting vehicles: ${error.message}`);
    }
  }
}
