/*
  Warnings:

  - You are about to drop the column `service_id` on the `appointment_service` table. All the data in the column will be lost.
  - You are about to drop the column `service_id` on the `barber_service` table. All the data in the column will be lost.
  - You are about to drop the `service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `barbershop_service_id` to the `appointment_service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barbershop_service_id` to the `barber_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointment_service" DROP CONSTRAINT "appointment_service_service_id_fkey";

-- DropForeignKey
ALTER TABLE "barber_service" DROP CONSTRAINT "barber_service_service_id_fkey";

-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_barbershop_id_fkey";

-- AlterTable
ALTER TABLE "appointment_service" DROP COLUMN "service_id",
ADD COLUMN     "barbershop_service_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "barber_service" DROP COLUMN "service_id",
ADD COLUMN     "barbershop_service_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "service";

-- CreateTable
CREATE TABLE "barbershop_service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "barbershop_id" TEXT NOT NULL,

    CONSTRAINT "barbershop_service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "barbershop_service" ADD CONSTRAINT "barbershop_service_barbershop_id_fkey" FOREIGN KEY ("barbershop_id") REFERENCES "barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barber_service" ADD CONSTRAINT "barber_service_barbershop_service_id_fkey" FOREIGN KEY ("barbershop_service_id") REFERENCES "barbershop_service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_service" ADD CONSTRAINT "appointment_service_barbershop_service_id_fkey" FOREIGN KEY ("barbershop_service_id") REFERENCES "barbershop_service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
