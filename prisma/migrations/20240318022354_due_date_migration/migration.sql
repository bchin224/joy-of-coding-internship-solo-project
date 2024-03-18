/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ToDo` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `ToDo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ToDo` DROP COLUMN `createdAt`,
    ADD COLUMN `dueDate` VARCHAR(191) NOT NULL;
