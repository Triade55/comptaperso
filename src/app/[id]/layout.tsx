import { BreadcrumbWithCustomSeparator } from '@/components/Breadcrumbs';
import { MoveLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="bg-blue-400 dark:bg-black h-full p-6">
        {children}
    </div>
  )
}
