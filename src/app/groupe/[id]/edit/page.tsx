import { GroupeForm } from '@/components/groupe/GroupeForm'
import { getGroupeById } from '@/query/groupe.query'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
    const groupe = await getGroupeById(params.id)
    return (
    <div className='p-5'>
      <GroupeForm groupe={groupe}/>
    </div>
  )
}
