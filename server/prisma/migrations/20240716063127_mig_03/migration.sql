/*
  Warnings:

  - You are about to drop the `ProdcutType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `colorOfInventoryRecordId` to the `InventoryRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizeOfInventoryRecordId` to the `InventoryRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodcutCategoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productTypeId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InventoryRecord" ADD COLUMN     "colorOfInventoryRecordId" INTEGER NOT NULL,
ADD COLUMN     "sizeOfInventoryRecordId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "prodcutCategoryId" INTEGER NOT NULL,
ADD COLUMN     "productTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ProdcutType";

-- CreateTable
CREATE TABLE "ProductType" (
    "id" SERIAL NOT NULL,
    "productTypeName" TEXT NOT NULL,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_prodcutCategoryId_fkey" FOREIGN KEY ("prodcutCategoryId") REFERENCES "ProdcutCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryRecord" ADD CONSTRAINT "InventoryRecord_colorOfInventoryRecordId_fkey" FOREIGN KEY ("colorOfInventoryRecordId") REFERENCES "Colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryRecord" ADD CONSTRAINT "InventoryRecord_sizeOfInventoryRecordId_fkey" FOREIGN KEY ("sizeOfInventoryRecordId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
