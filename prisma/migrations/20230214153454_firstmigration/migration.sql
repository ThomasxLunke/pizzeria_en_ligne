-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('MENUPROMO', 'PIZZAS', 'ENTREE', 'SAUCES', 'DESSERTS', 'BOISSONS', 'AUTRES');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAd" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "vegetarian" BOOLEAN NOT NULL,
    "productType" "ProductType" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
