import { prisma } from "@/lib/prisma";
import { getMontantInCFA } from "@/lib/utils";
import clsx from "clsx";
import { EyeOff } from "lucide-react";
import React from "react";

export default async function Montant() {
  const transactions = await prisma.wallet.findMany({
    select: {
      montant: true,
      DorR: true,
    },
  });
  let somme = 0;
  transactions.map((transaction) => {
    if (transaction.DorR === "D") {
      somme = somme - transaction.montant;
    } else {
      somme = somme + transaction.montant;
    }
  });

  return (
    <>
      <div className={clsx(somme < 0 && "text-red-500 dark:text-red-900",somme>1000 && "text-green-400 dark:text-green-900")}>{getMontantInCFA(somme,false)}</div>
      <sub className={clsx(somme < 0 && "text-red-500 dark:text-red-900",somme>1000 && "text-green-400 dark:text-green-900","flex text-2xl items-end gap-3")}>
        F <EyeOff />
      </sub>
    </>
  );
}
