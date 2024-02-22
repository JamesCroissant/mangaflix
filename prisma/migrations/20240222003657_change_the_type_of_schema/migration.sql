/*
  Warnings:

  - You are about to drop the column `categories` on the `Manga` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Manga` table. All the data in the column will be lost.
  - You are about to drop the column `statuses` on the `Manga` table. All the data in the column will be lost.
  - Added the required column `category` to the `Manga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Manga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "categories",
DROP COLUMN "genres",
DROP COLUMN "statuses",
ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "genre" "Genre" NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL;
