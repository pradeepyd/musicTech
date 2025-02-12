/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Instructor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `validityDays` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Instructor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "validityDays" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_email_key" ON "Instructor"("email");
