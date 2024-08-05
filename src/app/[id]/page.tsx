import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTransaction } from "@/query/walet.query";
import {
  Delete,
  Edit,
  MoveLeftIcon,
  Pencil,
  PencilIcon,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const transaction = await getTransaction(id.toString());
  if (!transaction) {
    notFound()
  }

  return (
    <>
      <div className="">
        Nom : {transaction?.name} <br />
        Montant : {transaction?.montant} <br />
        date : <br />
      </div>
      <div className="flex justify-evenly py-6">
        <Link
          href={"/" + transaction?.id + "/edit"}
          className={cn(buttonVariants({ variant: "warning" }),"gap-3")}
        >
          Edit <Edit />{" "}
        </Link>
        <Link
          href={"/" + transaction?.id + "/delette"}
          className={cn(buttonVariants({ variant: "destructive" }),"gap-3")}
        >
          Supprimer <Trash />{" "}
        </Link>
        
      </div>
    </>
  );
}
