import type { Metadata } from 'next'

import LayoutPlatform from '@/app/components/Layout/LayoutPlatform';


export const metadata: Metadata = {
  title: 'LMS Platform',
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
