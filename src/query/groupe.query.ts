"use server";
import { prisma } from "@/lib/prisma";
import { getUser } from "./user.query";
import { Prisma } from "@prisma/client";

export async function createGroupe(name: string) {
  const user = await getUser();
  const userId = user.id;
  try {
    const groupe = await prisma.groupe.create({
      data: {
        name,
        userId,
      },
    });
    console.log(groupe);
  } catch (error) {
    console.error("Error creating groupe:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function getAllGroupe() {
  const user = await getUser();
  const userId = user.id;
  try {
    const groupes = await prisma.groupe.findMany({
      where: {
        userId,
      },
      select:{
        name:true,
        id:true,
        Wallet:{
          select:{
            montant:true,
            DorR:true
          }
        }
      }
    });
    return groupes;
  } catch (error) {
    console.error("Error creating groupe:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function getAllGroupeForSomme() {
  const user = await getUser();
  const userId = user.id;
  try {
    const groupes = await prisma.groupe.findMany({
      where: {
        userId,
      },select:{
        name:true,
        id:true,
        Wallet:{
          select:{
            montant:true,
            DorR:true
          }
        }
      }
    });
    return groupes;
  } catch (error) {
    console.error("Error creating groupe:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function getGroupeById(id: string) {
  try {
    const groupe = await prisma.groupe.findUnique({
      where: {
        id,
      },
      select:{
        name:true,
        id:true,
        Wallet:{
          select:{
            montant:true,
            DorR:true
          }
        }
      }
    });
    return groupe;
  } catch (error) {
    console.error("Error creating groupe:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function putGroupe(id: string,name:string) {

  try {
    const groupe = await prisma.groupe.update({
      where: {
        id:id
      },
      data:{
        name: name,
      }
    });
  } catch (error) {
    console.error("Error creating groupe:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export async function deletteGroupe(id: string) {
  try {
    const groupe = await prisma.groupe.delete({
      where: {
        id:id
      },
      
    });
  } catch (error) {
    console.error("Error creating groupe:", error);
  } finally {
    await prisma.$disconnect();
  }
}
export type GroupeById = Prisma.PromiseReturnType<typeof getGroupeById> ;
export type GroupeById2 = Prisma.PromiseReturnType<typeof getAllGroupeForSomme>;