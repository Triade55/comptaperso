"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { createTransaction, putTransaction, TransactionById } from "@/query/walet.query";
import { useRouter } from "next/navigation";
import { getAllGroupe, GroupeById } from "@/query/groupe.query";
import { useEffect, useState } from "react";
import PageComponent from "./SelectGroupe";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Le nom est requis",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),

  montant: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),

  DorR: z.enum(["D", "R"], {
    required_error: "tu as besoins de selectioné le type",
  }),

  groupe: z.string({
    required_error: "tu as besoins de selectioné le groupe",
  }),
});
type Props = {
  className?: string;
  setOpen?: (b:boolean)=>void
  transaction? : TransactionById
};
export function WalletForm({ className,transaction,setOpen }: Props) {
  
  // 1. Define your form.
  const router = useRouter()
  const DorR = transaction?.DorR === "D"?"D":"R"
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: transaction?.name ,
      montant: String( transaction?.montant),
      groupe: transaction?.groupeId,
    
      DorR: DorR,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const montant = Number(values.montant)
    if(transaction){
      await putTransaction(transaction.id,values.name,montant,values.groupe,values.DorR)
    }else{
      await createTransaction(values.name,montant,values.groupe,values.DorR)
    }
    await router.push('/')
    router.refresh()
    if (setOpen) {
      setOpen(false)
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={clsx("space-y-6", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>Libélé de la Transaction</FormLabel>
                <FormControl>
                  <Input placeholder="exemple:Placali matin" autoComplete="off" {...field} />
                </FormControl>

                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="montant"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>Libélé de la Transaction</FormLabel>
                <FormControl>
                  <Input placeholder="exemple : 1000FCFA" autoComplete="off" {...field} type="number" />
                </FormControl>
                <FormDescription>
                  La somme de la transaction 
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="groupe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Groupes</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir le groupe" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <PageComponent/>
                </SelectContent>
              </Select>
              <FormDescription>
                La categorie de la transaction 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="DorR"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Le type de transaction </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="D" />
                    </FormControl>
                    <FormLabel className="font-normal">Depense</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="R" />
                    </FormControl>
                    <FormLabel className="font-normal">Revenue</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" variant="success">Ajouter</Button>
      </form>
    </Form>
  );
}
