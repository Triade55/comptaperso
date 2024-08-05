"use server"
import { prisma } from "@/lib/prisma";
import { getUser } from "./user.query";
import { Prisma } from "@prisma/client";
type transactiondata = {
  id: string;
  name: string;
  montant: number;
  createdAt: Date;
  DorR: string;
};
type props = {
  transactionData: transactiondata[];
};
export async function getAlltransactions() {
  const user = await getUser();
  const transaction = await prisma.wallet.findMany({
    where: {
      user:user
    },
    select: {
      id: true,
      createdAt: true,
      name: true,
      DorR: true,
      montant: true,
      groupeId:true

    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return transaction;
}
export async function getTransaction(id:string) {
  const transaction = await prisma.wallet.findUnique({
    where:{
      id:id
    },
    select: {
      id: true,
      createdAt: true,
      name: true,
      DorR: true,
      montant: true,
      groupeId:true
    },
    
  });

  return transaction;
}
 export async function createTransaction(
  name: string,
  montant: number,
  groupe: string,
  DorR: string
) {
  const user = await getUser();
  const userId = user.id;
  try {
    const wallet = await prisma.wallet.create({
      data: {
        name,
        montant,
        userId,
        groupeId: groupe,
        DorR,
      },
    });
  } catch (error) {
    console.error("Error creating wallet:", error);
  } finally {
    await prisma.$disconnect();
  }
}
 export async function putTransaction(
  id:string,
  name: string,
  montant: number,
  groupe: string,
  DorR: string,
) {
 
  try {
    const wallet = await prisma.wallet.updateMany({
      where:{
        id:id
      },
      data: {
        name:name,
        montant:montant,
        groupeId: groupe,
        DorR:DorR,
      },
    });
  } catch (error) {
    console.error("Error creating wallet:", error);
  } finally {
    await prisma.$disconnect();
  }
}
 export async function delleteTransaction(
  id:string,
  
) {
 
  try {
    const wallet = await prisma.wallet.delete({
      where:{
        id:id
      }
    });
  } catch (error) {
    console.error("Error creating wallet:", error);
  } finally {
    await prisma.$disconnect();
  }
}


export type TransactionById = Prisma.PromiseReturnType<typeof getTransaction>;