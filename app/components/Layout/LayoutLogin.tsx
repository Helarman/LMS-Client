import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import MainProvider from './MainProvider'



export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<MainProvider>
			<section>{children}</section>
			<Toaster />
		</MainProvider>
	)
}
