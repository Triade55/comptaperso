import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumbs";
import Groupe from "@/components/groupe/Groupe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllGroupe, getAllGroupeForSomme } from "@/query/groupe.query";
import {
  Delete,
  DeleteIcon,
  Edit,
  Edit2,
  Pencil,
  PlusCircle,
  Trash,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const groupes = await getAllGroupeForSomme();
  return (
    <div>
      <div className="flex justify-center ">
        <Link
          href="/groupe/add"
          className={cn(buttonVariants({ variant: "success" }),"gap-3")}
        >
          Ajouter Un groupe
          <PlusCircle />
        </Link>
      </div>
      <div className="space-y-4 my-3">
        {groupes?.map((groupe) => (
          <Groupe groupe={groupe} key={groupe.id} />
        ))}
      </div>
    </div>
  );
}
