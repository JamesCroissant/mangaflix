/*
  Warnings:

  - You are about to drop the column `comment` on the `Manga` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Review` table. All the data in the column will be lost.
  - Added the required column `commment` to the `Manga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "comment",
ADD COLUMN     "commment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "content",
DROP COLUMN "score",
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;
