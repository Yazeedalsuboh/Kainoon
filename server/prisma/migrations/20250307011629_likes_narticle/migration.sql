/*
  Warnings:

  - You are about to drop the column `age` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `job` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `newspaperId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `session_id` on the `Like` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_newspaperId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "age",
DROP COLUMN "articleId",
DROP COLUMN "gender",
DROP COLUMN "job",
DROP COLUMN "marital_status",
DROP COLUMN "newspaperId",
DROP COLUMN "session_id";
