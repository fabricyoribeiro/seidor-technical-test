-- AlterTable
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."Driver_id_key";

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleUsage" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "VehicleUsage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VehicleUsage" ADD CONSTRAINT "VehicleUsage_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleUsage" ADD CONSTRAINT "VehicleUsage_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
