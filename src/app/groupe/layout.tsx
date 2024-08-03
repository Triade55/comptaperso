import { BreadcrumbWithCustomSeparator } from '@/components/Breadcrumbs';
import React from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
     {children} 
    </>
  )
}
