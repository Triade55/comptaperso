"use client"
import { Button } from "@/components/ui/button";
import { delleteTransaction } from "@/query/walet.query";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
    id :string
}
export default async function Sub({id}:Props) {
    const router = useRouter()
    async function handlerButton() {
        await delleteTransaction(id)
        await router.push('/')
        router.refresh()
    }


  return <Button variant="destructive" onClick={()=>handlerButton()}>Je me veux suprimer le {id} </Button>;
}
