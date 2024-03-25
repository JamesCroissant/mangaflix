/*
  Warnings:

  - You are about to drop the column `commment` on the `Manga` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "commment",
ADD COLUMN     "comment" TEXT NOT NULL;
