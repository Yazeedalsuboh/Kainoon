/*
  Warnings:

  - You are about to drop the column `shared` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the `_ArticleTopics` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `img` on table `Newspaper` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_ArticleTopics" DROP CONSTRAINT "_ArticleTopics_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleTopics" DROP CONSTRAINT "_ArticleTopics_B_fkey";

-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "shared",
ADD COLUMN     "shares" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Newspaper" ALTER COLUMN "img" SET NOT NULL;

-- DropTable
DROP TABLE "_ArticleTopics";

-- CreateTable
CREATE TABLE "_ArticleToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToTopic_AB_unique" ON "_ArticleToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToTopic_B_index" ON "_ArticleToTopic"("B");

-- AddForeignKey
ALTER TABLE "_ArticleToTopic" ADD CONSTRAINT "_ArticleToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToTopic" ADD CONSTRAINT "_ArticleToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
