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
import {
  createGroupe,
  deletteGroupe,
  GroupeById,
  putGroupe,
} from "@/query/groupe.query";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
type Props = {
  groupe?: GroupeById;
  delette?: boolean;
};
export function GroupeForm({ groupe, delette }: Props) {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: groupe?.name,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (groupe) {
      if (delette) {
        await deletteGroupe(groupe.id);
      } else {
        await putGroupe(groupe.id, values.name);
      }
    } else {
      await createGroupe(values.name);
    }
    await router.push("/groupe");
    router.refresh();
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-4 p-2 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Exemple : orange money" {...field} />
              </FormControl>
              <FormDescription className="flex gap-2 items-center mt-2 "> <AlertTriangle/> Ecrivez le en minuscule , Nous nous chagerons de tous </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={
          delette ? "destructive":(groupe? "warning":"success")
          } >{delette?"Supprime":(groupe? "Modifie":"Ajoute")} ce groupe</Button>
      </form>
    </Form>
  );
}
