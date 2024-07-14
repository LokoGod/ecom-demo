-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "prodcutPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryRecord" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "InventoryRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdcutType" (
    "id" SERIAL NOT NULL,
    "productTypeName" TEXT NOT NULL,

    CONSTRAINT "ProdcutType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdcutCategory" (
    "id" SERIAL NOT NULL,
    "productCategoryName" TEXT NOT NULL,

    CONSTRAINT "ProdcutCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "sizeName" TEXT NOT NULL,
    "sizeValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InventoryRecord" ADD CONSTRAINT "InventoryRecord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
