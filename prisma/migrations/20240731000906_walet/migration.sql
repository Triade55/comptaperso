-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "montant" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "groupeId" TEXT NOT NULL,
    "DorR" TEXT NOT NULL DEFAULT 'D',
    "userId" TEXT NOT NULL,
    CONSTRAINT "Wallet_groupeId_fkey" FOREIGN KEY ("groupeId") REFERENCES "Groupe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);