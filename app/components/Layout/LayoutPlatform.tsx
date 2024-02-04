import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import MainProvider from './MainProvider'
import Sidebar from '../Sidebar/Sidebar';



export default function LayoutPlatform({ children }: PropsWithChildren<unknown>) {
	return (
		<MainProvider>
			<div className="w-full relative flex ">
				<Sidebar />
				<div className="relative md:ml-80 w-full">
					<div
						className="
								mx-auto 
								w-full 
								"
					>
						<div
							className="
								flex 
								flex-wrap 
							"
						>
								<div
									className="
										relative 
										flex 
										flex-col 
										min-w-0 
										break-words 
										w-full
										
										text-gray-700 
										dark:text-gray-100
									"
								>
									{children}

							</div>
						</div>
					</div>
				</div>
			</div>
			<Toaster />
		</MainProvider>
	)
}
