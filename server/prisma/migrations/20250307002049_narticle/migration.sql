-- AlterTable
ALTER TABLE "Archive" ADD COLUMN     "nArticleId" INTEGER;

-- AlterTable
ALTER TABLE "Click" ADD COLUMN     "nArticleId" INTEGER;

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "nArticleId" INTEGER;

-- AlterTable
ALTER TABLE "Copy" ADD COLUMN     "nArticleId" INTEGER;

-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "nArticleId" INTEGER;

-- AlterTable
ALTER TABLE "Share" ADD COLUMN     "nArticleId" INTEGER;

-- CreateTable
CREATE TABLE "NArticle" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "NArticle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Click" ADD CONSTRAINT "Click_nArticleId_fkey" FOREIGN KEY ("nArticleId") REFERENCES "NArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Copy" ADD CONSTRAINT "Copy_nArticleId_fkey" FOREIGN KEY ("nArticleId") REFERENCES "NArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_nArticleId_fkey" FOREIGN KEY ("nArticleId") REFERENCES "NArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_nArticleId_fkey" FOREIGN KEY ("nArticleId") REFERENCES "NArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_nArticleId_fkey" FOREIGN KEY ("nArticleId") REFERENCES "NArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_nArticleId_fkey" FOREIGN KEY ("nArticleId") REFERENCES "NArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
