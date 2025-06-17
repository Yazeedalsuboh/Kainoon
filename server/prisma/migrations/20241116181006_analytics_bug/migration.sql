/*
  Warnings:

  - The primary key for the `Analytics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Analytics` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Analytics_articleId_key";

-- AlterTable
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
ADD CONSTRAINT "Analytics_pkey" PRIMARY KEY ("articleId");
