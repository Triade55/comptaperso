import { WalletForm } from '@/components/portefeuille/WalletForm';
import { getTransaction } from '@/query/walet.query';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const transaction = await getTransaction(id.toString());    
  return (
    <div>
      <WalletForm transaction={transaction} />
    </div>
  )
}
