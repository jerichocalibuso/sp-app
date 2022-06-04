/*
  Warnings:

  - You are about to drop the column `barangay` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `houseNumber` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `streetName` on the `Address` table. All the data in the column will be lost.
  - Added the required column `nickname` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'IN_CART';

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "barangay",
DROP COLUMN "houseNumber",
DROP COLUMN "streetName",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "contactPerson" TEXT,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "paidAt" TIMESTAMP(3),
ADD COLUMN     "paymentIntentId" TEXT,
ADD COLUMN     "productIds" TEXT[],
ADD COLUMN     "sourceId" TEXT,
ALTER COLUMN "paymentOption" DROP NOT NULL;
