import { ModeToggle } from "@/components/ModeToggle";
import { DrawerDialogDemo } from "@/components/portefeuille/formulaire";
import Montant from "@/components/portefeuille/Montant";
import Transaction from "@/components/portefeuille/Transaction";
import { prisma } from "@/lib/prisma";
import { getMontantInCFA } from "@/lib/utils";
import { getAlltransactions } from "@/query/walet.query";
import {
  AlertCircle,
  EyeOff,
  HandCoinsIcon,
  Settings,
  Settings2,
  SettingsIcon,
  Wallet2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  const transactions = await getAlltransactions()
  return (
    <>
      <div className="bg-white dark:bg-black border">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </>
  );
}
