/*
  Warnings:

  - You are about to drop the `Analytics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Newspaper` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArticleToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_newspaperId_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToTopic" DROP CONSTRAINT "_ArticleToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToTopic" DROP CONSTRAINT "_ArticleToTopic_B_fkey";

-- DropTable
DROP TABLE "Analytics";

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "Newspaper";

-- DropTable
DROP TABLE "Topic";

-- DropTable
DROP TABLE "_ArticleToTopic";
