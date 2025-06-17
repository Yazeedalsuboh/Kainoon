/*
  Warnings:

  - The values [DIVORCED,WIDOWED] on the enum `MaritalStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `clicks` on the `Analytics` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MaritalStatus_new" AS ENUM ('SINGLE', 'MARRIED');
ALTER TABLE "Click" ALTER COLUMN "marital_status" TYPE "MaritalStatus_new" USING ("marital_status"::text::"MaritalStatus_new");
ALTER TABLE "User" ALTER COLUMN "marital_status" TYPE "MaritalStatus_new" USING ("marital_status"::text::"MaritalStatus_new");
ALTER TYPE "MaritalStatus" RENAME TO "MaritalStatus_old";
ALTER TYPE "MaritalStatus_new" RENAME TO "MaritalStatus";
DROP TYPE "MaritalStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "clicks";
