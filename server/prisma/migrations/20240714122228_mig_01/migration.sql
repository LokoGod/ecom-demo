-- CreateTable
CREATE TABLE "Colors" (
    "id" SERIAL NOT NULL,
    "colorName" TEXT NOT NULL,
    "hexCode" INTEGER NOT NULL,

    CONSTRAINT "Colors_pkey" PRIMARY KEY ("id")
);
