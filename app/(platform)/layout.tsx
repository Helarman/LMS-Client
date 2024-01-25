import type { Metadata } from 'next'

import LayoutClient from '@/app/components/Layout/LayoutPlatform';
import LayoutPlatform from '@/app/components/Layout/LayoutPlatform';


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
    <LayoutPlatform >
      {children}
    </LayoutPlatform>
  )
}
