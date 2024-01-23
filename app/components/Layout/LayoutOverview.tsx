import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import MainProvider from './MainProvider'
import Navbar from '@/app/components/Navbar/Navbar'
import { headers } from 'next/headers';



export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	const headersList = headers();
	const pathname = headersList.get("x-invoke-path")
	return (
		<MainProvider>
			<Navbar pathname={pathname} />
			
			<section>{children}</section>
			<Toaster />
		</MainProvider>
	)
}
