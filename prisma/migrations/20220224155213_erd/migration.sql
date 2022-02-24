

CREATE TYPE "Status" AS ENUM ('PACKAGING', 'OUT_FOR_DELIVERY', 'COMPLETED', 'CANCELLED');


CREATE TYPE "PaymentOption" AS ENUM ('COD', 'CARD', 'GCASH', 'PAYMAYA', 'GRABPAY');


CREATE TYPE "Category" AS ENUM ('PORK', 'CHICKEN', 'BEEF');


ALTER TYPE "Role" ADD VALUE 'GUEST';


ALTER TABLE "User" DROP COLUMN "content",
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "username" TEXT;


CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "houseNumber" TEXT,
    "streetName" TEXT,
    "barangay" TEXT,
    "city" TEXT,
    "province" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "amount" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "paymentOption" "PaymentOption" NOT NULL,
    "paymentReference" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderId" TEXT,
    "imageUrl" TEXT,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
 CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
 CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");


ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE "Product" ADD CONSTRAINT "Product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
