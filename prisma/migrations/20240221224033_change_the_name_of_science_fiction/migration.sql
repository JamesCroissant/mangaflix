/*
  Warnings:

  - The values [SCIENCE_FICTION] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('SF', 'FANTASY', 'ROMANCE', 'COMEDY', 'HORROR', 'MYSTERY', 'HISTORY', 'ACTION', 'SPORTS', 'OTHERS');
ALTER TABLE "Manga" ALTER COLUMN "categories" TYPE "Category_new"[] USING ("categories"::text::"Category_new"[]);
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;
