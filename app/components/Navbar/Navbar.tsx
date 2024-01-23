'use client'
import { useHasMounted } from "@/app/hooks/useHasMounted";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const Navbar = ({ pathname }: { pathname: string | null }) => {
    
    const router = useRouter();
    const hasMounted = useHasMounted();
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        if (pathname && pathname?.length < 2) {
            setIsHomePage(true)
        }
    });

    const { data: session } = useSession()
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Link', href: '/Link' },
        { label: 'Link', href: '/Link' },
        { label: 'Link', href: '/Link' },
    ]
    return (
        <div className={`
            ${isHomePage ? null : 'bg-emerald-400'}
            absolute 
            w-full 
            `}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-black uppercase " href="/">
                             // Logotype
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav>
                            <ul className="flex items-center gap-6  ">
                                {links && links.map(({ label, href }) => (
                                    <li key={label}>
                                        <button
                                            onClick={() => { router.push(href) }}
                                            className="uppercase text-black transition hover:opacity-75 tracking-widest"
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}


                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4 ">

                        <div className="sm:flex sm:gap-4">
                            {hasMounted && session ?
                                <>
                                    < button
                                        className="uppercase  py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                                        onClick={() => router.push('/platform')}
                                    >
                                        Platform
                                    </button>
                                    < button
                                        className="uppercase px-2 py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                                        onClick={() => signOut()}
                                    >
                                        Logout
                                    </button>
                                </>
                                :
                                < button
                                    className="uppercase px-2 py-2.5 font-medium text-black hover:opacity-75 tracking-widest"
                                    onClick={() => signIn('google')}
                                >
                                    Login
                                </button>
                            }
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
};

export default Navbar