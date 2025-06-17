/*
  Warnings:

  - Added the required column `arname` to the `Newspaper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Newspaper" ADD COLUMN     "arname" TEXT NOT NULL;
