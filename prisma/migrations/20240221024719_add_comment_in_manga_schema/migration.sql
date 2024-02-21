/*
  Warnings:

  - Added the required column `comment` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "comment" TEXT NOT NULL;
