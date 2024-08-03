import { GroupeForm } from '@/components/groupe/GroupeForm'
import { Button } from '@/components/ui/button'
import { deletteGroupe, getGroupeById } from '@/query/groupe.query'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
    const id  = params.id
    const groupe = await getGroupeById(id)
   
    return (
    <GroupeForm groupe={groupe} delette/>
  )
}
