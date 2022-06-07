/*
  Warnings:

  - You are about to drop the column `commnet` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT
);
INSERT INTO "new_Feedback" ("id", "screenshot", "type") SELECT "id", "screenshot", "type" FROM "Feedback";
DROP TABLE "Feedback";
ALTER TABLE "new_Feedback" RENAME TO "Feedback";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
