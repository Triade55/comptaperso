"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, Wallet2 } from "lucide-react";
import Link from "next/link";
import {WalletForm} from "./WalletForm";
import { GroupeById } from "@/query/groupe.query";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Link href="#" className="flex flex-col items-center gap-2 text-sm">
            <div className="bg-blue-400 dark:bg-blue-900 p-4 rounded-full  ">
              <Wallet2 size="30" />
            </div>
            Portefeuille
          </Link>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ajouter d'une transaction</DialogTitle>
            <DialogDescription>
              Ajoutez les depenses ou revenues ici, nous nous occuperons de tous. 
            </DialogDescription>
          </DialogHeader>
          <WalletForm setOpen={setOpen}/>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Link href="#" className="flex flex-col items-center gap-2 text-sm">
          <div className="bg-blue-400 dark:bg-blue-900 p-4 rounded-full  ">
            <Wallet2 size="30" />
          </div>
          Portefeuille
        </Link>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Ajouter d'une transaction</DrawerTitle>
          <DrawerDescription>
          Ajoutez les depenses ou revenues ici, nous nous occuperons de tous.
          </DrawerDescription>
        </DrawerHeader>
        <WalletForm className="px-4" setOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DrawerClose >
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
