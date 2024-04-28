/*
  Warnings:

  - You are about to drop the column `commentId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likeId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_likeId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "commentId",
DROP COLUMN "likeId",
ADD COLUMN     "comment" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "like" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Like";
