import { cn } from "@/lib/utils";
import { GroupeById, GroupeById2 } from "@/query/groupe.query";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

type Props = {
  groupe: GroupeById;
};

function Groupe({ groupe }: Props) {
  const walets = groupe?.Wallet;
  let total = 0;
  walets?.map((walet) => {
    {
      walet.DorR === "D"
        ? (total -= walet?.montant)
        : (total += walet?.montant);
    }
  });
  return (
    <div className="flex justify-between items-start p-6  border-y-2  dark:border-black border-white ">
      <div className="text-2xl gap-3">
        {groupe?.name}
        <div className="italic text-sm text-gray-500 pt-1">{total}</div>
      </div>
      <div className="flex gap-2">
        <Link
          href={`groupe/${groupe?.id}/edit`}
          className={cn(buttonVariants({ variant: "warning" }))}
        >
          <Edit />
        </Link>
        <Link
          href={`groupe/${groupe?.id}/delette`}
          className={cn(buttonVariants({ variant: "destructive" }))}
        >
          <Trash />
        </Link>
      </div>
    </div>
  );
}

export default Groupe;
