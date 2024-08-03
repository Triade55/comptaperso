import React from 'react'
import Sub from './sub'

export default async function Page({ params }: { params: { id: string } }) {
    return (
    <div>


      <Sub id={params.id} />
    </div>
  )
}
