/*
  Warnings:

  - You are about to drop the column `job` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "job",
DROP COLUMN "marital_status",
DROP COLUMN "role";

-- DropEnum
DROP TYPE "MaritalStatus";

-- DropEnum
DROP TYPE "Role";
