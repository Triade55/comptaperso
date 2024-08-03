/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Groupe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Groupe_name_key" ON "Groupe"("name");
