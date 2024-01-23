'use client'

import { SessionProvider } from 'next-auth/react'
import { type PropsWithChildren } from 'react'

export default function MainProvider({ children }: PropsWithChildren<unknown>) {
    return (
        <SessionProvider>
                {children}
        </SessionProvider>
    )
}
