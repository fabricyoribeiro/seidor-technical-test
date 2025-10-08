import { prisma } from "../database/prisma.js";

export class PostgresVehicleUsagesRepository {
  async save(vehicleUsage) {
    try {
      await prisma.vehicleUsage.create({
        data: vehicleUsage,
      });
    } catch (error) {
      throw new Error(`error while saving vehicleUsage ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const vehicleUsage = await prisma.vehicleUsage.findFirst({ where: { id } });
      return vehicleUsage;
    } catch (error) {
      throw new Error(`error while getting vehicleUsage ${error.message}`);
    }
  }


  async finishUsage(id, data) {
    try {
      await prisma.vehicleUsage.update({
        where: { id },
        data: {
          endDate: new Date()
        }
      });
    } catch (error) {
      throw new Error(`error while updating finishing usage: ${error.message}`);
    }
  }


  async getAll() {
    try {
      const vehicleUsages = prisma.vehicleUsage.findMany({
        include: {
          driver: true,
          vehicle: true
        }
      });
      return vehicleUsages;
    } catch (error) {
      throw new Error(`error while getting vehicle usages: ${error.message}`);
    }
  }

  async findVehicleInUseByDriver(id) {
    try {
      const vehicleUsage = await prisma.vehicleUsage.findFirst({
        where: {
          driverId: id,
          endDate: null
        },
        include: {
          driver: true,
          vehicle: true
        }
      });
      console.log(vehicleUsage)
      return vehicleUsage;
    } catch (error) {
      throw new Error(`error while find vehicle usages: ${error.message}`);
    }
  }

}
