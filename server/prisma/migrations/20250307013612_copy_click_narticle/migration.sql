/*
  Warnings:

  - You are about to drop the column `age` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `job` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `newspaperId` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `session_id` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Copy` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `Copy` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Copy` table. All the data in the column will be lost.
  - You are about to drop the column `job` on the `Copy` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `Copy` table. All the data in the column will be lost.
  - You are about to drop the column `newspaperId` on the `Copy` table. All the data in the column will be lost.
  - You are about to drop the column `session_id` on the `Copy` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Click" DROP CONSTRAINT "Click_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Click" DROP CONSTRAINT "Click_newspaperId_fkey";

-- DropForeignKey
ALTER TABLE "Copy" DROP CONSTRAINT "Copy_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Copy" DROP CONSTRAINT "Copy_newspaperId_fkey";

-- AlterTable
ALTER TABLE "Click" DROP COLUMN "age",
DROP COLUMN "articleId",
DROP COLUMN "gender",
DROP COLUMN "job",
DROP COLUMN "marital_status",
DROP COLUMN "newspaperId",
DROP COLUMN "session_id";

-- AlterTable
ALTER TABLE "Copy" DROP COLUMN "age",
DROP COLUMN "articleId",
DROP COLUMN "gender",
DROP COLUMN "job",
DROP COLUMN "marital_status",
DROP COLUMN "newspaperId",
DROP COLUMN "session_id";
