/*
  Warnings:

  - You are about to drop the `LikePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LikePost" DROP CONSTRAINT "LikePost_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "likePost" INTEGER[] DEFAULT ARRAY[]::INTEGER[];

-- DropTable
DROP TABLE "LikePost";
