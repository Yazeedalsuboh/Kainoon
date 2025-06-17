/*
  Warnings:

  - You are about to drop the column `user_id` on the `Archive` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Archive" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
