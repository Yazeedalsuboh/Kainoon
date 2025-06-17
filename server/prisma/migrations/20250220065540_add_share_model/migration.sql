-- CreateTable
CREATE TABLE "Archive" (
    "id" SERIAL NOT NULL,
    "session_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "marital_status" "MaritalStatus" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "articleId" INTEGER NOT NULL,
    "newspaperId" INTEGER NOT NULL,

    CONSTRAINT "Archive_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archive" ADD CONSTRAINT "Archive_newspaperId_fkey" FOREIGN KEY ("newspaperId") REFERENCES "Newspaper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
