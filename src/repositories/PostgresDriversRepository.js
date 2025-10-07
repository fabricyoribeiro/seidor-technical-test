import { prisma } from "../database/prisma.js";

export class PostgresDriversRepository {
  async save(driver) {
    try {
      await prisma.driver.create({
        data: driver,
      });
    } catch (error) {
      throw new Error(`error while saving driver ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const driver = await prisma.driver.findFirst({ where: { id } });
      return driver;
    } catch (error) {
      throw new Error(`error while getting driver ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      await prisma.driver.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`error while updating driver: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      await prisma.driver.delete({ where: { id } });
    } catch (error) {
      throw new Error(`error while deleting driver: ${error.message}`);
    }
  }

  async getAll() {
    try {
      const drivers = prisma.driver.findMany();
      return drivers;
    } catch (error) {
      throw new Error(`error while getting drivers: ${error.message}`);
    }
  }

  async filterByName(name) {
    try {
      const filteredDrivers = await prisma.driver.findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
      });

      return filteredDrivers;
    } catch (error) {
      throw new Error(`error while getting drivers: ${error.message}`);
    }
  }
}
