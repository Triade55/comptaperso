import { AdapterAccount, AdapterUser } from "next-auth/adapters"
import { prisma } from "./prisma"

type Props ={
    userId:string
    
}
export default async function createDefaultGroupe({userId}:Props) {
    // On verifie si l'utilisateur existe a unn groupe
    const groupe = await prisma.groupe.findFirst({
        where:{
            userId
        }
    })
    if(!groupe){
        // Si non on cree un groupe par defaut
        await prisma.groupe.create({
            data:{
                name:"Par Defaut",
                userId
            }
        })
    }
}