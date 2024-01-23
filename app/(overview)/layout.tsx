import type { Metadata } from 'next'

import LayoutOverview from '@/app/components/Layout/LayoutOverview';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <LayoutOverview>
      {children}
    </LayoutOverview>

  )
}