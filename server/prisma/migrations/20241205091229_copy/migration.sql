/*
  Warnings:

  - You are about to drop the column `copies` on the `Analytics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "copies";

-- CreateTable
CREATE TABLE "Copy" (
    "id" SERIAL NOT NULL,
    "session_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "marital_status" "MaritalStatus" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,
    "newspaperId" INTEGER NOT NULL,

    CONSTRAINT "Copy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Copy" ADD CONSTRAINT "Copy_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Copy" ADD CONSTRAINT "Copy_newspaperId_fkey" FOREIGN KEY ("newspaperId") REFERENCES "Newspaper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
